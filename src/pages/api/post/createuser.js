// pages/api/post/createuser.js
import connectMongoDB from 'src/libs/database'
import userModel from 'src/models/user'
import Counter from 'src/models/counter' // Import the counter model

export const config = {
  api: {
    bodyParser: true
  }
}

const handler = async (req, res) => {
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  try {
    // Connect to MongoDB
    await connectMongoDB()

    const user = req.body.user

    // Get the current date
    const now = new Date()

    // Set the current date
    user.issued = now

    // Set the expiry date to 2 years from now
    const expiryDate = new Date()
    if(user?.memberShip === "p"){
      expiryDate.setFullYear(now.getFullYear() + 2)
    }else{
      expiryDate.setFullYear(now.getFullYear() + 1)
    }
    user.expiry = expiryDate

    // Format dates
    const formattedIssuedDate = formatDate(user.issued)
    const formattedExpiryDate = formatDate(user.expiry)

    // Log formatted dates
    console.log('Current Date:', formattedIssuedDate)
    console.log('Expiry Date:', formattedExpiryDate)

    // Assign formatted dates to user object
    user.issued = formattedIssuedDate
    user.expiry = formattedExpiryDate

    // Get the next member_id
    const counter = await Counter.findOneAndUpdate(
      { _id: 'member_id' },
      { $inc: { count: 1 } },
      { new: true, upsert: true } // Create if not exists
    )

    user.member_id = counter.count

    console.log(user)

    // Create the user
    const Newuser = await userModel.create(user)
    console.log(Newuser)

    res.status(200).json({
      message: 'User created successfully'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default handler
