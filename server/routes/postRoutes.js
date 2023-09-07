const express = require('express');
const router = express.Router();
const multer = require("multer");
const crypto = require('crypto');
const { Storage } = require('@google-cloud/storage');
const Post = require('../models/post');
const Profile = require('../models/profile');
const nodemailer = require('nodemailer');

const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID
});

const multerUpload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Upload multiple images
router.post('/upload-images', multerUpload.array('images', 10), async (req, res) => {
    try {
        const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

        let urls = [];  // To store the public URLs of the uploaded files

        await Promise.all(req.files.map(async file => {
            const blob = bucket.file(`${Date.now()}-${file.originalname}`);
            const blobStream = blob.createWriteStream({ resumable: false });

            blobStream.on('error', err => {
                console.error('GCS Upload Error:', err);
                throw new Error('Upload to GCS failed:', err.message);
            });

            await new Promise((resolve, reject) => {
                blobStream.on('finish', () => {
                    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    urls.push(publicUrl);  // Pushing the URL to the array
                    resolve();
                });

                blobStream.end(file.buffer);
            });
        }));

        res.json({ urls: urls });  // Return the URLs
    } catch (error) {
        console.error('Error uploading to GCS:', error);
        res.status(500).json({ status: 'error', message: 'Failed to upload PDFs.' });
    }
});
// Upload multiple PDFs
router.post('/upload-pdfs', multerUpload.array('pdfs', 10), async (req, res) => {
    try {
        const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

        let urls = [];  // To store the public URLs of the uploaded files

        await Promise.all(req.files.map(async file => {
            const blob = bucket.file(`${Date.now()}-${file.originalname}`);
            const blobStream = blob.createWriteStream({ resumable: false });

            blobStream.on('error', err => {
                console.error('GCS Upload Error:', err);
                throw new Error('Upload to GCS failed:', err.message);
            });

            await new Promise((resolve, reject) => {
                blobStream.on('finish', () => {
                    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    urls.push(publicUrl);  // Pushing the URL to the array
                    resolve();
                });

                blobStream.end(file.buffer);
            });
        }));

        res.json({ urls: urls });  // Return the URLs
    } catch (error) {
        console.error('Error uploading to GCS:', error);
        res.status(500).json({ status: 'error', message: 'Failed to upload PDFs.' });
    }
});

// RazorPay Setup
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Payment Order in RazorPay
router.post("/create-order", async (req, res) => {
    try {
      const options = {
        amount: 100,  // Amount in paise (1 Rs = 100 paise)
        currency: "INR",
        receipt: "order_rcptid_11",  // Optional receipt number
      };
  
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Failed to create order.' });
    }
  });

//   Create paper buy order
  router.post("/create-order-paper", async (req, res) => {
    try {
        const {price} =req.body;
      const options = {
        amount: price*100,  // Amount in paise (1 Rs = 100 paise)
        currency: "INR",
        receipt: "order_rcptid_11",  // Optional receipt number
      };
  
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Failed to create order.' });
    }
  });

// Verify Payment in Razor pay and send post for review
router.post("/verify-payment", async (req, res) => {
    const { paymentId, orderId, signature, postData } = req.body;
    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(orderId + "|" + paymentId)
        .digest("hex");

    if (generatedSignature === signature) {
        // Payment is successful

        // Create Post after payment is successful
        try {
            const profile = await Profile.findOne({email:postData.profile})

            await Post.create({
                heading: postData.heading,
                abstract: postData.abstract,
                image: postData.images,
                pdf: postData.pdfs,
                price: postData.price,
                email: postData.profile,
                username: profile.username,
                userPfp: profile.userPfp,
                category: postData.category,
                review : 'forReview',
                type : 'verified'
            });

            // Sending the email for review
            const mailOptions = {
                from: process.env.EMAIL, // sender address
                to: process.env.REVIEW_EMAIL, // list of receivers
                subject: 'New Paper for Review', // Subject line
                text: 'A new post has been created. Please review it.', // plain text body
                html: `<h1>New Post Created</h1>
                        <p>Heading: ${postData.heading}</p>
                        <p>Abstract: ${postData.abstract}</p>
                        <p>Price: ${postData.price}</p>
                        <p>Email: ${postData.profile}</p>
                        <p>Username: ${profile.username}</p>
                        <p>Name: ${profile.name}</p>
                        <p>Images: ${postData.images}</p>
                        <p>PDFs: ${postData.pdfs}</p>` // html body
            };

            transporter.sendMail(mailOptions, function (err, info) {
                if (err) console.log(err);
                else console.log(info);
            });

            res.json({ status: "ok", message: "Payment successful and post created successfully" });
        } catch (error) {
            console.log(error);
            res.json({ status: "error", error: 'Failed to create post' });
        }
    } else {
        res.status(400).json({ status: 'error', message: 'Payment verification failed.' });
    }
});

