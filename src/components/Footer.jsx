import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-gray-800 py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand and Description */}
        <div>
          <h3 className="text-2xl font-extrabold text-[#d4757d] mb-4">
            Your Brand
          </h3>
          <p className="text-sm leading-relaxed">
            Inspiring creativity, connection, and innovation through thoughtful
            design and meaningful experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#d4757d]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#d4757d] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#d4757d] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#d4757d] transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4757d] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#d4757d] transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#d4757d]">
            Contact Us
          </h4>
          <p className="text-sm mb-2">123 Elegant Street, Dream City</p>
          <p className="text-sm mb-2">Email: contact@yourbrand.com</p>
          <p className="text-sm mb-4">Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 text-[#d4757d]">
            <a href="#">
              <i className="fab fa-facebook text-xl hover:scale-110 transition"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-xl hover:scale-110 transition"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-xl hover:scale-110 transition"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm text-gray-600">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
