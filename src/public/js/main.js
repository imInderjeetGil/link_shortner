function copyUrl() {
  const urlText = document.getElementById('shortUrl').innerText;
  navigator.clipboard.writeText(urlText);

  const status = document.getElementById('copyStatus');
  status.innerText = 'Copied to clipboard!';
}
