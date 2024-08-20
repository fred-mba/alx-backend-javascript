/**
 * The function  accepts a path in argument same as in 2-read_file.js
 * The script attempts to read a database file asynchronously
 * If the db is not available, it throws an error
 * else, it logs a message to the console
 * Logs the number of students in each field
 */
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);
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
    for (const [field, firstnames] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
    resolve();
  });
});

module.exports = countStudents;
