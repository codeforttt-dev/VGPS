import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/public/Home';
import About from '../page/public/About';
import Academics from '../page/public/Academics';
import Contact from '../page/public/Contact';
import Gallery from '../page/public/Gallery';
import Admissions from '../page/public/Admissions';
import AdmissionForm from '../page/public/AdmissionForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/admission-form" element={<AdmissionForm />} />
      <Route path="/contact" element={<Contact />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
