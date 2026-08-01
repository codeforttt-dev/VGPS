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
