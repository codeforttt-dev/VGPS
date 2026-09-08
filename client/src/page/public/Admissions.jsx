import React from 'react';
import SEO from '../../component/layout/SEO';
import CtaSection from '../../component/section/CtaSection';
import { Link } from 'react-router-dom';

const Admissions = () => {
  const steps = [
    {
      step: "01",
      title: "Submit an Inquiry",
      desc: "Fill out our online contact form or visit the school office to register your interest.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    },
    {
      step: "02",
      title: "Campus Visit",
      desc: "We invite parents and the child for a brief interaction and a guided tour of our modern facilities.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
    {
      step: "03",
      title: "Document Submission",
      desc: "Submit the required documents along with the completed admission application form.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    },
    {
      step: "04",
      title: "Fee Payment & Confirmation",
      desc: "Complete the fee payment process to secure your child's seat at Valley Green Public School.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    }
  ];

  const criteria = [
    { grade: "Nursery", age: "3+ Years", date: "By 31st March" },
    { grade: "LKG", age: "4+ Years", date: "By 31st March" },
    { grade: "UKG", age: "5+ Years", date: "By 31st March" },
    { grade: "Class 1", age: "6+ Years", date: "By 31st March" },
    { grade: "Class 2 to 5", age: "Based on previous pass certificate", date: "N/A" }
  ];

  const documents = [
    "Birth Certificate of the child (Original for verification & Photocopy)",
    "Passport size photographs of the child (4 copies)",
    "Passport size photographs of parents/guardians (2 copies each)",
    "Aadhar Card copy of the child and parents",
    "Previous school's Report Card & Transfer Certificate (for Class 1 and above)",
    "Medical Fitness / Blood Group Certificate"
  ];

  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      <SEO 
        title="School Admissions 2026-27 | Valley Green Public School Gwalior"
        description="Apply for Nursery to Class 5th admissions at Valley Green Public School Gwalior. Check admission criteria, documents required, and seat availability."
        keywords="VGPS Gwalior admissions, school admission Gwalior 2026, nursery admission Gwalior, class 1 to 5 admission Gwalior"
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
              Join Our Family
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
            Admissions <span className="text-accent">Open 2026-27</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            Take the first step towards a bright future. We are currently accepting admissions for Nursery to Class 5th for the upcoming academic session.
          </p>
        </div>
      </div>

      <div className="w-full py-12 lg:py-20 relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          {/* Section 1: Admission Process */}
          <div className="w-full flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 drop-shadow-sm tracking-tight uppercase">
              Admission <span className="text-primary">Process</span>
            </h2>
            <div className="flex items-center justify-center mb-6">
               <div className="w-12 h-1 bg-accent rounded-full"></div>
               <div className="w-2 h-2 bg-primary rotate-45 mx-2"></div>
               <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-gray-600 font-medium max-w-2xl text-sm sm:text-base leading-relaxed mb-10">
              We have kept our admission process simple and transparent to ensure a hassle-free experience for parents and children alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300 relative group">
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-[#f8fcf9] rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                   <span className="text-primary/20 font-black text-2xl">{step.step}</span>
                </div>
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    {step.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-3 uppercase tracking-wide group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Section 2: Eligibility Criteria */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-full">
              <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-wide">Age Criteria</h3>
              <p className="text-gray-500 text-sm mb-8 font-medium">To be eligible for admission, the child must meet the following age requirements.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f8fcf9] text-gray-700">
                      <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider rounded-tl-xl">Class</th>
                      <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider">Required Age</th>
                      <th className="py-4 px-4 font-bold text-xs uppercase tracking-wider rounded-tr-xl">Cut-off Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {criteria.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#f8fcf9]/50 transition-colors">
                        <td className="py-4 px-4 font-bold text-gray-800">{item.grade}</td>
                        <td className="py-4 px-4 font-medium text-gray-600">{item.age}</td>
                        <td className="py-4 px-4 font-medium text-gray-500">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Required Documents */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] h-full">
               <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-wide">Documents Required</h3>
               <p className="text-gray-500 text-sm mb-8 font-medium">Please bring the original documents for verification along with their photocopies.</p>
               
               <ul className="space-y-4">
                 {documents.map((doc, idx) => (
                   <li key={idx} className="flex items-start">
                     <div className="w-6 h-6 shrink-0 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 mr-4">
                       <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                     </div>
                     <span className="text-gray-700 font-medium text-sm leading-relaxed">{doc}</span>
                   </li>
                 ))}
               </ul>

               <div className="mt-10 bg-[#f8fcf9] p-5 rounded-xl border border-primary/10">
                 <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Note:</p>
                 <p className="text-gray-600 text-sm font-medium leading-relaxed">Admission is granted subject to the availability of seats and fulfilling all the eligibility criteria.</p>
               </div>
            </div>

          </div>

        </div>
      </div>

      {/* CTA Section */}
      <CtaSection />

    </div>
  );
};

export default Admissions;
