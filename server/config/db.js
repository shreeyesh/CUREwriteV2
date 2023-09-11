const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGO_URL;
console.log(process.env.NODE_ENV)
console.log(process.env.prod_MONGO_URL)
let mongoURL
if (process.env.NODE_ENV==="development"){
    mongoURL=process.env.prod_MONGO_URL;
    // mongoURL ="mongodb://0.0.0.0:27017/cw";
} else {
    mongoURL=process.env.prod_MONGO_URL;
}
console.log("mongo uri",mongoURL);

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(process.env.MONGO_URL);
