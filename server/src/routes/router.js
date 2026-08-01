import express from 'express';
import { submitInquiry } from '../controllers/inquiryController.js';
import { submitAdmission } from '../controllers/admissionController.js';

const router = express.Router();

// Inquiry routes
router.post('/inquiry', submitInquiry);

// Admission routes
router.post('/admission', submitAdmission);

export default router;
