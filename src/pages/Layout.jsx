import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-gradient-to-r from-[#eed0d4] via-[#efeeee] to-[#f6c3ca] pt-10">
      <Scroll />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
