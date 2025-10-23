import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    );

  return (
    <div className="flex flex-col h-screen text-purple-100">
      {/* Desktop Navbar */}
      <nav className="hidden sm:block">
        <Navbar />
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-gray-400/80 border-b border-gray-500 text-white flex items-center justify-between px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32 sm:w-44 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => navigate("/")}
          />
        </div>

        <button
          onClick={() => setMobileSidebar(true)}
          className="p-2 rounded-md hover:bg-purple-600 transition"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </nav>

      {/* Main Layout Area */}
      <div className="flex flex-1 w-full relative pt-14 sm:pt-0">
        {/* Desktop Sidebar */}
        <div className="hidden sm:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={mobileSidebar}
          onClose={() => setMobileSidebar(false)}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 text-purple-800 bg-transparent">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
