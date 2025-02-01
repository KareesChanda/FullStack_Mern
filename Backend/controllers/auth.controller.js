import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {

        await newUser.save();
        res.status(201).json("User was created successfully");

    } catch (error) {
        next(error); //also can use errorHandler that i created here to create personalized errors
    }
}