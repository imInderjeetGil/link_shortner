const URL = require('../models/URL');
const generateShortCode = require('../utils/generateShortCode');

exports.renderHome = (req, res) => {
  res.render('index', { shortUrl: null, error: null });
};

exports.handleShorten = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.render('index', {
      shortUrl: null,
      error: 'URL is required'
    });
  }

  // Check if URL already exists
  const existingUrl = await URL.findOne({ originalUrl });

  if (existingUrl) {
    return res.render('index', {
      shortUrl: `https://link-shortner-cgeg.onrender.com/${existingUrl.shortcode}`,
      error: null
    });
  }

  // reate new if not exists
  const shortcode = generateShortCode();

  await URL.create({
    originalUrl,
    shortcode
  });

  res.render('index', {
    shortUrl: `https://link-shortner-cgeg.onrender.com/${shortcode}`,
    error: null
  });
};
