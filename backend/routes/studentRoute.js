import express from 'express'

import { addStudent, listStudents, removeStudent } from '../controllers/studentController.js'

const studentRouter = express.Router();

studentRouter.post('/add', addStudent)
studentRouter.delete('/:_id', removeStudent);

studentRouter.get('/list', listStudents)

export default studentRouter