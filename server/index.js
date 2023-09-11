const express = require("express");
const app = express();
const PORT = process.env.PORT || 1337;
const cors = require("cors");
require('dotenv').config()

// Define allowed origins
const allowedOrigins = ['http://localhost:3001','http://localhost:3000', 'https://react-with-cloudrun-lwubjjnbzq-uc.a.run.app'];

// CORS Middleware
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.options('*', cors());  // Enable CORS pre-flight for all routes

app.use(express.json())

// Config
require('./config/db'); 

// Routes
const profileRoutes = require("./routes/profileRoutes")
app.use(profileRoutes);

const postRoutes = require("./routes/postRoutes")
app.use(postRoutes);

const userRoutes = require("./routes/userRoutes")
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Curewrite app listening at http://localhost:${PORT}`);
});
