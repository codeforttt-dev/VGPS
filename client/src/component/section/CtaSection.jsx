import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="relative w-full bg-[#ead177] overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between text-primary">
         <svg className="w-1/2 h-full -translate-x-1/4 scale-150" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
         <svg className="w-1/2 h-full translate-x-1/4 scale-150" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="currentColor"/></svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-12 py-16 lg:py-24 flex flex-col items-center text-center">
        
        <div className="mb-4 bg-white px-6 py-2 rounded-full border border-accent/20 shadow-sm">
          <span className="text-primary font-black tracking-wide text-xs sm:text-sm uppercase">Admissions Open 2026-27</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 tracking-tight drop-shadow-sm max-w-3xl">
          Ready to Give Your Child the Best Start?
        </h2>
        
        <p className="text-primary/90 font-medium text-sm sm:text-base lg:text-lg mb-10 max-w-2xl leading-relaxed">
          Enroll them at Valley Green Public School. We are currently accepting admissions for <span className="font-bold">Nursery to Class 5th</span>. Give your child the foundation they deserve.
        </p>
        
        <Link to="/admission-form" className="bg-primary text-white font-black text-xs sm:text-sm lg:text-base px-8 sm:px-12 py-4 rounded-full shadow-[0_10px_40px_rgba(26,71,49,0.3)] hover:bg-primary-dark hover:scale-105 transition-all duration-300 flex items-center group">
          TAKE ADMISSION NOW
          <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

      </div>
    </section>
  );
};

export default CtaSection;
