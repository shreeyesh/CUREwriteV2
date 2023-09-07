const express = require("express");
const app = express();
const port = 1337;
const cors = require("cors");
require('dotenv').config()

// Middlewear
app.use(cors());
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

app.listen(port, () => {
    console.log(`Curewrite app listening at http://localhost:${port}`);
    }
);
