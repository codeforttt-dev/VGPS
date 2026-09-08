import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/VGPS-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1.5' : 'bg-white/95 backdrop-blur-sm shadow-sm py-2'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2.5 cursor-pointer">
          <img src={Logo} alt="Valley Green Public School Logo" className="h-8 sm:h-10 w-auto object-contain drop-shadow-sm" />
          <div className="flex flex-col">
             <span className="text-primary font-black text-base sm:text-lg lg:text-xl leading-none tracking-wide">VALLEY GREEN</span>
             <span className="text-gray-700 font-bold text-[8px] sm:text-[9px] tracking-[0.2em] mt-0.5">PUBLIC SCHOOL</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-7">
          <Link to="/" className="text-gray-800 font-bold text-[12px] hover:text-primary transition-colors tracking-wide">HOME</Link>
          <Link to="/about" className="text-gray-800 font-bold text-[12px] hover:text-primary transition-colors tracking-wide">ABOUT US</Link>
          <Link to="/admissions" className="text-gray-800 font-bold text-[12px] hover:text-primary transition-colors tracking-wide">ADMISSIONS</Link>
          <Link to="/academics" className="text-gray-800 font-bold text-[12px] hover:text-primary transition-colors tracking-wide">ACADEMICS</Link>
          <Link to="/gallery" className="text-gray-800 font-bold text-[12px] hover:text-primary transition-colors tracking-wide">GALLERY</Link>
          
          <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded shadow-md font-bold text-[13px] hover:bg-primary-dark transition-all hover:-translate-y-0.5 inline-block text-center">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg text-primary hover:bg-emerald-50 focus:outline-none transition-colors"
          >
             {mobileMenuOpen ? (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
               </svg>
             ) : (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors py-1">
            HOME
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors py-1">
            ABOUT US
          </Link>
          <Link to="/admissions" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors py-1">
            ADMISSIONS
          </Link>
          <Link to="/academics" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors py-1">
            ACADEMICS
          </Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 font-bold text-sm hover:text-primary transition-colors py-1">
            GALLERY
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-white text-center py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-primary-dark transition-colors">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
