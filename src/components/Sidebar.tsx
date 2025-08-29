"use client";
import React, { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

// Sidebar Component
const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarExpanded, setSidebarExpanded] = useState(true); // Manage sidebar expansion state

  const navLinks = [
    { href: '/', label: 'Home', icon: <LuHouse /> },
    { href: '/patients', label: 'Patients', icon: <MdOutlinePersonOutline /> },
    { href: '/providers', label: 'Healthcare professionals', icon: <BsPersonCheckFill /> },
    { href: '/settings', label: 'Settings', icon: <IoSettingsOutline /> },
  ];

  return (
    <aside className={`bg-white border min-h-screen flex flex-col p-4 
      ${isSidebarExpanded ? 'w-64' : 'w-16'} transition-all`}>
      <div className="text-xl font-bold mb-6 flex justify-between items-center">
        {/* Logo and Toggle Button for Mobile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-blue-500 rounded-tl-full rounded-br-full"></div>
            <div className="absolute inset-0 bg-green-500 rounded-tr-full rounded-bl-full"></div>
          </div>
          <span className={`text-2xl font-bold text-gray-900 ${!isSidebarExpanded && 'hidden'}`}>LAMARE</span>
        </div>
        <button 
          className="text-gray-600 lg:hidden"
          onClick={() => setSidebarExpanded(!isSidebarExpanded)} 
        >
          {/* Hamburger Icon for Mobile */}
          <span className="material-icons">menu</span>
        </button>
      </div>
      <hr />
      <ul className="flex-1 space-y-4 text-gray-700 mt-4">
        {navLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <a href={href}>
              <span
                className={`flex items-center gap-2 font-semibold px-2 py-2 cursor-pointer  whitespace-nowrap
                  ${pathname === href ? 'bg-[#E9EFFC] text-blue-600' : 'text-black'} 
                  hover:text-blue-500 hover:bg-[#F0F4FF] rounded-xl transition-colors`}
              >
                {icon}
                <span className={`${!isSidebarExpanded && 'hidden'} sm:block`}>{label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Logout Section */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-red-500">
          <IoLogOutOutline />
          <span className={`${!isSidebarExpanded && 'hidden'} text-sm`}>Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
