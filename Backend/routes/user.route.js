import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test) //getting the endpoint /test from the test function.

export default router;