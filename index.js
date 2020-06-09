const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
app.listen(PORT)