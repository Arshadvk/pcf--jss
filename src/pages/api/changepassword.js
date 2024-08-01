import connectMongoDB from "src/libs/database";
import adminModel from "src/models/admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; // Ensure you import bcryptjs

async function handler(req, res) {
  try {
    connectMongoDB(); // Ensure the connection is established

    const decodedToken = jwt.decode(req.body.token);

    if (!decodedToken || !decodedToken.id) {
      return res.status(400).json({ error: "Invalid token" });
    }

    const admin = await adminModel.findById(decodedToken.id); // Use findById to get a single document

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.currentPassword, admin.password);
    
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);

    await adminModel.findByIdAndUpdate(decodedToken.id, { password: hashedPassword });

    res.status(200).json({ message: "Password updated successfully" }); // Respond with a success message
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
