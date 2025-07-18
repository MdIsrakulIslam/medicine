'use client';

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { GoPerson } from "react-icons/go";

export default function SettingsPage() {
  const [adminName, setAdminName] = useState("Rhashed khan");
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 ">
       <  Header></  Header>
        {/* <div className="flex justify-between items-center mb-8 -mt-3.5  ">
          <div>
            <h1 className="text-xl font-bold">Hi Rashed Khan</h1>
            <p className="text-gray-600 text-sm pb-3 ">Welcome back! Here's what’s happening with your Lamare mobile app.</p>
             <hr/>
          </div>
           
        </div> */}
      

        {/* Settings Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#f9fafb] p-6">
          {/* Left Side - Personal Info */}
          <div className="col-span-2 bg-[#f9fafb] p-6 ">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>

            <div className="border p-4 rounded-lg">
              <h3 className="text-md font-medium mb-2">Personal Information</h3>
              <p className="mb-8">Update your Personal Information</p>

              <div className="flex items-center mb-4">
                  <div>
                    <GoPerson className=' border bg-[#DBEAFE] inline-block rounded-full text-3xl text-[#2563EB]' />
                 </div>
                <div className="ml-4 text-sm text-gray-600">
                    <p className="text-black font-bold">Image</p>
                  JPG, 2MB max. Recommended: 200x200px
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admin name
                  </label>
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              
            </div>
          </div>

          {/* Right Side - Change Password */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-md font-medium mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <button className="p-2 bg-[#225CE4] text-white py-2 rounded hover:bg-blue-700">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
