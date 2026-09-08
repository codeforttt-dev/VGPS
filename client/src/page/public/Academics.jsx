import React from 'react';
import SEO from '../../component/layout/SEO';
import CtaSection from '../../component/section/CtaSection';

const Academics = () => {
  const methodologies = [
    {
      title: "Play-Way Method",
      desc: "For our youngest learners, we use games, storytelling, and hands-on activities to make learning joyful and natural.",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: "Smart Classrooms",
      desc: "Interactive digital boards and multimedia content bring lessons to life, helping students grasp concepts faster.",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    {
      title: "Experiential Learning",
      desc: "We believe in 'learning by doing'. Students participate in projects, experiments, and activities to gain practical knowledge.",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    },
    {
      title: "Continuous Assessment",
      desc: "Regular, stress-free evaluations help us understand each child's progress and provide personalized attention.",
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    }
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      <SEO 
        title="Academics & Curriculum | Valley Green Public School Gwalior"
        description="Explore the academic curriculum from Nursery to Class 5th at Valley Green Public School Gwalior. Play-way methodology, smart classrooms, and experiential learning."
        keywords="VGPS Gwalior academics, primary school curriculum Gwalior, nursery to 5th syllabus Gwalior, smart classrooms Gwalior"
      />
      
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
              Excellence in Education
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
            Academics & Curriculum
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            Building a strong foundation for lifelong learning. Our curriculum is specially designed to nurture curiosity and foster holistic development for students from Nursery to Class 5th.
          </p>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="w-full py-10 lg:py-16 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="w-full flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 drop-shadow-sm tracking-tight uppercase">
              Our <span className="text-primary">Curriculum</span>
            </h2>
            <div className="flex items-center justify-center mb-6">
               <div className="w-12 h-1 bg-accent rounded-full"></div>
               <div className="w-2 h-2 bg-primary rotate-45 mx-2"></div>
               <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-gray-600 font-medium max-w-3xl text-sm sm:text-base leading-relaxed">
              We follow a child-centric approach that blends modern educational practices with essential traditional values, ensuring our students are well-prepared for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Early Education Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 border border-accent/20">
                <span className="font-black text-2xl">A B C</span>
              </div>
              <h3 className="text-primary font-black text-2xl uppercase tracking-wide mb-2">Early Education</h3>
              <div className="text-accent font-bold text-sm mb-6 uppercase tracking-widest">Nursery - UKG</div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Play-way methodology to make learning fun and engaging.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Focus on sensory development, motor skills, and basic literacy.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Storytelling, rhymes, and creative arts for expression.</span>
                </li>
              </ul>
            </div>

            {/* Primary Education Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-primary font-black text-2xl uppercase tracking-wide mb-2">Primary Education</h3>
              <div className="text-accent font-bold text-sm mb-6 uppercase tracking-widest">Class 1 - Class 5</div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Comprehensive learning in core subjects: Math, EVS, and Languages.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Focus on critical thinking, problem-solving, and communication skills.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-600 font-medium text-sm leading-relaxed">Introduction to computer science and environmental awareness.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="w-full py-10 lg:py-16 bg-[#fdfdfc] border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="w-full flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 drop-shadow-sm tracking-tight uppercase">
              Teaching <span className="text-accent">Methodology</span>
            </h2>
            <div className="flex items-center justify-center mb-6">
               <div className="w-12 h-1 bg-primary rounded-full"></div>
               <div className="w-2 h-2 bg-accent rotate-45 mx-2"></div>
               <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
            {methodologies.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-50 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#f8fcf9] text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CtaSection />

    </div>
  );
};

export default Academics;
