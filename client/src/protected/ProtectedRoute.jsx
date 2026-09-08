import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/VGPS-logo.png';
import SEO from '../component/layout/SEO';

const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN || '5490';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLockedOut, setIsLockedOut] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('vgps_admin_pin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleDigitChange = (index, value) => {
    if (isLockedOut) return;
    if (value.length > 1) value = value.slice(-1); // Only take last character

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    // Auto-focus next input box
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Auto-submit when all 4 digits are typed
    if (index === 3 && value) {
      const fullPin = newPin.join('');
      verifyPin(fullPin);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const verifyPin = (enteredPin) => {
    if (enteredPin === ADMIN_PIN) {
      localStorage.setItem('vgps_admin_pin_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
      setErrorMessage('');
    } else {
      setError(true);
      setErrorMessage('Invalid Security PIN! Access Denied.');
      setPin(['', '', '', '']);
      setAttempts(prev => {
        const nextAttempts = prev + 1;
        if (nextAttempts >= 5) {
          setIsLockedOut(true);
          setErrorMessage('Too many failed attempts! Try again later.');
        }
        return nextAttempts;
      });

      // Refocus first input
      setTimeout(() => {
        const firstInput = document.getElementById('pin-input-0');
        if (firstInput) firstInput.focus();
      }, 100);
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    verifyPin(pin.join(''));
  };

  // If Authenticated, render child admin pages
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Else render Security PIN Lock Gate Screen
  return (
    <div className="min-h-screen bg-[#0b2217] flex flex-col items-center justify-center p-4 sm:p-6 font-sans relative overflow-hidden">
      <SEO title="Admin Security Lock | Valley Green Public School" />

      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between text-accent">
        <svg className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 scale-150" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"/>
        </svg>
        <svg className="w-96 h-96 translate-x-1/2 translate-y-1/2 scale-150" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20 p-6 sm:p-10 text-center animate-fade-in">
        
        {/* School Logo Badge */}
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-primary/20 shadow-inner">
          <img src={Logo} alt="VGPS Logo" className="w-12 h-12 object-contain" />
        </div>

        <div className="mb-6">
          <span className="inline-block bg-accent/20 text-emerald-900 font-extrabold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1 rounded-full mb-2">
            VGPS Admin Portal Security
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
            Enter <span className="text-primary">PIN Lock</span>
          </h1>
          <p className="text-gray-500 font-medium text-xs sm:text-sm mt-1">
            Please enter your 4-digit secret admin PIN code to continue.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleManualSubmit} className="space-y-6">
          
          {/* 4 Digit Boxes */}
          <div className="flex justify-center gap-3 sm:gap-4 my-4">
            {pin.map((digit, idx) => (
              <input
                key={idx}
                id={`pin-input-${idx}`}
                type={showPin ? "text" : "password"}
                maxLength={1}
                disabled={isLockedOut}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-black rounded-2xl border-2 transition-all duration-200 focus:outline-none ${
                  error 
                    ? 'border-red-500 bg-red-50 text-red-600 animate-shake' 
                    : 'border-gray-200 bg-[#f8fcf9] text-gray-900 focus:border-primary focus:ring-4 focus:ring-primary/20'
                }`}
                autoFocus={idx === 0}
              />
            ))}
          </div>

          {/* Toggle PIN Visibility & Error Message */}
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="text-xs font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {showPin ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 014.122-.963c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18" />
                  </svg>
                  Hide PIN
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Show PIN
                </>
              )}
            </button>

            {error && (
              <p className="text-xs font-bold text-red-600 animate-bounce">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLockedOut}
            className="w-full bg-primary hover:bg-primary-dark text-white font-black text-sm py-3.5 rounded-xl shadow-lg transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-50"
          >
            UNLOCK ADMIN PORTAL
          </button>
        </form>

        {/* Back to Public Site */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex justify-center">
          <Link
            to="/"
            className="text-xs font-extrabold text-gray-500 hover:text-primary flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProtectedRoute;
