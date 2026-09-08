import React, { useState } from 'react';
import SEO from '../../component/layout/SEO';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    studentClass: '',
    fatherName: '',
    motherName: '',
    mobile: '+91 ',
    secondaryMobile: '+91 ',
    location: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // Auto-capitalize first letter of each word for name fields
    if (['studentName', 'fatherName', 'motherName'].includes(name)) {
      value = value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    // Enforce +91 prefix and max 10 digits for mobile fields
    if (name === 'mobile' || name === 'secondaryMobile') {
      if (!value.startsWith('+91 ')) {
        // If user tries to delete the prefix, keep it
        setFormData({ ...formData, [name]: '+91 ' });
        return;
      }
      
      const numberPart = value.substring(4).replace(/\D/g, ''); // Extract only digits
      if (numberPart.length > 10) return; // Prevent typing more than 10 digits
      
      setFormData({ ...formData, [name]: '+91 ' + numberPart });
      
      if (numberPart.length === 10) {
        setErrors(prev => ({ ...prev, [name]: '' })); // Clear error
      }
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'mobile' || name === 'secondaryMobile') {
      const numberPart = value.substring(4).trim();
      
      if (name === 'secondaryMobile' && numberPart === '') {
        setErrors(prev => ({ ...prev, [name]: '' }));
        return;
      }
      
      if (numberPart.length > 0 && numberPart.length < 10) {
        setErrors(prev => ({ ...prev, [name]: 'Must be 10 digits' }));
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(`${API_URL}/admission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          studentName: '',
          dob: '',
          studentClass: '',
          fatherName: '',
          motherName: '',
          mobile: '+91 ',
          secondaryMobile: '+91 ',
          location: ''
        });
      } else {
        alert(result.message || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Connection Error: Unable to reach the server. Please verify backend server status and API configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      <SEO 
        title="Online Admission Application | Valley Green Public School Gwalior"
        description="Fill out the online admission form for Nursery to Class 5th at Valley Green Public School Gwalior. Quick and easy registration process."
        keywords="VGPS Gwalior online admission form, school application Gwalior, admission nursery 5th Gwalior"
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-md">
            Take <span className="text-accent">Admission</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            Enroll your child at Valley Green Public School for a bright and successful future.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full py-8 lg:py-12 relative z-20 flex-grow">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex justify-center">
          
          <div className="w-full max-w-4xl bg-white rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sm:p-8 lg:p-10">

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                
                {/* Student Details */}
                <div className="col-span-full pb-1 border-b border-gray-100 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  </div>
                  <h3 className="text-primary font-bold text-[11px] uppercase tracking-wider">Student Details</h3>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="studentName" className="text-gray-700 font-bold text-xs mb-1.5">Student Name *</label>
                  <input 
                    type="text" 
                    id="studentName" 
                    name="studentName" 
                    required
                    value={formData.studentName} 
                    onChange={handleChange}
                    placeholder="e.g. Aarav Patel"
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="studentClass" className="text-gray-700 font-bold text-xs mb-1.5">Admission Class *</label>
                  <select 
                    id="studentClass" 
                    name="studentClass" 
                    required
                    value={formData.studentClass} 
                    onChange={handleChange}
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
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

                {/* Parents Details */}
                <div className="col-span-full pb-1 border-b border-gray-100 flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-2">
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                  </div>
                  <h3 className="text-accent font-bold text-[11px] uppercase tracking-wider">Parents Details</h3>
                </div>
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
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
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
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-end mb-1.5">
                    <label htmlFor="mobile" className="text-gray-700 font-bold text-xs">Primary Mobile *</label>
                    {errors.mobile && <span className="text-red-500 font-bold text-[10px] animate-pulse">{errors.mobile}</span>}
                  </div>
                  <input 
                    type="tel" 
                    id="mobile" 
                    name="mobile" 
                    required
                    value={formData.mobile} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 XXXXX XXXXX"
                    className={`bg-[#f8fcf9] border rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 transition-all ${errors.mobile ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-end mb-1.5">
                    <label htmlFor="secondaryMobile" className="text-gray-700 font-bold text-xs flex items-center">
                      <svg className="w-3.5 h-3.5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      WhatsApp Number
                    </label>
                    {errors.secondaryMobile && <span className="text-red-500 font-bold text-[10px] animate-pulse">{errors.secondaryMobile}</span>}
                  </div>
                  <input 
                    type="tel" 
                    id="secondaryMobile" 
                    name="secondaryMobile" 
                    value={formData.secondaryMobile} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 XXXXX XXXXX"
                    className={`bg-[#f8fcf9] border rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 transition-all ${errors.secondaryMobile ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'}`}
                  />
                </div>
                
                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="location" className="text-gray-700 font-bold text-xs mb-1.5">Current Location / Address *</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    required
                    value={formData.location} 
                    onChange={handleChange}
                    placeholder="Full Address..."
                    className="bg-[#f8fcf9] border border-gray-200 rounded-xl px-4 py-2 sm:py-2.5 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:w-auto px-10 bg-primary text-white font-black text-sm lg:text-base py-3 sm:py-3.5 rounded-xl shadow-[0_10px_20px_rgba(26,71,49,0.3)] hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group mx-auto disabled:opacity-70 disabled:hover:translate-y-0"
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

      {/* Success Popup Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowSuccessPopup(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in-up border border-gray-100 transform transition-all">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-10 h-10 text-green-500 animate-[bounce_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-3 tracking-tight">Application Received!</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Thank you for choosing <span className="font-bold text-primary">Valley Green Public School</span>. We are thrilled to partner with you in building a bright and successful future for your child. Our admission team will contact you shortly with the next steps.
            </p>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(26,71,49,0.25)] hover:shadow-[0_12px_25px_rgba(26,71,49,0.35)] hover:-translate-y-1"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdmissionForm;
