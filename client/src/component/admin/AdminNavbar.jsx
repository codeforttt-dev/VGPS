import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminNavbar = ({ isCollapsed, setIsMobileOpen }) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin':
      case '/admin/dashboard':
        return 'Admin Dashboard';
      case '/admin/admissions':
        return 'Online Admissions Management';
      case '/admin/inquiries':
        return 'Parent Inquiries & Messages';
      default:
        return 'Admin Panel';
    }
  };

  return (
    <header className="h-20 bg-white border-b border-gray-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          title="Open Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Dynamic Page Title */}
        <div>
          <h1 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight uppercase">
            {getPageTitle()}
          </h1>
          <p className="text-[11px] text-gray-500 font-extrabold uppercase tracking-wider hidden sm:block">
            VGPS GWALIOR Admin Portal
          </p>
        </div>
      </div>

      {/* Right User & Badge Profile */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-[#f8fcf9] px-3.5 py-1.5 rounded-full border border-primary/20">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-primary uppercase">System Active</span>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-1.5 pr-3 rounded-xl border border-gray-200">
          <div className="w-9 h-9 rounded-lg bg-primary text-white font-black flex items-center justify-center text-sm shadow-md">
            A
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-xs font-black text-gray-800 leading-tight">Admin Administrator</span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">VGPS Portal</span>
          </div>
        </div>

        {/* Lock Admin Panel Button */}
        <button
          onClick={() => {
            localStorage.removeItem('vgps_admin_pin_auth');
            window.location.reload();
          }}
          className="p-2.5 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold"
          title="Lock Admin Panel"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="hidden sm:inline uppercase">Lock</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
