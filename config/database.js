import mongoose from "mongoose";

const dbConnect=async()=>{
    try {
       await mongoose.connect("mongodb+srv://pranali:pranali123@cluster0.gqlh3.mongodb.net/ReviewSystem")
       console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("Connection failed",error)
    }
}
export default dbConnect;