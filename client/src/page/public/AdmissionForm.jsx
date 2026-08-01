import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    studentClass: '',
    fatherName: '',
    motherName: '',
    mobile: '',
    secondaryMobile: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Thank you! Admission form submitted successfully. We will get back to you soon.');
        setFormData({
          studentName: '',
          dob: '',
          studentClass: '',
          fatherName: '',
          motherName: '',
          mobile: '',
          secondaryMobile: '',
          location: ''
        });
      } else {
        alert(result.message || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Take <span className="text-accent">Admission</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            Enroll your child at Valley Green Public School for a bright and successful future.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full py-16 lg:py-24 relative z-20 flex-grow">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex justify-center">
          
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 lg:p-12">
            
            <div className="text-center mb-8 border-b border-gray-100 pb-6">
              <div className="inline-flex items-center justify-center bg-primary/10 border border-primary/20 px-6 py-2 rounded-full mb-4">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">Admission Form 2026-27</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2 uppercase tracking-wide">Student Details</h2>
              <p className="text-gray-500 font-medium text-sm sm:text-base">Please fill in the required information accurately.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-accent font-bold text-xs tracking-widest uppercase border-b border-accent/20 pb-2">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="studentName" className="text-gray-700 font-bold text-xs mb-1.5">Student Full Name *</label>
                    <input 
                      type="text" 
                      id="studentName" 
                      name="studentName" 
                      required
                      value={formData.studentName} 
                      onChange={handleChange}
                      placeholder="e.g. Aarav Patel"
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dob" className="text-gray-700 font-bold text-xs mb-1.5">Date of Birth *</label>
                    <input 
                      type="date" 
                      id="dob" 
                      name="dob"
                      required 
                      value={formData.dob} 
                      onChange={handleChange}
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="studentClass" className="text-gray-700 font-bold text-xs mb-1.5">Admission For Class *</label>
                    <select 
                      id="studentClass" 
                      name="studentClass" 
                      required
                      value={formData.studentClass} 
                      onChange={handleChange}
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Class</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parents Information */}
              <div className="space-y-4">
                <h3 className="text-accent font-bold text-xs tracking-widest uppercase border-b border-accent/20 pb-2">Parents Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="fatherName" className="text-gray-700 font-bold text-xs mb-1.5">Father's Name *</label>
                    <input 
                      type="text" 
                      id="fatherName" 
                      name="fatherName" 
                      required
                      value={formData.fatherName} 
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="motherName" className="text-gray-700 font-bold text-xs mb-1.5">Mother's Name *</label>
                    <input 
                      type="text" 
                      id="motherName" 
                      name="motherName" 
                      required
                      value={formData.motherName} 
                      onChange={handleChange}
                      placeholder="e.g. Sunita Patel"
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-accent font-bold text-xs tracking-widest uppercase border-b border-accent/20 pb-2">Contact Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="mobile" className="text-gray-700 font-bold text-xs mb-1.5">Primary Mobile Number *</label>
                    <input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      required
                      value={formData.mobile} 
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="secondaryMobile" className="text-gray-700 font-bold text-xs mb-1.5">Secondary Mobile Number</label>
                    <input 
                      type="tel" 
                      id="secondaryMobile" 
                      name="secondaryMobile" 
                      value={formData.secondaryMobile} 
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX (Optional)"
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="location" className="text-gray-700 font-bold text-xs mb-1.5">Current Location / Address *</label>
                    <textarea 
                      id="location" 
                      name="location" 
                      required
                      rows="2"
                      value={formData.location} 
                      onChange={handleChange}
                      placeholder="Full Address..."
                      className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary text-white font-black text-sm lg:text-base px-6 py-4 rounded-xl shadow-[0_10px_20px_rgba(26,71,49,0.3)] hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT ADMISSION FORM'}
                  {!loading && (
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AdmissionForm;
