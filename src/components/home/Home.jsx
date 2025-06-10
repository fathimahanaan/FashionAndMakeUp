import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen pt-16 bg-gradient-to-r from-[#eed0d4] via-[#efeeee] to-[#f6c3ca] p-6 flex flex-col md:flex-row items-stretch gap-6 md:gap-0"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Text Side with Animation */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 text-center md:text-left drop-shadow-md z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-[#6b4c4c] mb-4 tracking-wide relative inline-block">
          Welcome to MyBrand
          <span className="block h-1 w-24 bg-[#d4757d] mt-2 rounded-full"></span>
        </h1>
        <p className="text-[#5a4a4a] text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed luctus, sapien ut tincidunt suscipit, purus erat
          placerat mauris, in vehicula magna tortor a nibh.
        </p>
        <p className="text-gray-400 text-sm mb-8 max-w-lg mx-auto md:mx-0">
          Trusted by thousands of customers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start max-w-xs mx-auto md:mx-0">
          <button className="bg-[#d4757d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b96267] transition duration-300 shadow-md">
            Get Started
          </button>
          <Link
            to="/services"
            className="border-2 border-[#d4757d] text-[#d4757d] px-8 py-3 rounded-full font-semibold hover:bg-[#d4757d] hover:text-white transition duration-300 shadow-md"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Image Side with Finishing */}
      <motion.div
        className="w-full md:w-1/2 relative flex-shrink-0"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="woman2.jpg"
          alt="Feature"
          className="w-full h-64 sm:h-72 md:h-full object-cover"
          style={{ maxHeight: "480px" }}
        />
        {/* Rose-colored translucent overlay */}
        <div className="absolute inset-0 rounded-3xl bg-[#d4757d]/30 pointer-events-none" />
        {/* Gradient overlay (optional) */}
        <div className="" />
      </motion.div>
    </div>
  );
};

export default Home;
