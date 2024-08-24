import express from 'express';
import StudentsController from '../controllers/StudentsController';
/**
 * Link route `/` to AppController
 * Link the route /students and /students/:majorto the StudentsController
 */

const app = express();

app.get('/', AppController.getHomepage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);
app.listen(1245);
