const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config({ path: "./env.test" });
const connectDB = require('./util/db')
app.use(express.json())
connectDB();
app.use('/url', require('./Routes/shortener'));
const PORT = process.env.PORT || 5000;
app.listen(PORT)