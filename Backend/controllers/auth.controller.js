import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
import jwt from "jsonwebtoken";

//this is a controller function to handle signing Up
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
};

//this is a controller function to handle signing In
export const signin = async (req, res, next) => {

    const { email, password } = req.body;
    
    //use above email and password to authenticate in the below try-catch
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, "User not found"));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Invalid Credentials"));

        //I am creating a Json Web Token here (JWT) that allows a user's previously cached login to be remembered by the client-side
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        //validUser; 
        const {password: pass, ...rest} = validUser._doc;
        
        res.cookie('access_Token', token, {httpOnly: true}).status(200).json(rest);

    } catch (error) {
        next(error);
    }

};