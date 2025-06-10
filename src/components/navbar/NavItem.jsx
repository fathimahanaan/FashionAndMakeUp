import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({ name, path, onClick }) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-sm text-[#d4757d] hover:text-[#b15f90]  ease-in-out duration-500 ${
          isActive ? " text-black  " : ""
        }`
      }
    >
      <p>{name}</p>
    </NavLink>
  );
}
