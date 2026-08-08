import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/VGPS-logo.png'; // Make sure this path is correct based on Navbar

const Footer = () => {
  return (
    <footer className="bg-[#102d1f] text-white pt-16 pb-6 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: About School */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2.5 lg:space-x-3 w-fit group">
              <img src={Logo} alt="VGPS Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                 <span className="text-white font-black text-base sm:text-lg lg:text-xl leading-none tracking-wide transition-colors group-hover:text-accent">VALLEY GREEN</span>
                 <span className="text-gray-300 font-bold text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.2em] mt-0.5">PUBLIC SCHOOL</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Nurturing curiosity, creativity and confidence in every young mind through modern learning and strong values.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> Home</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> About Us</Link></li>
              <li><Link to="/admissions" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> Admissions</Link></li>
              <li><Link to="/academics" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> Academics</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm font-medium flex items-center"><span className="mr-2 text-accent">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <svg className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <a href="https://www.google.com/maps/place/26%C2%B012'57.9%22N+78%C2%B010'20.4%22E/@26.2160752,78.1697645,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.2160752!4d78.1723394" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Valley Green Public School,<br/>
                  Gwalior, Madhya Pradesh
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <svg className="w-5 h-5 text-accent mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+917649801389" className="hover:text-white transition-colors font-bold">+91 76498 01389</a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <svg className="w-5 h-5 text-accent mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:vgps30529@gmail.com" className="hover:text-white transition-colors">vgps30529@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div className="h-48 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe 
              src="https://maps.google.com/maps?q=26.2160752,78.1723394&hl=en&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map Footer"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Valley Green Public School. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
