import mongoose from "mongoose";

const disconnetMongoDB = ()=>{
    try {
       mongoose.disconnect()
       console.log("Disconnect")

    } catch (error) {
       console.log(error)
       
    }
   }
   export default disconnetMongoDB