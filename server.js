const http = require('http');

const { valid, home, search, notFound } = require('./public/routes');


http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png|jpg)$/)) {
      valid(req, res);
    } else if (req.url === '/') {
      home(req, res);
    } else if (req.url.startsWith('/search')) {
      search(req, res);
    } else {
      notFound(req, res);
    }
  })
  .listen(3000, () => console.info('Server is running at por 3000'));
