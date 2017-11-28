const http = require('http');

const valid = require('./public/routes/public');
const home = require('./public/routes/home');

http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png|jpg)$/)) {
      valid(req, res);
    } else if (req.url === '/') {
      home(req, res);
    } else if (req.url.startsWith('/search')) {
    } else {
    }
  })
  .listen(3000, () => console.info('Server is running at por 3000'));
