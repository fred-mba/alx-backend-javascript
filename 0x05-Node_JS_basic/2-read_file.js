/**
 * The function  accepts a path in argument
 * The script attempts to read a database file synchronously
 * If the db is not available, it throws an error
 * else, it logs a message to the console
 * Logs the number of students in each field
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
