import express from 'express';
import {
  addStudent,
  listStudents,
  removeStudent,
  singleStudent
} from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post('/add', addStudent);
studentRouter.delete('/:_id', removeStudent);
studentRouter.get('/students/:_id', singleStudent); // Changed to match frontend
studentRouter.get('/list', listStudents);

export default studentRouter;