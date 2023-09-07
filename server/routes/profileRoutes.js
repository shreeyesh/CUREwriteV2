const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const Post = require('../models/post');
const multer = require("multer");
const { Storage } = require('@google-cloud/storage');
const { error, profile } = require('console');
const jwt = require("jsonwebtoken");
const { followUser, unfollowUser, followCheck } = require('./dbHandler');

const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID
});

const multerUpload = multer({ storage: multer.memoryStorage() });
// Upload profile picture
router.post('/upload-pfp', multerUpload.array('pfp', 10), async (req, res) => {
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
        res.status(500).json({ status: 'error', message: 'Failed to upload PfP.' });
    }
});
// Upload cover picture
router.post('/upload-cover', multerUpload.array('cover', 10), async (req, res) => {
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
        res.status(500).json({ status: 'error', message: 'Failed to upload Cover.' });
    }
});

// Fetch a profile
router.get("/profile/:username", async (req, res) => {
    try {
        const profile = await Profile.findOne({ username: req.params.username });
        if (!profile) {
            return res.status(404).json({ status: "error", message: "Profile not found" });
        }
        res.json({ status: "ok", profile });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to fetch profile" });
    }
});

//  Edit a profile
router.put("/profile/:token/edit", async (req, res) => {
    const token = req.params.token;

    try {
        const profile = await Profile.findOne({ id: token });
        if (!profile) {
            return res.status(404).json({ status: "error", message: "Profile not found" });
        }

        // Check if username has changed
        const usernameChanged = req.body.username && req.body.username !== profile.username;
        // Check if pfp has changed
        const userPfpChanged = req.body.profilePicture && req.body.profilePicture !== profile.profilePicture;
        // Check if license number is unique
        // const LicNotUnique = await Profile.findOne({licenseNumber:req.body.licenseNumber})
        // if (LicNotUnique){
        //     throw new error("License number already in use")
        // }

        // Check if username is unique
        if (usernameChanged) {
        const UsernameNotUnique = await Profile.findOne({username:req.body.username})
        if (UsernameNotUnique){
            throw new error("Username is already in use");
        }
    }

        // Update only provided fields in the profile
        for (let key in req.body) {
            if (profile[key] !== undefined) {
                profile[key] = req.body[key];
            }
        }

        await profile.save();

        // If username has changed, update username in posts
        if (usernameChanged) {
            await Post.updateMany({email: profile.email },{ username: profile.username });
        }
        if (userPfpChanged) {
            await Post.updateMany({email: profile.email },{ userPfp: profile.profilePicture });
        }

        res.json({ status: "ok", message: "Profile updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update profile" });
    }
});

// Fetch id using username
router.post('/username-to-id/:username', async function (req, res){
    try{
        const profile =await Profile.findOne({username: req.params.username});
        if(!profile){
            throw new Error("Profile not found")
        }
        res.json({status:"ok", id:profile.id})
    }
    catch(error){
        console.log(error);
        res.status(500).json({status:"error", message:"Failed to fetch profile"})
    }
    }
);

// Endpoint to handle following a user
router.post('/follow/:username', async (req, res) => {
    // Extract username using token in headers
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.secret);
    const profile = await Profile.findOne({email:decoded.email})

    const followerUsername = profile.username; // Assuming the decoded token has the username of the follower
    const followeeUsername = req.params.username;

    try {
        const result = await followUser(followerUsername, followeeUsername);
        res.json({ status: 'ok', message: result });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

// Endpoint to handle unfollowing a user
router.post('/unfollow/:username', async (req, res) => {
   // Extract username using token in headers
   const authHeader = req.headers.authorization;

       const token = authHeader.split(' ')[1];
       const decoded = jwt.verify(token, process.env.secret);
       const profile = await Profile.findOne({email:decoded.email})
   
       const followerUsername = profile.username; // Assuming the decoded token has the username of the follower
       const followeeUsername = req.params.username;   

    try {
        const result = await unfollowUser(followerUsername, followeeUsername);
        res.json({ status: 'ok', message: result });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});
// Check if already following
router.get('/checkFollow/:username', async (req, res) => {
    const authHeader = req.headers.authorization;

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.secret);
        const profile = await Profile.findOne({email:decoded.email})
    
        const followerUsername = profile.username; // Assuming the decoded token has the username of the follower
        const followeeUsername = req.params.username;
    
        try {
            const result = await followCheck(followerUsername, followeeUsername);
            res.json({ status: 'ok', message: result });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    
});


module.exports=router;