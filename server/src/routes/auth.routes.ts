import { Router } from "express";
import { loginController } from "../controllers/auth";
const router = Router()

router.route('/login').post(loginController)
router.route('/register').post(loginController)


export default router