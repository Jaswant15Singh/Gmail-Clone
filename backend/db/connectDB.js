import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Gmail");
        console.log('Mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;