import express from "express";
const router = express.Router();
import { signupUser } from "../controllers/userController.js";

router.post("./signup", signupUser);

export default router;
