import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import NavItems from "../../utils/NavItems";
import { Link } from "react-router-dom";

export default function MobileMenu({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isClosing, onClose]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full
        bg-gradient-to-b from-[#eed0d4] via-[#efeeee] to-[#f6c3ca]
        z-50 flex flex-col px-8 pt-16 pb-12 text-2xl
        transition-all duration-300 ease-in-out
        ${
          isClosing
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        aria-label="Close menu"
        className="self-end mb-8 text-[#d4757d] hover:text-[#b15f90] text-3xl font-bold focus:outline-none"
      >
        &times;
      </button>

      {/* Nav Links */}
      <nav className="flex flex-col space-y-6 flex-grow">
        {NavItems.map(({ path, name }) => (
          <NavItem
            key={path}
            path={path}
            name={name}
            onClick={handleClose}
            className="w-full px-6 py-4 rounded-lg text-center hover:bg-[#d4757d]/20 transition"
          />
        ))}

        <Link
          to="/contact"
          onClick={handleClose}
          className="mt-auto bg-[#d4757d] text-white font-semibold rounded-lg px-6 py-4 text-center hover:bg-pink-500 transition"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
