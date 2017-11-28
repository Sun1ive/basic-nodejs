const http = require('http');

http
  .createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png|jpg)$/)) {
    } else if (req.url === '/') {
    } else if (req.url.startsWith('/search')) {
    } else {
    }
  })
  .listen(3000, () => console.info('Server is running at por 3000'));
