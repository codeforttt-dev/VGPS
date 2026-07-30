import React from 'react';
import CtaSection from '../../component/section/CtaSection';
import GallerySection from '../../component/section/GallerySection';

const Gallery = () => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      
      {/* Page Header Banner */}
      <div className="relative w-full bg-primary py-8 lg:py-12 overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-accent font-bold text-sm tracking-widest uppercase">
              Memories & Moments
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Our <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            Experience the vibrant life at Valley Green Public School through our collection of videos showcasing events, learning, and fun.
          </p>
        </div>
      </div>

      {/* Video Grid Section */}
      <GallerySection showHeading={false} />

      {/* Bottom CTA Section */}
      <CtaSection />

    </div>
  );
};

export default Gallery;
