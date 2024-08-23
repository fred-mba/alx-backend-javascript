/**
 * A HTTP server using Express
 * Should be assigned to the variable app and this one must be exported
 * HTTP server should listen on port 1245
 * Displays Hello Holberton School! in the page body for the endpoint /
 * When the URL path is /students, it should display This is the list of
 * our students followed by the same content as the file 3-read_file_async.js
 */
const express = require('express');
const fs = require('fs');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  countStudents(dbFile)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});
app.listen(1245);

module.exports = app;
