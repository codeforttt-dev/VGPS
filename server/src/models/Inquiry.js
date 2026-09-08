import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  inquiryFor: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    maxLength: 200,
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Resolved'],
    default: 'New'
  }
}, { timestamps: true });

export default mongoose.model('Inquiry', inquirySchema);
