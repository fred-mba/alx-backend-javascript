import { readDatabase } from '../utils.js';

/**
 * 1. getAllStudents
 * Calls the function readDatabase from the utils file, and display in the page
 * Displays the number of students in the field, and the list of first
 * names ordered alphabetically by appearance
 *  2. getAllStudentsByMajor
 * Uses a parameter that the user can pass to the browser
 * If the user is passing another parameter, the server should return an error
 * It calls the function readDatabase from the utils file, and display in the
 * page the list of first names for the students (ordered by appearance in the database file)
 */

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase('../database.csv');

      let responseText = 'This is the list of our students\n'

      const fields = Object.keys(studentsByField).sort((a, b) => {
        a.toLowerCase().localeCompare(b.toLowerCase())
      });
      for (const field in fields) {
        students = studentsByField[field];
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      response.status(200).send(responseText.trim());
    } catch (error) {
      response.status(500).send('Cannot load tha database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase('../database.csv');
      const students = studentsByField[major];
      if (!students) {
        response.status(200).send(`List: `);
      } else {
        response.status(200).send(`List: $students.join(', ')`);
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
