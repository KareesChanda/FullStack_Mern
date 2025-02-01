//Authentication route
import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router(); //calling the express Router() function

router.post("/signup", signup);

export default router;