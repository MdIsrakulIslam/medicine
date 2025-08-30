"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); // State to track if the component is mounted

  // Check screen size and manage sidebar state
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // Auto-open sidebar on desktop, auto-close on mobile
      if (!mobile) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Set mounted to true after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the layout on the client side
  if (!mounted) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebarExpanded = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar} 
        onClose={closeSidebar}
        isSidebarExpanded={isSidebarExpanded}
        setSidebarExpanded={setIsSidebarExpanded}
      />

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarOpen && !isMobile ? 'lg:ml-0' : 'ml-0'
      }`}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
            <button 
              className="p-2 rounded-md hover:bg-blue-100 transition-colors"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <FiMenu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
        
        {/* Header */}
        <Header 
          onToggleSidebar={toggleSidebarExpanded}
          isSidebarExpanded={isSidebarExpanded}
        />
        
        {/* Main content area */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
