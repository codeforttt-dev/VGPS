import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../component/layout/SEO';
import CtaSection from '../../component/section/CtaSection';

export const AboutSection = ({ showButton = true }) => {
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
    <section id="about" ref={sectionRef} className="relative w-full bg-[#f8fcf9] flex flex-col font-sans pt-8 lg:pt-12 pb-10 lg:pb-16 overflow-x-hidden">
      
      <div className={`max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-12 flex flex-col transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        
        {/* Top Centered Heading Section */}
        <div className={`w-full flex flex-col items-center text-center mb-6 lg:mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h2 className="flex flex-col sm:flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight drop-shadow-sm tracking-tight mb-2 gap-2 sm:gap-3">
            <span className="text-primary">ABOUT</span>
            <span className="text-accent">US</span>
          </h2>

          {/* SEO Tagline Subtitle */}
          <p className="text-xs sm:text-sm font-extrabold text-gray-600 uppercase tracking-wider mb-3">
            Valley Green Public School • Best Primary School in Gwalior
          </p>
          
          {/* Divider */}
          <div className="flex items-center justify-center">
             <div className="w-12 h-1 bg-accent rounded-full"></div>
             <div className="w-2.5 h-2.5 bg-primary rotate-45 mx-2"></div>
             <div className="w-12 h-1 bg-accent rounded-full"></div>
          </div>
        </div>

        {/* Middle Section: Image (Left) and Text (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Image Side */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <img 
              src="/founders.png" 
              alt="Director & Founder - Valley Green Public School Gwalior" 
              className="w-[92%] sm:w-[85%] lg:w-[88%] max-w-lg h-auto object-contain mix-blend-multiply hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            
            {/* Subheading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Nurturing Young Minds from <span className="text-primary">Nursery to Class 5th</span>
            </h3>

            {/* Short Paragraph */}
            <p className="text-gray-700 font-medium text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg mb-8 text-center lg:text-left">
              Valley Green Public School is a nurturing ground where creativity, curiosity and confidence come together. We provide a transformative educational experience that fosters intellectual curiosity and holistic development to shape the responsible citizens of tomorrow.
            </p>

            {/* Director Quote */}
            <div className="mb-8 bg-white shadow-md p-5 sm:p-6 rounded-2xl border-l-4 border-accent flex gap-4 items-start max-w-lg text-left relative overflow-hidden">
              <span className="text-accent text-5xl font-serif leading-none h-8 shrink-0">“</span>
              <div>
                <p className="text-gray-800 font-semibold text-sm leading-relaxed mb-2">
                  Education is not just about learning; it's about building character, nurturing confidence and shaping a brighter future.
                </p>
                <p className="text-primary font-black text-xs uppercase tracking-wider">— Director & Founder</p>
              </div>
            </div>
            
            {/* Know More About Us Button */}
            {showButton && (
              <div>
                <Link to="/about" className="inline-flex items-center justify-center whitespace-nowrap bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg shadow-lg font-bold text-xs lg:text-sm transition-all hover:-translate-y-1 group cursor-pointer">
                  KNOW MORE ABOUT US
                  <svg className="w-4 h-4 ml-3 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            )}
            
          </div>

        </div>

      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      <SEO 
        title="About Us | Valley Green Public School Gwalior"
        description="Valley Green Public School (VGPS) Gwalior is dedicated to holistic early childhood and primary education from Nursery to Class 5th. Read our mission, vision, and leadership message."
        keywords="About Valley Green Public School, VGPS Gwalior leadership, primary school vision Gwalior, best school in Gwalior, Director Valley Green Public School"
      />

      {/* Page Header Banner */}
      <div className="relative w-full bg-primary py-8 lg:py-12 overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>
        
        <div className="relative z-10 animate-fade-in-up max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-accent font-bold text-xs sm:text-sm tracking-widest uppercase">
              Premier Primary Education in Gwalior
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
            About <span className="text-accent">Valley Green Public School</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Building strong educational foundations from <strong>Nursery to Class 5th</strong>. We empower young minds with knowledge, character, and lifelong confidence.
          </p>
        </div>
      </div>

      {/* Single Source of Truth About Section */}
      <AboutSection showButton={false} />

      {/* Core Values Section */}
      <div className="w-full py-12 lg:py-16 bg-[#fdfdfc] border-y border-gray-100 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="w-full flex flex-col items-center text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3 drop-shadow-sm tracking-tight uppercase">
              Our Core <span className="text-primary">Pillars of Excellence</span>
            </h2>
            <div className="flex items-center justify-center mb-4">
               <div className="w-10 h-1 bg-accent rounded-full"></div>
               <div className="w-2.5 h-2.5 bg-primary rotate-45 mx-2"></div>
               <div className="w-10 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-gray-700 font-medium max-w-3xl text-sm sm:text-base leading-relaxed">
              We stand firm on fundamental educational pillars that guide our teaching methodology and daily campus life.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
            {/* Mission */}
            <div className="bg-white p-7 rounded-3xl shadow-sm border border-emerald-100 hover:border-primary hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-13 h-13 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 border border-primary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
              </div>
              <h3 className="text-gray-900 font-black text-base uppercase tracking-wider mb-2">OUR MISSION</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                To provide quality, stress-free education that empowers young learners to achieve their full academic potential and grow into ethical global citizens.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-7 rounded-3xl shadow-sm border border-emerald-100 hover:border-accent hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-13 h-13 bg-accent/15 text-accent rounded-2xl flex items-center justify-center mb-5 border border-accent/30">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
              </div>
              <h3 className="text-gray-900 font-black text-base uppercase tracking-wider mb-2">OUR VISION</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                To be the premier primary education institution in Gwalior recognized for innovative teaching, student care, and holistic personality development.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-7 rounded-3xl shadow-sm border border-emerald-100 hover:border-primary hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-13 h-13 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 border border-primary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-gray-900 font-black text-base uppercase tracking-wider mb-2">OUR VALUES</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                Integrity, mutual respect, discipline, empathy, environmental responsibility, and a lifelong love for learning.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-white p-7 rounded-3xl shadow-sm border border-emerald-100 hover:border-accent hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-13 h-13 bg-accent/15 text-accent rounded-2xl flex items-center justify-center mb-5 border border-accent/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-gray-900 font-black text-base uppercase tracking-wider mb-2">SAFE ENVIRONMENT</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                To guarantee a secure, CCTV-monitored, inclusive campus where every child feels valued, heard, and supported.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default About;
