import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/VGPS-logo.png';

const AboutSection = ({ showButton = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full min-h-screen bg-[#f8fcf9] flex flex-col font-sans pt-8 lg:pt-12 pb-16 lg:pb-24 overflow-x-hidden">
      
      <div className={`max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-12 flex flex-col transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        
        {/* Top Centered Heading Section */}
        <div className={`w-full flex flex-col items-center text-center mb-12 lg:mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h2 className="flex flex-col sm:flex-row items-center justify-center text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase leading-[0.9] drop-shadow-sm tracking-tight mb-5 gap-2 sm:gap-4">
            <span className="text-primary">ABOUT</span>
            <span className="text-accent">US</span>
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center">
             <div className="w-16 h-1 bg-accent rounded-full"></div>
             <div className="w-3 h-3 bg-primary rotate-45 mx-3"></div>
             <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        {/* Middle Section: Image (Left) and Text (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Image Side (Premium Styling) */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            {/* The Main Image Container */}
            <div className="relative w-[90%] sm:w-[80%] lg:w-[90%] aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl z-20">
              <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" 
                alt="Students studying" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative Offset Border */}
            <div className="absolute top-6 left-0 sm:left-4 lg:-left-4 w-[90%] sm:w-[80%] lg:w-[90%] aspect-[4/5] lg:aspect-square border-4 border-accent rounded-2xl z-10 hidden sm:block"></div>
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 lg:-right-4 bg-white p-4 lg:p-6 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] z-30 flex flex-col items-center border border-gray-100">
              <span className="text-3xl lg:text-5xl font-black text-primary mb-1">15+</span>
              <span className="text-[10px] lg:text-xs font-bold text-gray-500 tracking-wider uppercase">Years of Excellence</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            {/* Subheading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Students for a <span className="text-primary">Better Tomorrow</span>
            </h3>

            {/* Short Paragraph (Essay bas thoda sa) */}
            <p className="text-gray-700 font-medium text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg mb-8 text-center lg:text-left">
              Valley Green Public School is a nurturing ground where creativity, curiosity and confidence come together. We provide a transformative educational experience that fosters intellectual curiosity and holistic development to shape the responsible citizens of tomorrow.
            </p>

            {/* Principal Quote */}
            <div className="mb-8 bg-white shadow-sm p-5 rounded-2xl border-l-4 border-accent flex gap-4 items-start max-w-lg text-left">
              <span className="text-accent text-5xl font-serif leading-none h-8">“</span>
              <div>
                <p className="text-gray-800 font-bold text-sm leading-relaxed mb-2">
                  Education is not just about learning, it's about building character, confidence and a bright future.
                </p>
                <p className="text-primary font-black text-[11px] lg:text-xs uppercase tracking-wider">— Principal</p>
              </div>
            </div>
            
            {/* Know More About Us Button */}
            {showButton && (
              <div>
                <Link to="/about" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg shadow-lg font-bold text-xs lg:text-sm transition-all hover:-translate-y-1 flex items-center group cursor-pointer">
                  KNOW MORE ABOUT US
                  <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            )}
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
