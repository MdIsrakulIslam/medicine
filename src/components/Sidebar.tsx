"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsPersonCheckFill } from 'react-icons/bs'
import { FaRegChartBar } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuHouse } from 'react-icons/lu'
import { MdOutlinePersonOutline } from 'react-icons/md'

function Sidebar() {
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/', label: 'Home', icon: <LuHouse /> },
    { href: '/patients', label: 'Patients', icon: <MdOutlinePersonOutline /> },
    { href: '/providers', label: 'Healthcare professionals', icon: <BsPersonCheckFill /> },
    { href: '/reports', label: 'Reports & Analytics', icon: <FaRegChartBar /> },
    { href: '/profile', label: 'Profile Settings', icon: <IoSettingsOutline /> },
  ]

  return (
    <aside className="w-60 bg-white shadow min-h-screen p-4">
      <div className="text-xl font-bold mb-6">LAMARE</div>
      <hr />
      <ul className="space-y-4 text-gray-700 mt-4">
        {navLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <Link href={href}>
              <span className={`flex items-center gap-2 font-semibold cursor-pointer ${pathname === href ? 'text-blue-600' : ''}`}>
                {icon}{label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar