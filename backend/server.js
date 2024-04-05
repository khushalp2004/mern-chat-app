import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the incoming request with JSON Payloads (from req.body);
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})