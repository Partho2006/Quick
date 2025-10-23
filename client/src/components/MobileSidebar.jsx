import React from "react";
import { Link, NavLink } from "react-router-dom";
import { House, SquarePen, Hash, Image, Eraser, Scissors, FileText, Users, X, User, LogOut } from "lucide-react";
import { assets } from "../assets/assets";
import { useUser, useClerk } from "@clerk/clerk-react";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "AI Article Writer", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Title Generator", Icon: Hash },
  { to: "/ai/generate-images", label: "AI Image Generation", Icon: Image },
  { to: "/ai/remove-background", label: "Background Removal", Icon: Eraser },
  { to: "/ai/remove-object", label: "Object Removal", Icon: Scissors },
  { to: "/ai/review-resume", label: "Resume Reviewer", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40 sm:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full backdrop-blur-xl bg-white/80 shadow-lg border-r border-gray-200 text-gray-800 flex flex-col transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-black/5 p-4 border-b border-gray-200">
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer hover:scale-105 transition-transform duration-300" />
          </Link>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-300 transition">
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <h3 className="uppercase text-sm text-gray-500 mb-3 tracking-wide">AI Tools</h3>
          <div className="flex flex-col gap-2">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/ai"}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-purple-300 to-indigo-300 text-gray-900 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  } transition-all duration-300`
                }
              >
                <Icon className="w-5 h-5 text-gray-600" />
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Footer */}
        {user && (
          <div className="border-t border-gray-200 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={user.imageUrl} alt={user.fullName} className="w-10 h-10 rounded-full border border-gray-300 shadow-sm" />
              <p className="text-sm font-medium text-gray-700">{user.fullName}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <button onClick={openUserProfile} className="flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 transition">
                <User className="w-4 h-4" /> Profile
              </button>
              <button onClick={signOut} className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileSidebar;
