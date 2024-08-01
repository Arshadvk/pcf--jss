import connectMongoDB from "src/libs/database";
import  adminModel from "src/models/admin";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Use environment variable for secret

async function loginHandler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    await connectMongoDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the admin by email
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const storedHashedPassword = admin.password;
    if (!storedHashedPassword) {
      console.error("No hashed password found for admin:", admin);
       res.status(500).json({ error: "Internal Server Error" });

    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, storedHashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email , name : admin.name ,emirates : admin?.emirates},
      JWT_SECRET,
      { expiresIn: "2m" } // Token expires in 1 hour
    );

    // Respond with the admin data (excluding the password) and token
 // Exclude the password field
 const type = admin.role === "A" ? "admin" : "super"
    res.status(200).json({ type , token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default loginHandler;
