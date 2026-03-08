require("dotenv").config()
const express = require("express")
const cors = require("cors")

const logger = require("./middleware/logger")
const courseRoutes = require("./routes/courses")

const app = express()

app.use(cors())
app.use(express.json())

// Logger Middleware
app.use(logger)

// Routes
app.use("/", courseRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})