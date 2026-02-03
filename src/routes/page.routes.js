const express = require('express');
const validateUrl = require('../middleware/validateUrl');

const router = express.Router();
const {
  renderHome,
  handleShorten
} = require('../controllers/page.controller');

router.get('/', renderHome);
router.post('/shorten', validateUrl, handleShorten);

module.exports = router;
