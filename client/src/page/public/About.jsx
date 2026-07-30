import React from 'react';
import AboutSection from '../../component/section/AboutSection';

const About = () => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col">
      
      {/* Top Section matching Home exactly, but without the 'Know More' button */}
      <AboutSection showButton={false} />

      {/* Core Values Section */}
      <div className="w-full pb-24 mt-4 lg:-mt-12 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="w-full flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 drop-shadow-sm tracking-tight">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <div className="flex items-center justify-center mb-6">
               <div className="w-12 h-1 bg-accent rounded-full"></div>
               <div className="w-2 h-2 bg-primary rotate-45 mx-2"></div>
               <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-gray-600 font-medium max-w-3xl text-sm sm:text-base leading-relaxed">
              We are committed to fostering an environment where every student can thrive, build character, and achieve excellence.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-3">OUR MISSION</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              To provide quality education that empowers students to achieve their full potential and become responsible global citizens.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-3">OUR VISION</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              To be a leading institution that inspires excellence, innovation, and creates the future leaders of tomorrow.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-3">OUR VALUES</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Integrity, Respect, Excellence, Compassion, Responsibility, and an unwavering commitment to truth.
            </p>
          </div>

          {/* Commitment */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            </div>
            <h3 className="text-gray-900 font-black text-lg uppercase tracking-wider mb-3">COMMITMENT</h3>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              To create a safe, nurturing, and inclusive environment that promotes holistic development for every child.
            </p>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
