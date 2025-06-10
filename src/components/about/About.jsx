import React from "react";
import { FaSeedling, FaBullseye, FaRocket } from "react-icons/fa";

const sections = [
  {
    id: 1,
    icon: FaSeedling,
    title: "Our Beginning",
    text: "We started with a small team driven by big dreams and a shared passion for innovation.",
  },
  {
    id: 2,
    icon: FaBullseye,
    title: "Our Mission",
    text: "Our mission is to create meaningful solutions that improve everyday life.",
  },
  {
    id: 3,
    icon: FaRocket,
    title: "Our Future",
    text: "We're committed to growing with integrity and pushing boundaries to shape a better tomorrow.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#5a4a4c] via-[#ececec] to-[#e7a6af] text-white font-sans">
      {/* Hero Image with Text Overlay */}
      <div className="relative h-72 sm:h-96 w-full">
        <img
          src="woman2.jpg"
          alt="Hero"
          className="w-full h-full object-cover brightness-60"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-2xl text-center px-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Section Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
        <div className="flex flex-col md:flex-row gap-6 mt-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-9 mb-20">
          {sections.map(({ id, icon: Icon, title, text }) => (
            <div
              key={id}
              className="flex-1 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-[#d4757d]/20 mb-4 sm:mb-6 shadow-inner">
                <Icon className="text-2xl sm:text-3xl text-[#d4757d]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#6b4c4c] mb-2 sm:mb-4">
                {title}
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
