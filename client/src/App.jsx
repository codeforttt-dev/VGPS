import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Navbar from './component/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
