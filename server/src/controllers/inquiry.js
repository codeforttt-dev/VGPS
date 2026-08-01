import Inquiry from '../models/Inquiry.js';

export const submitInquiry = async (req, res) => {
  try {
    const { name, location, mobile, email, inquiryFor, message } = req.body;
    
    const newInquiry = new Inquiry({
      name,
      location,
      mobile,
      email,
      inquiryFor,
      message
    });

    const savedInquiry = await newInquiry.save();
    res.status(201).json({ success: true, message: 'Inquiry submitted successfully', data: savedInquiry });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting inquiry' });
  }
};
