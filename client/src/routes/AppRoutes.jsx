import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/public/Home';
import About from '../page/public/About';
import Academics from '../page/public/Academics';
import Contact from '../page/public/Contact';
import Gallery from '../page/public/Gallery';
import Admissions from '../page/public/Admissions';
import AdmissionForm from '../page/public/AdmissionForm';

// Admin Protected Route Security
import ProtectedRoute from '../protected/ProtectedRoute';

// Admin Pages
import AdminDashboard from '../page/admin/AdminDashboard';
import AdminAdmissions from '../page/admin/AdminAdmissions';
import AdminInquiries from '../page/admin/AdminInquiries';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Website Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/admission-form" element={<AdmissionForm />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin Portal Protected Routes with PIN Security Lock */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/admissions" 
        element={
          <ProtectedRoute>
            <AdminAdmissions />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/inquiries" 
        element={
          <ProtectedRoute>
            <AdminInquiries />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
