import connectMongoDB from "src/libs/database";
import  userModel  from "src/models/user";

async function handler(req, res) {
  try {
    await connectMongoDB(); // Wait for the connection to establish

    console.log(req.query);
    
    // Aggregation query to count members in each emirate
    const emirateCounts = await userModel.aggregate([
      {
        $group: {
          _id: "$emirates", // Group by the emirates field
          count: { $sum: 1 } // Count the number of documents in each group
        }
      }
    ]);

    console.log(emirateCounts)
    
    res.status(200).json(emirateCounts); // Respond with the counts
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    // Optional: add logic to disconnect MongoDB if needed
  }
}

export default handler;
