import mongoose, { models, model } from 'mongoose';
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  date_of_birth: {
    type: String,
  },
  emirates: {
    type: String,
  },
  blood: {
    type: String,
  },
  password: {
    type: String,
  },
  tel: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  role: {
    type: Number,
  },
  status: {
    type: String,
    default: 'pending',
  },
  image: {
    type: String,
  },
  profession: {
    type: String,
  },
  zone: {
    type: String,
  },
  address: {
    house_name: {
      type: String,
    },
    district: {
      type: String,
    },
    panjayath: {
      type: String,
    },
    pincode: {
      type: Number,
    },
  },
  verifyed: {
    type: Boolean,
    default: false,
  },
  legislative_assembly: {
    type: String,
  },
  before_in_pdp: {
    type: Boolean,
  },
}, {
  timestamps: { createdAt: true },
});

// Check if the model is already defined, otherwise define it
const userModel = models.user || model('user', userSchema);

export default userModel;
