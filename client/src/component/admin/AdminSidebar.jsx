import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/VGPS-logo.png';

const AdminSidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      name: 'Admissions',
      path: '/admin/admissions',
      badge: 'Forms',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Inquiries',
      path: '/admin/inquiries',
      badge: 'Messages',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 bg-[#102d1f] text-white z-50 flex flex-col transition-all duration-300 ease-in-out shadow-2xl border-r border-white/10 overflow-x-hidden overflow-y-hidden select-none
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header Logo Section */}
        <div className={`h-20 flex items-center border-b border-white/10 bg-[#0b2217] transition-all duration-300 ${isCollapsed ? 'px-3 justify-center' : 'px-4 justify-between'}`}>
          <Link to="/admin" className="flex items-center gap-3 overflow-hidden">
            <img src={Logo} alt="VGPS Logo" className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0" />
            {!isCollapsed && (
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-black text-sm text-accent tracking-wider leading-none uppercase">VGPS GWALIOR</span>
                <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1">Admin Portal</span>
              </div>
            )}
          </Link>

          {/* Desktop Toggle Button */}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`hidden lg:flex w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors cursor-pointer shrink-0 ${isCollapsed ? 'ml-0' : 'ml-2'}`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <svg className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 px-2.5 space-y-2 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 group relative ${
                  isCollapsed ? 'p-3 justify-center' : 'px-3.5 py-3.5 justify-start'
                } ${
                  isActive 
                    ? 'bg-accent text-white shadow-lg shadow-accent/30 font-black' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                title={isCollapsed ? item.name : ''}
              >
                <span className={`shrink-0 ${isActive ? 'text-white' : 'text-accent group-hover:scale-110 transition-transform'}`}>
                  {item.icon}
                </span>

                {!isCollapsed && (
                  <span className="truncate tracking-wide uppercase">{item.name}</span>
                )}

                {/* Tooltip on Collapsed */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Back to Public Website Link at Bottom */}
        <div className={`border-t border-white/10 bg-[#0b2217] transition-all duration-300 ${isCollapsed ? 'p-2.5' : 'p-4'}`}>
          <Link
            to="/"
            className={`flex items-center gap-3 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs transition-all duration-200 text-center justify-center group ${
              isCollapsed ? 'py-3 px-2' : 'px-3.5 py-3'
            }`}
            title="Public Site"
          >
            <svg className="w-4 h-4 shrink-0 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {!isCollapsed && <span className="uppercase tracking-wider truncate">Public Site</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
