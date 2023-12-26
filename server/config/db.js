import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config()

const mongoUri = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);
    } catch (error) {
        process.exit(1);
    }
};

export default connectDB;