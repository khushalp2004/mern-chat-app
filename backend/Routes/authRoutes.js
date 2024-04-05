import express from "express";
import { login, logout, signup } from "../controllers/authContollers.js";

const router=express.Router();

//Login
router.post("/login",login);

router.post("/signup",signup);

router.post("/logout",logout);

export default router;