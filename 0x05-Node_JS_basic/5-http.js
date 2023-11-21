const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    countStudents(process.argv[2])
      .then((data) => {
        res.end(data); // Assuming data is formatted as specified
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
