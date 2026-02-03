const URL = require("../models/URL");
const generateShortCode = require("../utils/generateShortCode");


exports.createShortUrl = async (req,res) =>{
    const { originalUrl } = req.body;

    if(!originalUrl){
        return res.status(400).json({error:'URL is required'});
    }
    const shortcode = generateShortCode();

    const url = await URL.create({
        originalUrl,
        shortcode
    });

    res.json({
        shortUrl: `http://localhost:3000/${shortcode}`,
        originalUrl
    });
};

exports.redirectToOriginal = async (req, res) => {
  const { shortcode } = req.params;

  console.log("SHORTCODE RECEIVED:", shortcode);

  const url = await URL.findOne({ shortcode });

  if (!url) {
    return res.status(404).json({ error: "URL not found" });
  }

  console.log("REDIRECTING TO:", url.originalUrl);

  url.clicks++;
  await url.save();

  // 🔥 ONLY STRING HERE
  return res.redirect(url.originalUrl);
};

