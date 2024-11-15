import mongoose from "mongoose";

//for Connection  await=pause
const dbConnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDb Connected Successfully")
    }
    catch(error){
        console.log("MongoDb Connection Failed", error)
    }
}

export default dbConnect;