import express from 'express';
import { submitInquiry, getInquiries, updateInquiryStatus, deleteInquiry } from '../controllers/inquiry.js';
import { submitAdmission, getAdmissions, updateAdmissionStatus, deleteAdmission } from '../controllers/submitAdmission.js';

const router = express.Router();

// Inquiry routes
router.post('/inquiry', submitInquiry);
router.get('/inquiries', getInquiries);
router.patch('/inquiry/:id', updateInquiryStatus);
router.delete('/inquiry/:id', deleteInquiry);

// Admission routes
router.post('/admission', submitAdmission);
router.get('/admissions', getAdmissions);
router.patch('/admission/:id', updateAdmissionStatus);
router.delete('/admission/:id', deleteAdmission);

export default router;
