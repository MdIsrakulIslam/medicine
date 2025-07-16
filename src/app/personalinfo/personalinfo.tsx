"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Icons
import { IoPersonOutline, IoEyeOutline } from "react-icons/io5";
import { CiCalendar, CiPhone } from "react-icons/ci";
import { MdLocationSearching } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

const Personalinfo = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    location: "",
    contact: "",
    gender: "",
  });

  return (
    <div className="bg-gray-50 md:bg-white p-4 md:p-20 min-h-screen">
      <div className="md:flex gap-5">
        {/* Left Image (only on large screens) */}
        <div className="md:w-1/2 relative">
          <div className="hidden md:block h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/threedoc.png"
              alt="doctor team"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Small device image */}
          <div className="md:hidden relative h-44 w-[300px] mx-auto">
            <Image
              src="/threedoc.png"
              alt="doctor"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl overflow-hidden w-[300px] mx-auto md:w-full md:mx-0">
              <div className="p-6 space-y-5 md:space-y-6 md:p-8
                              absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white 
                              w-[300px] -mt-20 rounded-t-3xl rounded-b-xl
                              md:static md:w-full md:mt-0 md:bg-white md:rounded-none">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-center px-8 md:px-12 space-x-2 md:space-x-4">
                  {[1, 2, 3].map((step, i) => (
                    <div key={i} className="flex items-center">
                      <p className={`border rounded-full text-white inline-block w-5 h-5 text-center text-sm 
                        ${step === 1 ? "bg-[#225CE4]" : "bg-[#DEE9FB] text-black"}`}>
                        {step}
                      </p>
                      {step !== 3 && <hr className="w-6 md:w-20 border-gray-300 mx-2" />}
                    </div>
                  ))}
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-center mt-5">Personal Information</h1>
                <p className="text-center text-black text-[14px] md:text-base">
                  Let's get to know you better
                </p>

                {/* Full Name */}
                <div className="mb-4">
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <div className="relative bg-white rounded-lg">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <IoPersonOutline />
                    </span>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="pl-10"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                  <Label htmlFor="dob" className="mb-2">Date of Birth</Label>
                  <div className="relative bg-white rounded-lg">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <CiCalendar />
                    </span>
                    <Input
                      id="dob"
                      type="text"
                      placeholder="Select date"
                      className="pl-10"
                      value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <Label htmlFor="location" className="mb-2">Location</Label>
                  <div className="relative bg-white rounded-lg">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <MdLocationSearching />
                    </span>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Enter your location"
                      className="pl-10"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                  <Label htmlFor="contact" className="mb-2">Contact Number</Label>
                  <div className="relative bg-white rounded-lg">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <CiPhone />
                    </span>
                    <Input
                      id="contact"
                      type="text"
                      placeholder="Enter your contact number"
                      className="pl-10"
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="mb-2">
                  <Label htmlFor="gender">Gender</Label>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {["Male", "Female", "Others"].map((gender) => (
                    <Button
                      key={gender}
                      variant={form.gender === gender ? "default" : "outline"}
                      className={`w-full ${form.gender === gender ? "bg-blue-600 text-white" : "bg-[#F5F5F5]"}`}
                      onClick={() => setForm({ ...form, gender })}
                    >
                      {gender}
                    </Button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <div className="text-blue-600 cursor-pointer">
                    <FaArrowLeftLong size={20} />
                  </div>
                  <Button
                    variant="outline"
                    className="bg-[#F5F5F5] flex items-center gap-2"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Personalinfo;
