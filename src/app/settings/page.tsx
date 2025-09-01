"use client"

import { useState } from "react"
import { GoPerson } from "react-icons/go"
import { IoEye, IoEyeOff } from "react-icons/io5"
import { FiEdit3, FiCheck, FiX } from "react-icons/fi"
import DashboardLayout from "../../components/dashboard-layout"

export default function SettingsPage() {
  const [adminName, setAdminName] = useState("Rhashed khan")
  const [email, setEmail] = useState("admin@lamare.com")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const [tempAdminName, setTempAdminName] = useState(adminName)
  const [tempEmail, setTempEmail] = useState(email)

  const [pricingPlans, setPricingPlans] = useState([
    {
      id: 1,
      name: "Monthly Plan",
      price: "$10",
      billing: "Monthly",
      status: "active",
      updated: "2024-01-15",
    },
    {
      id: 2,
      name: "Annually Plan",
      price: "$100",
      billing: "Yearly",
      status: "active",
      updated: "2024-01-20",
    },
  ])

  const [editingPriceId, setEditingPriceId] = useState(null)
  const [tempPrice, setTempPrice] = useState("")

  const handlePersonalInfoSave = () => {
    setAdminName(tempAdminName)
    setEmail(tempEmail)
    setIsEditingPersonalInfo(false)
    console.log("Saving personal info:", { adminName: tempAdminName, email: tempEmail })
  }

  const handleCancelEdit = () => {
    setTempAdminName(adminName)
    setTempEmail(email)
    setIsEditingPersonalInfo(false)
  }

  const handlePriceEdit = (index:any, currentPrice:any) => {
    setEditingPriceId(index)
    setTempPrice(currentPrice)
  }

  const handlePriceSave = (index:any) => {
    const updatedPlans = [...pricingPlans]
    updatedPlans[index].price = tempPrice
    setPricingPlans(updatedPlans)
    setEditingPriceId(null)
    setTempPrice("")
  }

  const handlePriceCancel = () => {
    setEditingPriceId(null)
    setTempPrice("")
  }

  const handleStatusToggle = (index:any) => {
    const updatedPlans = [...pricingPlans]
    updatedPlans[index].status = updatedPlans[index].status === "active" ? "inactive" : "active"
    setPricingPlans(updatedPlans)
  }

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!")
      return
    }
    // Handle password change logic here
    console.log("Changing password")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 md:p-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Personal Info and Pricing Plans */}
          <div className="xl:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                {!isEditingPersonalInfo ? (
                  <button
                    onClick={() => setIsEditingPersonalInfo(true)}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <FiEdit3 className="w-4 h-4" />
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handlePersonalInfoSave}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-green-600 hover:text-green-800 border border-green-300 rounded-md hover:bg-green-50 transition-colors cursor-pointer"
                    >
                      <FiCheck className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-300 rounded-md hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <FiX className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <p className="mb-6 text-[#71717A] text-sm">Update your Personal Information</p>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <GoPerson className="text-3xl text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Profile Image</p>
                    <p className="text-sm text-gray-500">JPG or PNG, max 2MB. Recommended: 200x200px</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Admin Name</label>
                  <input
                    type="text"
                    value={isEditingPersonalInfo ? tempAdminName : adminName}
                    onChange={(e) => setTempAdminName(e.target.value)}
                    disabled={!isEditingPersonalInfo}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      !isEditingPersonalInfo ? "bg-gray-50 text-gray-500" : ""
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={isEditingPersonalInfo ? tempEmail : email}
                    onChange={(e) => setTempEmail(e.target.value)}
                    disabled={!isEditingPersonalInfo}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      !isEditingPersonalInfo ? "bg-gray-50 text-gray-500" : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Plans</h3>
              <p className="text-gray-600 mb-6">Manage your pricing tiers and features</p>

              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Plan Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Billing
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                        Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pricingPlans.map((plan, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.name}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                          <div className="flex items-center gap-2">
                            {editingPriceId === index ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="text"
                                  value={tempPrice}
                                  onChange={(e) => setTempPrice(e.target.value)}
                                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <button
                                  onClick={() => handlePriceSave(index)}
                                  className="text-green-600 hover:text-green-800 cursor-pointer" 
                                >
                                  <FiCheck className="w-4 h-4" />
                                </button>
                                <button onClick={handlePriceCancel} className="text-red-600 hover:text-red-800 cursor-pointer">
                                  <FiX className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <span>{plan.price}</span>
                                <button
                                  onClick={() => handlePriceEdit(index, plan.price)}
                                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                >
                                  <FiEdit3 className="w-4 h-4" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{plan.billing}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                plan.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                              }`}
                            >
                              {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                            </span>
                            <button
                              onClick={() => handleStatusToggle(index)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer ${
                                plan.status === "active" ? "bg-blue-600" : "bg-gray-200"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  plan.status === "active" ? "translate-x-6" : "translate-x-1"
                                }`}
                              />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm ">{plan.updated}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Change Password */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? (
                      <IoEyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <IoEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? (
                      <IoEyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <IoEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <IoEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={handlePasswordChange}
                className=" bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}