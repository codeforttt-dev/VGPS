import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './component/layout/Navbar';
import FloatingAction from './component/layout/FloatingAction';
import ScrollToTop from './component/layout/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <FloatingAction />
    </div>
  );
}

export default App;
