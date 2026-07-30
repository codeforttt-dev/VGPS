import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#f8fcf9] h-[100vh] min-h-[600px] w-full overflow-hidden font-sans flex flex-col">
      {/* Top Main Area (Flex-grow so it takes all space except bottom bar) */}
      <div className="flex-grow flex flex-col lg:flex-row relative min-h-0">
        {/* Curved background shape at the very bottom of the Top Main Area */}
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none overflow-hidden leading-none h-[40px] lg:h-[50px] flex items-end translate-y-[1px]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full min-w-[1440px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C320,160 420,0 800,40 C1180,80 1320,10 1440,60 L1440,120 L0,120 Z"
              fill="var(--color-accent)"
              opacity="0.3"
              transform="translate(0, -10)"
            />
            <path
              d="M0,80 C320,160 420,0 800,40 C1180,80 1320,10 1440,60 L1440,120 L0,120 Z"
              fill="var(--color-primary)"
            />
          </svg>
        </div>

        {/* Left Content Column */}
        <div className="w-full lg:w-[55%] flex-grow flex flex-col justify-center lg:justify-start px-6 lg:px-12 pt-[90px] lg:pt-[110px] pb-[45px] lg:pb-[55px] z-20 animate-fade-in-up">
          <div className="flex flex-col h-full max-w-2xl mx-auto lg:mx-0">
            {/* Headlines */}
            <div className="mb-2 lg:mb-3 shrink-0">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-black leading-[1.05] text-primary drop-shadow-sm">
                Inspiring Young Minds,
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-black leading-[1.05] text-accent drop-shadow-sm mt-0.5 sm:mt-1">
                Building Bright Futures
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-gray-700 font-medium mb-3 lg:mb-5 leading-snug sm:leading-relaxed shrink-0 max-w-xl">
              At Valley Green Public School, we provide exceptional early childhood and primary education from <strong>Nursery to Class 5th</strong>, nurturing curiosity, creativity and confidence in every young mind through modern learning and strong values.
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-6 max-w-xl shrink-0">
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform shadow-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] lg:text-[11px] font-semibold text-gray-800 leading-tight">
                  CBSE
                  <br />
                  Curriculum
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform shadow-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] lg:text-[11px] font-semibold text-gray-800 leading-tight">
                  Experienced
                  <br />
                  Faculty
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform shadow-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] lg:text-[11px] font-semibold text-gray-800 leading-tight">
                  Safe & Secure
                  <br />
                  Campus
                </span>
              </div>

              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-white mb-1 group-hover:scale-110 transition-transform shadow-md">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011-1h8a1 1 0 011 1v2a2 2 0 012 2v2a5 5 0 01-5 5H8a5 5 0 01-5-5V6a2 2 0 012-2V2zm2 2v2h6V4H7zM5 8v2a3 3 0 003 3h4a3 3 0 003-3V8H5z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M10 16a1 1 0 00-1 1v2h2v-2a1 1 0 00-1-1z"></path>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] lg:text-[11px] font-semibold text-gray-800 leading-tight">
                  Holistic
                  <br />
                  Development
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row items-center space-x-2 sm:space-x-3 lg:space-x-4 w-full sm:w-auto shrink-0 pb-2">
              <button className="flex-1 sm:flex-none px-4 py-2.5 lg:px-7 lg:py-3 xl:px-8 xl:py-3.5 bg-primary text-white text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-bold rounded shadow-lg flex items-center justify-center hover:bg-primary-dark transition-all hover:-translate-y-1">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1.5 lg:mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                TAKE ADMISSION
              </button>
              <button className="flex-1 sm:flex-none px-4 py-2.5 lg:px-7 lg:py-3 xl:px-8 xl:py-3.5 bg-transparent border-2 border-accent text-accent text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-bold rounded flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1.5 lg:mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                EXPLORE
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full z-0 animate-fade-in-up animation-delay-200 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8fcf9] via-[#f8fcf9]/60 to-transparent z-10 w-32"></div>
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
            alt="Students in front of school building"
            className="w-full h-full object-cover object-center lg:object-right [clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]"
          />
        </div>
      </div>

      {/* Bottom Status Bar (Shrink-0 to always have its fixed height) */}
      <div className="h-[60px] sm:h-[65px] lg:h-[70px] xl:h-[75px] w-full bg-primary z-20 px-2 sm:px-4 flex items-center shrink-0">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-white h-full">
          <div className="flex items-center space-x-2 sm:space-x-3 justify-center flex-1">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            <div className="flex flex-col justify-center">
              <div className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl leading-none">
                15+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] font-medium text-gray-200 leading-tight">
                Years of
                <br className="sm:hidden lg:block xl:hidden" /> Excellence
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 justify-center flex-1">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            <div className="flex flex-col justify-center">
              <div className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl leading-none">
                1000+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] font-medium text-gray-200 leading-tight">
                Happy
                <br className="sm:hidden lg:block xl:hidden" /> Students
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 justify-center flex-1">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="flex flex-col justify-center">
              <div className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl leading-none">
                50+
              </div>
              <div className="text-[9px] sm:text-[10px] lg:text-[11px] xl:text-[12px] font-medium text-gray-200 leading-tight">
                Qualified
                <br className="sm:hidden lg:block xl:hidden" /> Teachers
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 justify-center flex-1">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-accent flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011-1h8a1 1 0 011 1v2a2 2 0 012 2v2a5 5 0 01-5 5H8a5 5 0 01-5-5V6a2 2 0 012-2V2zm2 2v2h6V4H7zM5 8v2a3 3 0 003 3h4a3 3 0 003-3V8H5z"
                clipRule="evenodd"
              ></path>
              <path d="M10 16a1 1 0 00-1 1v2h2v-2a1 1 0 00-1-1z"></path>
            </svg>
            <div className="flex flex-col justify-center">
              <div className="text-[9px] sm:text-[10px] lg:text-[12px] xl:text-[14px] font-bold leading-tight">
                Academic Excellence
                <br />
                Holistic Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
