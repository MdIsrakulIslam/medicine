"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { FaPen } from "react-icons/fa"; // Importing pencil edit icon

export default function SettingsPage() {
  const [adminName, setAdminName] = useState("Rhashed khan");
  const [email, setEmail] = useState("your-email@example.com");
  const [isEditingAdminName, setIsEditingAdminName] = useState(false); // Edit toggle for admin name
  const [isEditingEmail, setIsEditingEmail] = useState(false); // Edit toggle for email
  const [pricingPlans, setPricingPlans] = useState([
    { planName: "Monthly Plan", price: "$10", billing: "Monthly", status: "active", updated: "2024-01-15" },
    { planName: "Annually Plan", price: "$100", billing: "Yearly", status: "active", updated: "2024-01-20" },
  ]);

  const toggleAdminNameEdit = () => setIsEditingAdminName(!isEditingAdminName);
  const toggleEmailEdit = () => setIsEditingEmail(!isEditingEmail);

  const handleSaveAdminName = () => {
    // Logic for saving admin name, e.g., API call
    setIsEditingAdminName(false);
  };

  const handleSaveEmail = () => {
    // Logic for saving email, e.g., API call
    setIsEditingEmail(false);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col transition-all duration-300 ml-0">
        <div className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="w-10" />
        </div>

        <main className="flex-1 p-6 ml-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            <div className="col-span-2 p-6 rounded-lg shadow bg-[#f9fafb]">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <div className="border p-4 rounded-lg bg-white mb-5">
                <h3 className="text-md font-medium mb-2">Personal Information</h3>
                <p className="mb-8">Update your Personal Information</p>
                <div className="flex items-center mb-4">
                  <div>
                    <GoPerson className="border bg-[#DBEAFE] inline-block rounded-full text-3xl text-[#2563EB]" />
                  </div>
                  <div className="ml-4 text-sm text-gray-600">
                    <p className="text-black font-bold">Image</p>
                    JPG, 2MB max. Recommended: 200x200px
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Admin Name Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Admin name</label>
                    {isEditingAdminName ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={adminName}
                          onChange={(e) => setAdminName(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                        <button onClick={handleSaveAdminName} className="ml-2 bg-blue-500 text-white p-2 rounded">
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <p className="text-sm">{adminName}</p>
                        <button onClick={toggleAdminNameEdit} className="text-blue-500 flex items-center">
                          <FaPen className="mr-1" /> Edit
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Email Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditingEmail ? (
                      <div className="flex items-center">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          placeholder="Your Email"
                        />
                        <button onClick={handleSaveEmail} className="ml-2 bg-blue-500 text-white p-2 rounded">
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center">
                        <p className="text-sm">{email}</p>
                        <button onClick={toggleEmailEdit} className="text-blue-500 flex items-center">
                          <FaPen className="mr-1" /> Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Pricing Plans Section */}
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-md font-medium mb-4">Pricing Plans</h3>
                <p className="text-sm text-gray-600 mb-4">Manage your pricing tiers and features.</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-sm font-medium text-left">Plan Name</th>
                        <th className="px-4 py-2 text-sm font-medium text-left">Price</th>
                        <th className="px-4 py-2 text-sm font-medium text-left">Billing</th>
                        <th className="px-4 py-2 text-sm font-medium text-left">Status</th>
                        <th className="px-4 py-2 text-sm font-medium text-left">Updated</th>
                        <th className="px-4 py-2 text-sm font-medium text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingPlans.map((plan, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 text-sm">{plan.planName}</td>
                          <td className="px-4 py-2 text-sm">{plan.price}</td>
                          <td className="px-4 py-2 text-sm">{plan.billing}</td>
                          <td className="px-4 py-2 text-sm">
                            <span className={plan.status === "active" ? "text-green-500" : "text-red-500"}>
                              {plan.status}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm">{plan.updated}</td>
                          <td className="px-4 py-2 text-sm">
                            <button className="text-blue-500 flex items-center">
                              <FaPen className="mr-1" /> Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Side - Change Password */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-md font-medium mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                  <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                  <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                  <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <button className="p-2 bg-[#225CE4] text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
