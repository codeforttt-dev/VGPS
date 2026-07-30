import React, { useEffect, useRef, useState } from "react";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      title: "EXPERIENCED FACULTY",
      desc: "Our highly qualified and dedicated teachers focus on nurturing each student's potential.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "SMART CLASSROOMS",
      desc: "Technology-enabled classrooms that make learning interactive, engaging and effective.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "HOLISTIC DEVELOPMENT",
      desc: "We focus on academics, sports, arts, and life skills for the overall growth of students.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "SAFE & SECURE CAMPUS",
      desc: "A secure environment with CCTV surveillance and safety protocols for peace of mind.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "ACADEMIC EXCELLENCE",
      desc: "A strong academic curriculum designed to encourage critical thinking and creativity.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "SPORTS EXCELLENCE",
      desc: "World-class sports facilities and coaching to build teamwork, discipline and leadership.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18M8.5 6.5l7 11M15.5 6.5l-7 11" />
        </svg>
      ),
    },
    {
      title: "MODERN INFRASTRUCTURE",
      desc: "Well-equipped labs, library, playgrounds and advanced learning resources.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "VALUES & ETHICS",
      desc: "We instill strong values, empathy and respect to shape responsible global citizens.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#fcfbf9] overflow-hidden font-sans"
    >
      {/* Background Dots Pattern (Subtle) */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#1a4731" cx="2" cy="2" r="1.5"></circle>
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots)"></rect>
        </svg>
      </div>
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <pattern
            id="dots2"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#1a4731" cx="2" cy="2" r="1.5"></circle>
          </pattern>
          <rect x="0" y="0" width="60" height="60" fill="url(#dots2)"></rect>
        </svg>
      </div>

      <div
        className={`relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-12 pt-10 lg:pt-16 pb-8 lg:pb-12 flex flex-col items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
      >
        {/* Top Header */}
        <div className="w-full flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 sm:w-16 h-[2px] bg-accent/40 rounded-full"></div>
            <span className="text-accent font-black text-xl sm:text-2xl tracking-widest uppercase">
              WHY
            </span>
            <div className="w-12 sm:w-16 h-[2px] bg-accent/40 rounded-full"></div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase mb-6 drop-shadow-sm">
            CHOOSE US?
          </h2>

          <p className="text-gray-700 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-6">
            We provide a nurturing environment that encourages curiosity,
            creativity, and a passion for learning while ensuring overall
            development.
          </p>

          {/* Nursery to 5th Badge */}
          <div className="inline-flex items-center justify-center bg-white border border-accent/20 px-8 py-3 rounded-full shadow-sm">
            <span className="text-gray-700 font-bold text-sm sm:text-base">
              Specially Designed For{" "}
              <span className="text-primary font-black ml-1">
                Nursery to Class 5th
              </span>
            </span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1200px] w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[1.5rem] p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-gray-50/50"
            >
              {/* Dual Circle Icon Design */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute top-2 right-2 w-14 h-14 border-2 border-accent rounded-full transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute bottom-2 left-2 w-14 h-14 border-2 border-primary bg-white rounded-full flex items-center justify-center z-10">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-primary font-black text-sm lg:text-[15px] uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-medium text-xs lg:text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Dark Footer Banner */}
      <div className="relative w-full bg-[#163a28] mt-8 lg:mt-10 overflow-hidden">
        {/* SVG Curve at the top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 transform -translate-y-[99%]">
          <svg
            className="relative block w-full h-[40px] sm:h-[60px] lg:h-[80px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V15.81C13.1,34.33,28.62,49,46.94,59.36c64.1,36.31,142.1,43.23,214.3,31.42,70.1-11.5,138.3-33.3,208.5-35.3,71.1-2,141.6,18.8,211.3,33.5,69.3,14.6,138.6,15.6,207.2,3.2,74.7-13.4,147.2-40.4,223.3-51.5C1152.4,36.1,1176.6,41,1200,50.8V0Z"
              fill="#fcfbf9"
            ></path>
          </svg>
        </div>

        {/* Content of Banner */}
        <div className="relative z-10 pt-6 sm:pt-10 pb-10 lg:pb-12 px-6 flex flex-col items-center text-center group cursor-default">
          <div className="text-accent mb-3 bg-white/5 p-3 rounded-full border border-white/10 group-hover:animate-bounce transition-all duration-500">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-accent tracking-wide uppercase mb-2 drop-shadow-sm group-hover:scale-105 transition-transform duration-500">
            BUILDING BRIGHT FUTURES EVERYDAY
          </h3>
          <p className="text-gray-100 font-medium text-sm sm:text-base opacity-90 max-w-xl group-hover:text-white transition-colors duration-500">
            Empowering students to achieve, lead and make a difference in the world.
          </p>
        </div>

        {/* Decorative Background Leaves/Pattern */}
        <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700">
          <svg width="300" height="200" viewBox="0 0 100 100" fill="white">
            <path d="M50 0 C70 30, 90 70, 50 100 C10 70, 30 30, 50 0 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
