"use client"
import React from 'react'

function Header() {
  // Sample data for dynamic values
  const user = {
    name: "Rashed Khan",
    role: "Admin",
    imageUrl: "path_to_image"  // You can dynamically set this URL based on user data
  };

  return (
    <div className="items-center mb-6 bg-white -mt-4">
      <div className="flex items-center justify-between pb-3">
        <div>
          <h2 className="text-lg font-semibold">Hi {user.name}</h2>
          <p className="text-sm text-gray-500">Welcome back! Here's what’s happening with your Lamare mobile app.</p>
        </div>
        
        <div className="flex items-center gap-4">
        
          {/* Profile Name and Role */}
          <div className="ml-3 ">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500 ml-14">{user.role}</p>
          </div>

            {/* Profile Image */}
          <img
            src={user.imageUrl}
            alt={`${user.name} profile`}
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header
