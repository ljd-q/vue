import Express from "express";
import { getAllUser } from "../controller/user_ctrl.js";

const router=new Express.Router()
router.get('/user',getAllUser)

export default router