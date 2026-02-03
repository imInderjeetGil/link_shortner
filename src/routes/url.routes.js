const express = require("express");
const router = express.Router();
const {createShortUrl, redirectToOriginal} = require("../controllers/url.controller");

router.post('/shorten', createShortUrl);
router.get('/:shortcode',redirectToOriginal);

module.exports = router;