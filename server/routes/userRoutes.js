const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const User = require('../models/user')
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/register", async (req,res) => {
    try{
         await User.create({
            username: req.body.username,
            name:req.body.name,
            email: req.body.email,
            password: req.body.password,
            authType: 'local'
        })
        const token = jwt.sign({
                username: req.body.username,
                email: req.body.email
            },
            process.env.secret  
            )
            let profile = await Profile.findOne({email:req.body.email});
            if (!profile) {
                const jwtToken = jwt.sign({
                    email: req.body.email,
                    authType: 'local'
                  }, process.env.secret);
        
                profile = await Profile.create({
                username : req.body.username,
                name : req.body.name,
                email : req.body.email,
                id: jwtToken
                  });
            }
        res.json({status : "ok", user:token,username:req.body.username})
    }catch(err){
        console.log(err);
        res.json({status : "error", error : 'Duplicate Email'})
    }
})
router.post('/login', async (req,res) => {
       const user = await User.findOne({email: req.body.email, password : req.body.password})
    if (user){
         let profile = await Profile.findOne({email:req.body.email});
           
        return res.json({status : "ok", user:profile.id,  username: profile.username});
    }
    else{
        return res.json({status : "error", user:false});
    }

})

// Admin login
router.post('/login/role', async (req,res) => {
    const user = await User.findOne({email: req.body.email, password : req.body.password})
    if (user.role != 'user'){
    if (user){
         let profile = await Profile.findOne({email:req.body.email});
           
        return res.json({status : "ok", user:profile.id,  username: profile.username, role:user.role});
    }
    else{
        return res.json({status : "error", user:false});
    }
}
else{
    return res.json({status:"error", message : "No special roles allowed", user:false});
}

})

// Generate unique username
const generateUniqueUsername = async (baseName) => {
    const MAX_TRIES = 10;
    let tryCount = 0;
    while (tryCount < MAX_TRIES) {
        const randomSuffix = Math.floor(Math.random() * 10000); // generates a number between 0 and 9999
        const potentialUsername = `${baseName}${randomSuffix}`;
        
        const existingUser = await User.findOne({ username: potentialUsername });
        if (!existingUser) {
            return potentialUsername; // Found a unique username
        }

        tryCount += 1;
    }

    throw new Error('Unable to generate a unique username. Increase the randomness or range.');
};

// Google Sign in
router.post("/google-login", async (req, res) => {
    const { token }  = req.body;
    if (!token) {
        return res.status(400).json({ status: "error", message: "Token is missing." });
    }
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID, 
        });
    const payload = ticket.getPayload();
    const { name, email,picture } = payload;
  
    let user = await User.findOne({ email: email });
    let username = await Profile.findOne({username:name})
    let uniqueUsername;
    const sanitizedName = name.replace(/\s+/g, ''); // Remove all spaces
    if (username){
     uniqueUsername = await generateUniqueUsername(sanitizedName);
    } else{
         uniqueUsername = sanitizedName;
    }
    if (!user) {
        user = await User.create({
            username: uniqueUsername,
            name:name,
            email: email,
            password: 'google-authenticated-user',
            authType: 'google'
        });
    }


    let profile = await Profile.findOne({email:email});
    if (!profile) {
        const jwtToken = jwt.sign({
            email: email,
            authType: user.authType
          }, process.env.secret);

        profile = await Profile.create({
        username : uniqueUsername,
        name : name,
        email : email,
        profilePicture:picture,
        id: jwtToken
          });
          console.log("new profile created with username : ",uniqueUsername)
    }
    
  
    res.json({ status: "ok", user: profile.id,username:profile.username,userPfp:profile.profilePicture });
}catch(err){
    console.error(err)
    return res.status(500).json({ status: "error", message: "Error verifying token." });
}
  });

//   Verify user log in
router.post('/verifyUserLogin/:token', async (req ,res)=>{
    const token = req.params.token;
    try{
        const decoded = jwt.verify(token, process.env.secret);
        const user = await User.findOne({email: decoded.email});
        const profile = await Profile.findOne({email:decoded.email});
        if(user && profile){
            res.json({status : "ok", user:token,  username: profile.username, id: profile._id});
        }
        else{
            res.json({status : "error", user:false});
        }
    }
    catch(err){
        console.log(err);
        res.json({status : "error", user:false});
    }
}
);

  module.exports=router;