// Verify paper buy payment
router.post("/verify-payment-paper", async (req, res) => {
    const { paymentId, orderId, signature,id,BuyerId } = req.body;
    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(orderId + "|" + paymentId)
        .digest("hex");

    if (generatedSignature === signature) {
        const post = await Post.findOne({_id:id})
        post.Buyers.push(BuyerId);
        await post.save();
        // Payment is successful
    
    res.json({ status: "ok", message: "Payment successful and post created successfully" });
    } else {
        res.status(400).json({ status: 'error', message: 'Payment verification failed.' });
    }
});


// Create Post
router.post("/create-post", async (req, res) => {
    try {
        const profile = await Profile.findOne({email:req.body.profile})
        
        await Post.create({
            heading: req.body.heading,
            abstract: req.body.abstract,
            image: req.body.images,
            pdf: req.body.pdfs,
            price: req.body.price,
            email: req.body.profile,
            username: profile.username,
            userPfp: profile.userPfp,
            category: req.body.category,
            review: 'unReviewed',
            type : 'unverified'
        });

        res.json({ status: "ok", message: "Post created successfully" });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: 'Failed to create post' });
    }
});

// Get all posts
router.get("/posts", async (req, res) => {
    try {
        // Filter posts which have review as forReview
        const allPosts = await Post.find({review :{ $ne: "forReview" }});

        res.json({ status: "ok", posts: allPosts });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: "Failed to fetch posts" });
    }
});

// Get post using id
router.get("/post/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json({ status: "ok", post });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: "Failed to fetch post" });
    }
});

// Get Verified/Unverified Posts 
router.get("/posts/:status", async (req, res) => {
    const status = req.params.status; // this will be either 'verified' or 'unverified'
    
    if (!["verified", "unverified"].includes(status)) {
        return res.status(400).json({ status: "error", message: "Invalid status" });
    }

    try {
        const postsByStatus = await Post.find({ type: status });
        res.json({ status: "ok", posts: postsByStatus });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", message: "Failed to fetch posts" });
    }
});

// Fetch all posts of a user
router.get("/post/email/:email", async (req, res) => {
    try {
        const posts = await Post.find({ email: req.params.email });
        res.json({ status: "ok", posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to fetch posts" });
    }
});

// Fetch all posts bought by user
router.get("/post/owned/:id", async (req, res) => {
    try {
        const posts = await Post.find({ Buyers: req.params.id });
        res.json({ status: "ok", posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to fetch posts" });
    }
});

// Fetch posts for review
router.get('/posts-for-review', async (req, res) => {
    try {
      const postsForReview = await Post.find({ review: 'forReview' });
      res.json(postsForReview);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts for review." });
    }
  });

//   Approve post
router.post('/approve-post/:id', async (req, res) => {
    try {
        const post = await Post.findOne({_id :req.params.id});
        post.review = 'Reviewed';
        await post.save();
        res.json({ status: "ok", message: "Post approved successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to approve post" });
    }
});

// Reject post
router.post('/reject-post/:id', async (req, res) => {
    try {
        const post = await Post.findOne({_id :req.params.id});
        const CreatorEmail = post.email;
        const mailOptions = {
            from: process.env.EMAIL, // sender address
            to: CreatorEmail, // list of receivers
            subject: 'Paper Review comments',
            text : 'Latest comments on the paper post review',
            html: `<p>Heading: ${post.heading}</p>
            <p>Abstract: ${post.abstract}</p>
            <p>comments: ${req.body.comment}</p>`
        }
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) console.log(err);
            else console.log(info);
        });
        res.json({ status: "ok", message: "Post comments sent successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to reject post" });
    }
});
  

module.exports = router;
