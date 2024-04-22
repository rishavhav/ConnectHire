// to use import added type="module" in package.json

import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"

const app = express()
dotenv.config() // to use .env file
connectDB() //  connect with db

const PORT = process.env.PORT || 5000

// middleware to parse json and form data
app.use(express.json()) // to parse json data in req.body
app.use(express.urlencoded({ extended: true })) // to parse form data in req.body
app.use(cookieParser()) // to parse cookies

//Routes

app.use("api/users", userRoutes)
app.use("api/posts", postRoutes)

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
