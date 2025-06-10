import React, { useState } from "react";
import NavItem from "./NavItem";
import NavItems from "../../utils/NavItems";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#eed0d4] via-[#efeeee] to-[#f6c3ca] p-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-xl">
          <img src="" alt="MyBrand" className="w-auto h-10" />
        </div>

        {/* Desktop Nav: Only visible on md+ */}
        <div className="hidden md:flex space-x-8 text-2xl">
          {NavItems.map(({ path, name }) => (
            <NavItem key={path} path={path} name={name} />
          ))}
        </div>

        {/* Desktop Contact button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-white text-[#d4757d] text-xl font-semibold border border-[#f6c3ca]-500 rounded-full px-4 py-2 hover:bg-pink-50 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle: Only visible on small screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
