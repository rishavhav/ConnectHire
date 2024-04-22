// to use import added type="module" in package.json

import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import cors from "cors"
import { v2 as cloudinary } from "cloudinary"

const app = express()
dotenv.config() // to use .env file
connectDB() //  connect with db

const PORT = process.env.PORT || 5000

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// middleware to parse json and form data
app.use(express.json()) // to parse json data in req.body
app.use(express.urlencoded({ extended: true })) // to parse form data in req.body
app.use(cookieParser()) // to parse cookies
app.use(cors())

//Routes

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.get("/api/test", (req, res) => {
  res.send("API is running....")
})

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
