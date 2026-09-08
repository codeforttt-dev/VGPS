import React, { useState } from 'react';
import SEO from '../../component/layout/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
    email: '',
    inquiryFor: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // Auto-capitalize first letter of each word for name field
    if (name === 'name') {
      value = value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    
    // Enforce +91 prefix and max 10 digits for mobile fields
    if (name === 'mobile') {
      if (!value.startsWith('+91 ')) {
        setFormData({ ...formData, [name]: '+91 ' });
        return;
      }
      const numberPart = value.substring(4).replace(/\D/g, ''); // Extract only digits
      if (numberPart.length > 10) return; // Prevent typing more than 10 digits
      
      setFormData({ ...formData, [name]: '+91 ' + numberPart });
      if (numberPart.length === 10) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
      return;
    }
    
    setFormData({ ...formData, [name]: value });
    
    // Clear email error on typing
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'mobile') {
      const numberPart = value.substring(4).trim();
      if (numberPart.length > 0 && numberPart.length < 10) {
        setErrors(prev => ({ ...prev, mobile: 'Must be 10 digits' }));
      }
    }
    
    if (name === 'email' && value.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address (e.g., example@gmail.com)' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api');
      const response = await fetch(`${API_URL}/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({
          name: '',
          location: '',
          mobile: '+91 ',
          email: '',
          inquiryFor: '',
          message: ''
        });
      } else {
        alert(result.message || 'Error submitting inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Inquiry submission error:', error);
      alert('Connection Error: Unable to reach the server. Please verify backend server status and API configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans flex flex-col pt-[70px] lg:pt-[80px]">
      <SEO 
        title="Contact Us & Location Map | Valley Green Public School Gwalior"
        description="Contact Valley Green Public School in Gwalior, Madhya Pradesh. Call +91 76498 01389 or visit our campus for Nursery to Class 5th admissions & inquiry."
        keywords="Contact VGPS Gwalior, Valley Green Public School phone number, VGPS Gwalior address, primary school location Gwalior"
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
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-gray-200 font-medium max-w-2xl text-base lg:text-lg leading-relaxed">
            We'd love to hear from you. Reach out to us for admissions, queries, or any other information.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full py-16 lg:py-24 relative z-20 flex-grow">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center max-w-6xl mx-auto">
            
            {/* Left Column: Contact Details */}
            <div className="w-full lg:w-1/2">
              
              <div className="h-full bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-black text-primary mb-10 uppercase tracking-wide">Get In Touch</h2>
                
                <div className="flex items-start gap-4 mb-8 w-full">
                  <div className="w-12 h-12 shrink-0 bg-accent/10 text-accent rounded-full flex items-center justify-center border border-accent/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-1">Location</p>
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">
                      Valley Green Public School,<br/>
                      123 Education Lane,<br/>
                      City Center, State 123456
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8 w-full">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center border border-primary/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+917649801389" className="text-gray-800 font-bold text-base hover:text-primary transition-colors">
                      +91 76498 01389
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8 w-full">
                  <div className="w-12 h-12 shrink-0 bg-accent/10 text-accent rounded-full flex items-center justify-center border border-accent/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:vgps30529@gmail.com" className="text-gray-800 font-bold text-base hover:text-primary transition-colors">
                      vgps30529@gmail.com
                    </a>
                  </div>
                </div>

                {/* Google Map */}
                <div className="w-full mt-auto mb-6">
                  <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden shadow-inner border border-gray-100">
                    <iframe 
                      src="https://maps.google.com/maps?q=26.2160752,78.1723394&hl=en&z=17&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                    ></iframe>
                  </div>
                </div>

                <div className="w-full border-t border-gray-100 pt-6 flex flex-col items-center lg:items-start">
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-wider mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-[#f8fcf9] text-gray-600 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#f8fcf9] text-gray-600 rounded-full flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="w-full lg:w-1/2">
              <div className="h-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-8">
                
                <div className="text-center lg:text-left mb-6 border-b border-gray-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-black text-primary mb-1 uppercase tracking-wide">Submit an Inquiry</h2>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm">Please fill out the form below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Section 1: User Details */}
                  <div className="space-y-4">
                    <h3 className="text-accent font-bold text-[10px] tracking-widest uppercase">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 font-bold text-xs mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          value={formData.name} 
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="bg-[#f8fcf9] border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="location" className="text-gray-700 font-bold text-xs mb-1.5">Location / Address *</label>
                        <input 
                          type="text" 
                          id="location" 
                          name="location"
                          required 
                          value={formData.location} 
                          onChange={handleChange}
                          placeholder="e.g. Mumbai"
                          className="bg-[#f8fcf9] border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Contact Details */}
                  <div className="space-y-4">
                    <h3 className="text-accent font-bold text-[10px] tracking-widest uppercase">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-end mb-1.5">
                          <label htmlFor="mobile" className="text-gray-700 font-bold text-xs">Mobile Number *</label>
                          {errors.mobile && <span className="text-red-500 font-bold text-[10px] animate-pulse">{errors.mobile}</span>}
                        </div>
                        <input 
                          type="tel" 
                          id="mobile" 
                          name="mobile" 
                          required
                          value={formData.mobile || '+91 '} 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+91 XXXXX XXXXX"
                          className={`bg-[#f8fcf9] border rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-1 transition-colors ${errors.mobile ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'}`}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex justify-between items-end mb-1.5">
                          <label htmlFor="email" className="text-gray-700 font-bold text-xs">Email Address</label>
                          {errors.email && <span className="text-red-500 font-bold text-[10px] animate-pulse">Invalid email</span>}
                        </div>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. rahul@gmail.com"
                          className={`bg-[#f8fcf9] border rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-1 transition-colors ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Inquiry Details */}
                  <div className="space-y-4">
                    <h3 className="text-accent font-bold text-[10px] tracking-widest uppercase">Inquiry Details</h3>
                    
                    <div className="flex flex-col">
                      <label htmlFor="inquiryFor" className="text-gray-700 font-bold text-xs mb-1.5">Inquire For *</label>
                      <select 
                        id="inquiryFor" 
                        name="inquiryFor" 
                        required
                        value={formData.inquiryFor} 
                        onChange={handleChange}
                        className="bg-[#f8fcf9] border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="Nursery Admission">Nursery Admission</option>
                        <option value="Class 1-5 Admission">Class 1-5 Admission</option>
                        <option value="Fee Structure">Fee Structure</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex justify-between items-end mb-1.5">
                        <label htmlFor="message" className="text-gray-700 font-bold text-xs">Message *</label>
                        <span className={`text-[10px] font-bold ${formData.message.length === 200 ? 'text-red-500' : 'text-gray-400'}`}>
                          {formData.message.length} / 200
                        </span>
                      </div>
                      <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows="3"
                        value={formData.message} 
                        onChange={handleChange}
                        placeholder="Write your query here..."
                        className="bg-[#f8fcf9] border border-gray-200 rounded-lg px-3 py-2 text-gray-800 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-primary text-white font-black text-sm px-6 py-3 rounded-xl shadow-[0_10px_20px_rgba(26,71,49,0.3)] hover:bg-primary-dark hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                      {!loading && (
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            <h3 className="text-2xl font-black text-gray-800 mb-3 tracking-tight">Thank You!</h3>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              We have successfully received your inquiry at <span className="font-bold text-primary">Valley Green Public School</span>. Our team will get back to you shortly with all the details you need.
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

export default Contact;
