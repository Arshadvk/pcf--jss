import connectMongoDB from "src/libs/database";
import  adminModel  from "src/models/admin";
import bcrypt from "bcrypt";

async function handler(req , res) {
  try {
    if (req.method !== "POST") {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    connectMongoDB(); // Ensure this returns a Promise and handles connection errors
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Create a new admin object with the hashed password
    const newAdmin = {
      ...req.body,
      password: hashedPassword
    };

    const savedAdmin = await adminModel.create(newAdmin);
    console.log(savedAdmin);
    res.status(200).json(savedAdmin); // Respond with the saved admin
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
