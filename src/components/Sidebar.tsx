"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsPersonCheckFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { LuHouse } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  isSidebarExpanded?: boolean;
  setSidebarExpanded?: (expanded: boolean) => void;
}

// Sidebar Component
const Sidebar = ({ 
  isOpen = false, 
  onToggle, 
  onClose, 
  isSidebarExpanded: externalExpanded,
  setSidebarExpanded: setExternalExpanded 
}: SidebarProps) => {
  const pathname = usePathname();
  const [internalExpanded, setInternalExpanded] = useState(true);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isSidebarExpanded = externalExpanded !== undefined ? externalExpanded : internalExpanded;
  const setSidebarExpanded = setExternalExpanded || setInternalExpanded;
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null); // Ref for the overlay

  const navLinks = [
    { href: "/", label: "Home", icon: <LuHouse /> },
    { href: "/patients", label: "Patients", icon: <MdOutlinePersonOutline /> },
    {
      href: "/providers",
      label: "Healthcare professionals",
      icon: <BsPersonCheckFill />,
    },
    { href: "/settings", label: "Settings", icon: <IoSettingsOutline /> },
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== 'undefined') {
        setIsMediumScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", checkScreenSize);
    }

    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", checkScreenSize);
      }
    };
  }, []);

  // Click outside to close sidebar on mobile and medium devices
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Only close if we're on mobile/medium screens and sidebar is open
      if (
        typeof window !== 'undefined' &&
        window.innerWidth < 1024 &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        onClose
      ) {
        onClose();
      }
    };

    if (isOpen && typeof window !== 'undefined' && window.innerWidth < 1024) {
      // Add a small delay to prevent immediate closure
      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside, true);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside, true);
      };
    }
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open on mobile and medium devices
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen && window.innerWidth < 1024) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  const handleNavClick = () => {
    // Close sidebar on mobile and medium after navigation
    if (typeof window !== 'undefined' && window.innerWidth < 1024 && onClose) {
      onClose();
    }
  };

  // Determine if sidebar should be visible
  const shouldShowSidebar =
    (typeof window !== "undefined" && window.innerWidth >= 1024) || isOpen;

  return (
    <>
      {/* Overlay for mobile screens */}
      {isOpen && typeof window !== "undefined" && window.innerWidth < 1024 && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs bg-opacity-50 z-overlay transition-opacity duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onClose) {
              onClose();
            }
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          bg-white border-r border-gray-200 min-h-screen flex flex-col p-4 z-sidebar
          fixed lg:relative inset-y-0 left-0
          transform transition-all duration-300 ease-in-out
          ${shouldShowSidebar ? "translate-x-0" : "-translate-x-full"}
          ${isSidebarExpanded ? "w-64" : "w-16"} 
          lg:translate-x-0
          shadow-lg lg:shadow-none
        `}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative flex-shrink-0">
              <div className="absolute inset-0 bg-blue-500 rounded-tl-full rounded-br-full"></div>
              <div className="absolute inset-0 bg-green-500 rounded-tr-full rounded-bl-full"></div>
            </div>
            <span
              className={`text-xl font-bold text-gray-900 transition-opacity duration-200 ${
                !isSidebarExpanded && "opacity-0 lg:opacity-0"
              }`}
            >
              LAMARE
            </span>
          </div>

          {/* Close Button for mobile screens only */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onClose) {
                onClose();
              }
            }}
            aria-label="Close sidebar"
          >
            <HiX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <hr className="border-gray-200 mb-4 mt-2 lg:w-[1000px]" />

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-2 text-gray-700">
            {navLinks.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleNavClick}
                    className={`flex items-center rounded-xl transition-all duration-200 group
                      ${
                        !isSidebarExpanded 
                          ? "justify-center p-3" 
                          : "gap-3 px-3 py-3"
                      }
                      ${
                        isActive
                          ? "bg-[#E9EFFC] text-blue-600"
                          : "text-black hover:text-blue-500 hover:bg-[#F0F4FF] "
                      }
                    `}
                    title={!isSidebarExpanded ? label : undefined}
                  >
                    <span className={`text-lg flex-shrink-0 ${
                      !isSidebarExpanded ? "text-xl" : ""
                    }`}>{icon}</span>
                    <span
                      className={`font-semibold transition-all duration-200 ${
                        !isSidebarExpanded
                          ? "opacity-0 w-0 overflow-hidden"
                          : "opacity-100 w-auto"
                      } truncate`}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Section */}
        <div className="pt-4 border-t border-gray-200">
          <button
            className={`flex items-center text-gray-600 hover:text-red-500 rounded-xl hover:bg-red-50 transition-all duration-200 w-full
              ${
                !isSidebarExpanded 
                  ? "justify-center p-3" 
                  : "gap-3 px-3 py-2"
              }
            `}
            aria-label="Logout"
            title={!isSidebarExpanded ? "Logout" : undefined}
          >
            <IoLogOutOutline className={`flex-shrink-0 ${
              !isSidebarExpanded ? "text-xl" : "text-lg"
            }`} />
            <span
              className={`text-sm transition-all duration-200 ${
                !isSidebarExpanded 
                  ? "opacity-0 w-0 overflow-hidden" 
                  : "opacity-100 w-auto"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
