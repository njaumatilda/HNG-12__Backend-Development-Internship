import { Router } from "express"
import { myInfo } from "../controllers/users-controller.js"

const router = Router()

router.get("/", myInfo)

export default router