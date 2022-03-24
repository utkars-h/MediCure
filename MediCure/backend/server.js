import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'    //.js for files in newer ECMA

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

//Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
//var express = require("express");
const app = express()

dotenv.config()
connectDB()

app.use(express.json())

app.get('/', (req, res)=> {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT , console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.magenta.bold))