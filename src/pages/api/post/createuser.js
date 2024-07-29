// pages/api/post/createuser.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import connectMongoDB from "src/libs/database";
import  userModel  from "src/models/user";


export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const handler = async (req, res) => {
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false,
  });

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    if (!files || Object.keys(files).length === 0) {
      return res.status(400).json({ error: 'No files were uploaded.' });
    }

    const fileKey = Object.keys(files)[0];
    const file = files[fileKey];

    

    if (!file) {
      return res.status(400).json({ error: 'File not found.' });
    }

     // Extract additional form fields
    const { name, email, number } = fields;

    connectMongoDB();

    const  user =  {
      name : name[0] ,
      email : email[0] ,
      image : file[0]?.newFilename
    }
    userModel.create(user)
    // Perform any necessary processing with the received data
    console.log("File uploaded successfully");

    
    res.status(200).json({
      message: 'File uploaded successfully',
      name,
      email,
      number,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'File upload failed' });
  }
};

export default handler;
