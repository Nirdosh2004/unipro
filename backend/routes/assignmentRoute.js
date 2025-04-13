import express from 'express'

import { addAssignment, listAssignment, removeAssignment } from '../controllers/assignmentController.js'

const assignmentRouter = express.Router();

assignmentRouter.post('/add', addAssignment)
assignmentRouter.get('/list', listAssignment)
// assignmentRouter.get('/assignments/:_id', singleAssignment)
assignmentRouter.delete('/:_id', removeAssignment)

export default assignmentRouter