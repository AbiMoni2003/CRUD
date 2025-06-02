import mongoose from "mongoose"

import dotenv from "dotenv";

dotenv.config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully...");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;