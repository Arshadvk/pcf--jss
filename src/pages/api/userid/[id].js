import connectMongoDB from "src/libs/database";
import  userModel  from "src/models/user";

async function handler(req, res) {
    const { id } = req.query;
  try {
     connectMongoDB(); // Ensure the database is connected
    
     
     // Fetch the user by ID
     const user = await userModel.findById(id);
     console.log(user)
     
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
