import connectMongoDB from "src/libs/database";
import  userModel from "src/models/user";
import jwt from "jsonwebtoken";

async function handler(req, res) {
    const { token}= req.query;
  try {
     connectMongoDB(); // Ensure the database is connected
    
     const decodedToken  = jwt.decode(token);
     console.log(decodedToken?.emirates)
     
     // Fetch the user by ID

     const user = await userModel.find({
        emirates: decodedToken?.emirates,
        status: "approved"
      });console.log(user)
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);

    // disconnetMongoDB()
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
  }
}

export default handler;
