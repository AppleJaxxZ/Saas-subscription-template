import express from 'express'
import { auth } from "../middlewares/index"

const router = express.Router();
import { register, login, deleteUser } from '../controllers/auth';


router.post("/register", register);
router.post("/login", login);
router.delete("/deleteUser", deleteUser)


module.exports = router