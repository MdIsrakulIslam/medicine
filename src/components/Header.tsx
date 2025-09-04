"use client";

import { HiMenuAlt3 } from "react-icons/hi";

interface HeaderProps {
  onToggleSidebar?: () => void;
  isSidebarExpanded?: boolean;
}

function Header({ onToggleSidebar, isSidebarExpanded }: HeaderProps) {
  // Sample data for dynamic values
  const user = {
    name: "Rashed Khan",
    role: "Admin",
    imageUrl: "path_to_image", // You can dynamically set this URL based on user data
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle Button - visible on large screens */}
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="hidden lg:flex items-center justify-center p-2 rounded-md hover:bg-blue-100 transition-colors"
              aria-label="Toggle sidebar width"
            >
              <HiMenuAlt3
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 cursor-pointer ${
                  !isSidebarExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          )}
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Hi {user.name}</h2>
            <p className="text-sm text-gray-500">
              Welcome back! Here's what's happening with your Lamare mobile app.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Profile Info */}
          <div className="text-right hidden sm:block">
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-semibold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
