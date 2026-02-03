const isValidUrl = require('../utils/isValidUrl');

module.exports = (req, res, next) => {
  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.render('index', {
      shortUrl: null,
      error: 'URL is required'
    });
  }

  if (!isValidUrl(originalUrl)) {
    return res.render('index', {
      shortUrl: null,
      error: 'URL is not valid'
    });
  }

  next();
};
