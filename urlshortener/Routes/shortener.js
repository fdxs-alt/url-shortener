const express = require("express");
const router = express.Router();
const validURL = require("valid-url");
const shortID = require("shortid");
const URL = require("../models/Url");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config({ path: "./.env.test" });

router.post("/", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.baseUrl;
  if (!validURL.isUri(baseUrl)) return res.status(422).json("Invalid url");

  const urlCode = shortID.generate();
  if (!validURL.isUri(longUrl)) return res.status(422).json("Invalid url");
  try {
    let url = await URL.findOne({ longUrl });
    if (url) return res.status(200).json(url);
    else {
      const shortUrl = baseUrl + "/url/" + urlCode;
      url = new URL({
        longUrl,
        shortUrl,
        urlCode,
        date: new Date()
      });
      await url.save();
      res.json(url);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Error");
  }
});
router.get('/:code', async (req, res) => {
    try {
        const url = await URL.findOne({urlCode:req.params.code})
        if(!url)
        return res.status(400).json("No url")
        res.redirect(url.longUrl);
    } catch (error) {
        console.log(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router;
