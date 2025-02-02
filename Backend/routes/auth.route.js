//Authentication route
import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";

const router = express.Router(); //calling the express Router() function

router.post("/signup", signup);
router.post("/signin", signin);

export default router;