"use client"
import React, { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaRegChartBar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

// Sidebar Component
const Sidebar = () => {
  
  const pahtname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home', icon: <LuHouse /> },
    { href: '/patients', label: 'Patients', icon: <MdOutlinePersonOutline /> },
    { href: '/providers', label: 'Healthcare professionals', icon: <BsPersonCheckFill /> },
   
    { href: '/settings', label: 'Settings', icon: <IoSettingsOutline /> },
  ];

  return (
    <aside className="w-60 bg-white shadow min-h-screen p-4">
      <div className="text-xl font-bold mb-6 ">LAMARE</div>
      <hr />
      <ul className="space-y-4 text-gray-700 mt-4">
        {navLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <a href={href}>
              <span className={`flex items-center gap-2 font-semibold cursor-pointer ${pahtname === href ? 'bg-[#E9EFFC] p-2 rounded-xl' : ''}`}>
                {icon}{label}
              </span>
            </a>
          </li>
        ))}
      </ul>
      
      <div className=" mt-[500px]">
        <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-red-500">
          <IoLogOutOutline />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar