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

export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching inquiries' });
  }
};

export const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Inquiry entry not found' });
    }

    res.status(200).json({ success: true, message: 'Status updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({ success: false, message: 'Server error while updating inquiry status' });
  }
};

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Inquiry.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Inquiry entry not found' });
    }

    res.status(200).json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error while deleting inquiry' });
  }
};
