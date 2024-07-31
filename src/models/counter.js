// models/counter.js
import mongoose, { models, model } from 'mongoose';
const { Schema } = mongoose;

const counterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 200, // Starting value
  },
});

const Counter = models.Counter || model('Counter', counterSchema);

export default Counter;
