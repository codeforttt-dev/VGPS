import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  studentClass: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
    trim: true,
  },
  motherName: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  secondaryMobile: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Admission', admissionSchema);
