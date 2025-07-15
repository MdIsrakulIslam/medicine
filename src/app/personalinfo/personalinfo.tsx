"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// components/SignupForm.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { IoEyeOutline, IoPersonOutline } from "react-icons/io5";
import { CiCalendar, CiPhone } from "react-icons/ci";
import { MdLocationSearching } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";

function Personalinfo() {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px]  mx-auto mt-10">
      {/* Top image */}
      <div className="relative  h-44 md:h-52">
        <Image
          src="/threedoc.png"
          alt="medical"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Form content */}
      <div className="p-6  space-y-3 absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white w-[300px] -mt-20 rounded-t-3xl rounded-b-xl">

        <div className="flex items-center justify-center px-12 ">
          <div className="flex">
            <div className="flex items-center ">
              <p className="border rounded-full bg-[#225CE4] text-white inline-block w-5 h-5 text-center text-sm ">
                1
              </p>
              <div className="px-2">
              <hr className="  w-20 " />
            </div>
            </div>

            
          </div>

        <div className="flex">
            <div className="flex items-center ">
              <p className="border rounded-full bg-[#DEE9FB] inline-block w-5 h-5 text-center text-sm ">
                2
              </p>
              <div className="px-2">
              <hr className="   w-20 " />
            </div>
            </div>

            
          </div>
          <div>
            <div>
              <p className="border rounded-full bg-[#DEE9FB] inline-block w-5 h-5 text-center text-sm ">
                3
              </p>
            </div>

            
          </div>
        </div>

        <h1 className=" font-bold text-xl text-center mt-5">Personal Information</h1>
        <p className="text-center  text-black text-[14px]">
          Let's get to know you better
        </p>

        <div className="space-y-4 ">
          {/* Email */}
          <div className="mb-4 ">
            <Label htmlFor="email" className="mb-2">
              Full Name
            </Label>
            <div className="relative bg-white rounded-lg">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <IoPersonOutline />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="Enter your name"
                className="pl-10"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password " className="mb-2">
              Date of birth
            </Label>
            <div>
              <div className="relative  bg-white rounded-lg">
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <CiCalendar />
                </span>
                <Input
                  id="password"
                  type="password"
                  placeholder="Selet date"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword" className="mb-2">
              Location
            </Label>
            <div className="relative bg-white rounded-lg">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <MdLocationSearching />
              </span>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Enter your location"
                className="pl-10"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4 ">
            <Label htmlFor="email" className="mb-2">
              Contact Number
            </Label>
            <div className="relative bg-white rounded-lg">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <CiPhone />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="Enter your contact number"
                className="pl-10"
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center space-x-2">
            <Label htmlFor="remember">Gender</Label>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {/* Sign up button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Male
            </Button>

            {/* Google sign in */}
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-[#F5F5F5]"
            >
              Female
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-[#F5F5F5]"
            >
              others
            </Button>
          </div>

          <div className="flex justify-between mt-6 items-center">
            <div>
              <FaArrowLeftLong />
            </div>
            <div>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 bg-[#F5F5F5]"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalinfo;
