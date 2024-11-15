import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import User from "./models/user.js";
import router from "./routes/feedbackRoute.js";


const app = express();

const PORT = 4000;

//middleware
app.use(express.json())
//mounting
app.use("/api/v1",router)
dotenv.config();

//for Connection  
dbConnect();



app.listen(PORT, () =>{
    console.log(`Server running on Port ${PORT}`);
})