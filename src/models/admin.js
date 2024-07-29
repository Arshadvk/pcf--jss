import { Schema, models, connection } from 'mongoose';

const adminSchema = new Schema({
  name: { 
    type: String
  },
  email: { 
    type: String,
    unique: true
  },
  role: { 
    type: String,
    default: 'A'
  },
  password: { 
    type: String 
  },
  number: { 
    type: String 
  },
  emirates: { 
    type: String 
  }
});

const adminModel = models.admin || connection.model('admin', adminSchema);

export default adminModel;
