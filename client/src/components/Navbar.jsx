import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div
      className="fixed top-0 z-20 w-full
                 bg-neutral-400/60 backdrop-blur-2xl border-b border-neutral-400
                 shadow-lg flex justify-between items-center
                 py-4 px-4 sm:px-20 xl:px-32
                 transition-all duration-300"
    >
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-32 sm:w-44 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
        onClick={() => navigate('/')}
      />

      {/* Right Side */}
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <button
          onClick={openSignIn}
          className="group flex items-center gap-2 rounded-full
                     bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-gray-100
                     border border-gray-700 px-8 py-3 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out text-sm max-sm:text-xs font-medium shadow-md"
        >
          Get Started
          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
