import connectMongoDB from "src/libs/database";
import  userModel  from "src/models/user";

async function handler(req, res) {

  try {
   
    connectMongoDB(); // Assuming connectMongoDB returns a Promise
    console.log(req.body)

    const { id, status } = req.body;
    console.log(status)
    const updatedUser = await userModel.findOneAndUpdate({ _id: id }, { status: status });
    
    console.log(updatedUser)
    res.status(200).json({id}); // Respond with the saved user
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
}

export default handler;
