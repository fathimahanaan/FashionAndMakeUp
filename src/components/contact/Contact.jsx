import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eed0d4] via-[#efeeee] to-[#f6c3ca] text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/60 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl">
        {/* Left Side Info */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <img
            src="gold.jpg"
            alt="Contact"
            className="w-4/5 sm:w-3/4 md:w-full mx-auto md:mx-0 mb-8"
          />
          <h2 className="text-3xl font-bold text-[#d4757d] mb-4">
            Let’s connect
          </h2>
          <p className="mb-6 text-lg">
            Have a project in mind or just want to say hello? We’d love to hear
            from you.
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#d4757d]" /> hello@example.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d4757d]" /> +1 234 567 890
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#d4757d]" /> New York, USA
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-lg font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4757d]"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4757d]"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4757d]"
            ></textarea>
          </div>
          <div className="text-center md:text-left">
            <button
              type="submit"
              className="bg-[#d4757d] hover:bg-[#b65c67] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
