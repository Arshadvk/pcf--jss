import connectMongoDB from "src/libs/database";
import  adminModel  from "src/models/admin";

async function handler(req, res) {

  try {
    connectMongoDB()// Assuming connectMongoDB returns a Promise


    const Newuser = await adminModel.find({role : "A"})
    console.log("new" + Newuser)
    res.status(200).json(Newuser); // Respond with the saved user
    // disconnetMongoDB()
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
  }
}

export default handler;
