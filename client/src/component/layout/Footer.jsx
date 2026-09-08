import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/VGPS-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b2217] text-white pt-16 pb-8 font-sans relative overflow-hidden">
      {/* Decorative Top Accent Border */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-accent to-emerald-400"></div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          
          {/* Column 1: About School */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 w-fit group">
              <img 
                src={Logo} 
                alt="Valley Green Public School Logo" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow" 
              />
              <div className="flex flex-col">
                 <span className="text-white font-black text-lg sm:text-xl leading-none tracking-wide group-hover:text-accent transition-colors">VALLEY GREEN</span>
                 <span className="text-emerald-300 font-bold text-[9px] sm:text-[10px] tracking-[0.2em] mt-0.5">PUBLIC SCHOOL</span>
              </div>
            </Link>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
              Valley Green Public School is dedicated to nurturing curiosity, creativity, and confidence in young minds from <strong className="text-accent font-semibold">Nursery to Class 5th</strong> in Gwalior.
            </p>

            {/* School Timing Badge */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 mt-2 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent">School Timings</span>
                <span className="text-xs font-semibold text-gray-200">Mon - Sat: 8:00 AM - 2:00 PM</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 shadow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-gray-900 transition-all transform hover:-translate-y-1 shadow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a 
                href="https://wa.me/917649801389" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1 shadow"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="sm:pl-4">
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Navigation
            </h3>
            <ul className="space-y-3.5">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Admissions
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Academics
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link to="/admission-form" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Admission Application Form
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors text-xs sm:text-sm font-semibold flex items-center group">
                  <span className="text-accent group-hover:translate-x-1 transition-transform mr-2">›</span> Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Info */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Contact Info
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start text-xs sm:text-sm text-gray-300 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 shrink-0 text-accent group-hover:bg-accent group-hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <a 
                  href="https://www.google.com/maps/place/26%C2%B012'57.9%22N+78%C2%B010'20.4%22E/@26.2160752,78.1697645,17z" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  <strong className="text-white block font-bold mb-0.5">Valley Green Public School</strong>
                  Gwalior, Madhya Pradesh - 474001
                </a>
              </li>

              <li className="flex items-center text-xs sm:text-sm text-gray-300 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 shrink-0 text-accent group-hover:bg-accent group-hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+917649801389" className="hover:text-accent transition-colors font-bold text-white">
                  +91 76498 01389
                </a>
              </li>

              <li className="flex items-center text-xs sm:text-sm text-gray-300 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mr-3 shrink-0 text-accent group-hover:bg-accent group-hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:vgps30529@gmail.com" className="hover:text-accent transition-colors break-all">
                  vgps30529@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Interactive Campus Map */}
          <div className="flex flex-col">
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Campus Location
            </h3>

            <div className="h-44 w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 relative group">
              <iframe 
                src="https://maps.google.com/maps?q=26.2160752,78.1723394&hl=en&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Valley Green Public School Location Map"
              ></iframe>
            </div>

            <a 
              href="https://maps.google.com/maps?q=26.2160752,78.1723394" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-3 text-[11px] font-bold text-accent hover:text-white transition-colors flex items-center justify-end group"
            >
              Open in Google Maps 
              <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>&copy; {currentYear} <strong>Valley Green Public School</strong>. All Rights Reserved.</p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="text-gray-400">Nursery to Class 5th Primary Education</p>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-medium">
            <Link to="/contact" className="hover:text-accent transition-colors">Admissions Inquiry</Link>
            <span className="text-gray-600">•</span>
            <Link to="/about" className="hover:text-accent transition-colors">About VGPS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
