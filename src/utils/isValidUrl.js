function isValidUrl(value) {
  try {
    const url = new URL(value);

    // allow only http & https
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (err) {
    return false;
  }
}

module.exports = isValidUrl;
