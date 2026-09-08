import Admission from '../models/Admission.js';

export const submitAdmission = async (req, res) => {
  try {
    const { 
      studentName, 
      dob, 
      studentClass, 
      fatherName, 
      motherName, 
      mobile, 
      secondaryMobile, 
      location 
    } = req.body;

    const newAdmission = new Admission({
      studentName,
      dob,
      studentClass,
      fatherName,
      motherName,
      mobile,
      secondaryMobile,
      location
    });

    const savedAdmission = await newAdmission.save();
    res.status(201).json({ success: true, message: 'Admission form submitted successfully', data: savedAdmission });
  } catch (error) {
    console.error('Error submitting admission:', error);
    res.status(500).json({ success: false, message: 'Server error while submitting admission form' });
  }
};

export const getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: admissions.length, data: admissions });
  } catch (error) {
    console.error('Error fetching admissions:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching admissions' });
  }
};

export const updateAdmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Admission.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Admission entry not found' });
    }

    res.status(200).json({ success: true, message: 'Status updated successfully', data: updated });
  } catch (error) {
    console.error('Error updating admission status:', error);
    res.status(500).json({ success: false, message: 'Server error while updating admission status' });
  }
};

export const deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Admission.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Admission entry not found' });
    }

    res.status(200).json({ success: true, message: 'Admission deleted successfully' });
  } catch (error) {
    console.error('Error deleting admission:', error);
    res.status(500).json({ success: false, message: 'Server error while deleting admission' });
  }
};
