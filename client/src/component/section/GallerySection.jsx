import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image.png";
import img2 from "../../assets/image copy.png";
import img3 from "../../assets/image copy 2.png";

const GallerySection = ({ limit, showHeading = true }) => {
  const allImages = [
    {
      id: 1,
      title: "School Event",
      description:
        "Glimpses of our students showing incredible energy during school events.",
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Campus Life",
      description:
        "A look inside our beautiful campus and interactive learning spaces.",
      imageUrl: img2,
    },
    {
      id: 3,
      title: "Student Activities",
      description:
        "Students celebrating diversity and talent through various activities.",
      imageUrl: img3,
    },
  ];

  const items = limit ? allImages.slice(0, limit) : allImages;

  return (
    <div
      className={`w-full ${showHeading ? "py-16 lg:py-24" : "py-10 lg:py-16"} bg-[#f8fcf9] relative z-20`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {showHeading && (
          <div className="w-full flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 drop-shadow-sm tracking-tight uppercase">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-2 h-2 bg-primary rotate-45 mx-2"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-gray-600 font-medium max-w-3xl text-sm sm:text-base leading-relaxed">
              Experience the vibrant life at Valley Green Public School through
              our collection of photos showcasing events, learning, and fun.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Container (16:9 Aspect Ratio) */}
              <div className="relative w-full pt-[56.25%] bg-gray-100">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-wide group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/gallery"
              className="bg-primary text-white font-black text-sm px-8 py-3.5 rounded-full shadow-[0_10px_20px_rgba(26,71,49,0.3)] hover:bg-primary-dark hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group tracking-wide"
            >
              VIEW FULL GALLERY
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
