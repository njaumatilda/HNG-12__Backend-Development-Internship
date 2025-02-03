import "dotenv/config"
import express from "express"
import cors from "cors"
import { dbConnect } from "./db.js"

const app = express()
const SERVER_PORT = process.env.PORT

app.use(cors())
app.use(express.json())

import InfoRouter from "./routes/users.js"

app.use("/myinfo", InfoRouter)

app.listen(SERVER_PORT, () => {
  console.log(`[server]: App listening on port: ${SERVER_PORT}`)
  dbConnect()
})
