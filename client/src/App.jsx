import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './component/layout/Navbar';
import FloatingAction from './component/layout/FloatingAction';
import ScrollToTop from './component/layout/ScrollToTop';
import Footer from './component/layout/Footer';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-[#f8fcf9]">
        <ScrollToTop />
        <AppRoutes />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;
