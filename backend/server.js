import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import studentRouter from './routes/studentRoute.js';


// App config
const app = express()
const port = process.env.PORT || 4000;
connectDB()

// middlewares
app.use(express.json())
app.use(cors())


// API endpoints
app.use('/api/student', studentRouter)






app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log('Server Started at port : ' + port)) 