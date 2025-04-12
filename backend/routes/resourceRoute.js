import express from 'express'

import { addResource, listResource, removeResource } from '../controllers/resourceController.js'

const resourceRouter = express.Router();

resourceRouter.post('/add', addResource)
resourceRouter.get('/list', listResource)
resourceRouter.delete('/:_id', removeResource)

export default resourceRouter