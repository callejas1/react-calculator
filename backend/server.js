import express from 'express'
import dotenv from 'dotenv' 
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import calculationRoutes from './routes/calculationRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/calculations', calculationRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
