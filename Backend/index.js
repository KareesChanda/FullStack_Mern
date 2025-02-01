import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config()


mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB")
}); //establishing a connection to mongoDB via mongoose

const app = express();  //creates the express application
app.use(express.json()); //Allowing the backend to accept JSON data format

try {
    app.listen(3000, () => {
        console.log("server is running on port 3000");

    });

} catch (err) {
    console.log("Error: " + err)
};

//creating a test API
app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);


//I created a middleware instead of handling all the errors in a try catch block, 
// middleware helps with a universal way of dealing with errors.
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
