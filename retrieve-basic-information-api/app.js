import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()
const SERVER_PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    "email": "njaumatildawanjiru@gmail.com",
    "current_datetime": new Date().toISOString().split(".")[0] + "Z",
    "github_url": "<https://github.com/njaumatilda/HNG-12__Backend-Development-Internship>"
})
})

// app.listen(SERVER_PORT, () => {
//   console.log(`[server]: App listening on port: ${SERVER_PORT}`)
// })


export default app

// Before deploying, ensure to:
//  + make changes to the app.js, package.json and add a vercel.json
//  + also. remember to add environment variables on vercel