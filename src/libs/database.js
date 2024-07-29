import mongoose from "mongoose";

const connectMongoDB = () =>{
    try {
        mongoose.connect("mongodb+srv://egoft:egoft7560@cluster0.o6w4ie8.mongodb.net/pdf");
        console.log(" Connected to MongoDB");

    } catch (error) {
        console.log(error)
    }
}
export default connectMongoDB


