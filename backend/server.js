import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import studentRouter from './routes/studentRoute.js';
import assignmentRouter from './routes/assignmentRoute.js';
import resourceRouter from './routes/resourceRoute.js';


// App config
const app = express()
const port = process.env.PORT || 4000;
connectDB()

// middlewares
app.use(express.json())
app.use(cors())


// API endpoints
app.use('/api/student', studentRouter)
app.use('/api/assignment', assignmentRouter)
app.use('/api/resource', resourceRouter)






app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log('Server Started at port : ' + port)) 