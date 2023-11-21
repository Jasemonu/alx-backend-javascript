const http = require('http');
const { readFile } = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (method === 'GET' && url === '/students') {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((data) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(1245);

module.exports = app;
