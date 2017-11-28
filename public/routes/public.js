const fs = require('fs');
const path = require('path');

function valid(req, res) {
  const extension = path.extname(req.url);
  const filename = req.url.slice(1);

  let contentType = '';

  switch (extension) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.png':
      contentType = 'text/png';
      break;
    default:
      contentType = 'text/plain';
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);

  const stream = fs.createReadStream(path.resolve('public', filename));

  stream.pipe(res);

  stream.on('error', error => {
    if (error.code === 'ENOENT') {
      console.log(error);
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(500, { 'Content-type': 'text/plain' });
      res.end(error.message);
    }
  });
}

module.exports = valid;
