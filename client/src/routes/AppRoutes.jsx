import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/public/Home';
import About from '../page/public/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
