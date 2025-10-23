import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import {
  House,
  SquarePen,
  Hash,
  Image,
  Eraser,
  Scissors,
  FileText,
  Users,
  LogOut,
  User,
} from "lucide-react";

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

const Sidebar = ({ sidebar, setsidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) return null;

  return (
    <div
      className={`sticky top-0 w-64 backdrop-blur-xl bg-white/60 border-r border-gray-300 text-gray-800 flex flex-col justify-between max-sm:absolute bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out mt-0 min-h-screen`}
    >
      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto mt-0 sm:mt-15">
        <h3 className="uppercase text-md text-gray-900 mb-3 tracking-wider">
          AI Tools
        </h3>
        <div className="flex flex-col gap-2">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setsidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-2 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-indigo-200 hover:text-gray-900"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Minimal Profile Footer */}
      <div className="border-t border-gray-300 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img
            src={user.imageUrl}
            alt={user.fullName}
            className="w-10 h-10 rounded-full border border-gray-200 shadow-sm"
          />
          <p className="text-sm font-medium text-gray-800">{user.fullName}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <button
            onClick={openUserProfile}
            className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 transition"
          >
            <User className="w-4 h-4" /> Profile
          </button>
          <button
            onClick={signOut}
            className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
