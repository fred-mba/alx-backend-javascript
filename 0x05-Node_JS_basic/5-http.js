/**
 * Creates a small http server using http module
 * It should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * When the URL path is /, it should display Hello Holberton School! in the page body
 * When the URL path is /students, it should display This is the list of our students
 * followed by the same content as the file 3-read_file_async.js
 */
const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fieldCounts = {};

    students.forEach((line) => {
      const studentInfo = line.split(',');
      const firstname = studentInfo[0];
      const field = studentInfo[3];

      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstname);
    });
    const result = [`Number of students: ${students.length}`];

    for (const [field, firstnames] of Object.entries(fieldCounts)) {
      result.push(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
    resolve(result.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];
    if (!dbFile) {
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
    } else {
      countStudents(dbFile)
        .then((output) => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(`This is the list of our students\n${output}`);
        })
        .catch((error) => {
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 500;
          res.end(error.message);
        });
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
app.listen(1245);

module.exports = app;
