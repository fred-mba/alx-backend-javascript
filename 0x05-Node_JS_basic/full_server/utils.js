import fs from 'fs';

/**
 * readDatabase function should read the database asynchronously
 * It should return a promise
 * When the file is not accessible, it should reject the promise with the error
 * When the file can be read, it should return an object of arrays of the firstname of students per fields
 */

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if(err) {
        reject(new Error('Cannot read the database'));
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
      for (const [field, firstnames] of Object.entries(fieldCounts)) {
        console.log(`Number of students in ${field}: List: ${firstnames.join(', ')}`);
      }
      resolve();
    });
  });
}
export default readDatabase;
