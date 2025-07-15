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

function Surgery() {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px]  mx-auto mt-10">
          {/* Top image */}
          <div className="relative  h-44 md:h-52">
            <Image
              src="/twodoc.png"
              alt="medical"
              layout="fill"
              objectFit="cover"
            />
          </div>
    
          {/* Form content */}
          <div className="p-6  space-y-3 absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white w-[300px] -mt-12 rounded-t-3xl rounded-b-xl">
    
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
                  <p className="border rounded-full bg-[#225CE4] text-white inline-block w-5 h-5 text-center text-sm ">
                    2
                  </p>
                  <div className="px-2">
                  <hr className="   w-20 " />
                </div>
                </div>
    
                
              </div>
              <div>
                <div>
                  <p className="border rounded-full bg-[#225CE4] text-white inline-block w-5 h-5 text-center text-sm ">
                    3
                  </p>
                </div>
    
                
              </div>
            </div>
    
            <h1 className=" font-bold text-xl text-center mt-5">Surgery Information</h1>
            <p className="text-center  text-black text-[14px]">
             These will help us to personalize data
            </p>
    
            <div className="space-y-4 ">
              {/* Email */}
              <div className="mb-4 ">
                <Label htmlFor="email" className="mb-2">
                 Surgery type
                </Label>
                <div className="relative bg-white rounded-lg">
               
                  <Input
                    id="email"
                    type="email"
                    placeholder="Select surgery type"
                    
                  />
                </div>
              </div>
    
            
    
              {/* Confirm Password */}
              <div>
                <Label htmlFor="confirmPassword" className="mb-2">
                  Surgery name
                </Label>
                <div className="relative bg-white rounded-lg">
                  
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Write surgery name"
                    
                  />
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center space-x-2">
                <Label htmlFor="remember">Surgery date and time</Label>
              </div>
    
              <div className="grid grid-cols-2 gap-10">
                {/* Sign up button */}
                <Button className="w-full  text-black bg-white">
                  select date
                </Button>
    
                {/* Google sign in */}
                <Button className="w-full  text-black bg-white">
                  select time
                </Button>
    
                
              </div>
    
              {/* Email */}
              <div className="mb-4 ">
                <Label htmlFor="email" className="mb-2">
                  Hospital
                </Label>
                <div className="relative bg-white rounded-lg">
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    <CiPhone />
                  </span>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Write hospital name"
                    className="pl-10"
                  />
                </div>
              </div>
    
              
    
              <div className="flex justify-between mt-6 items-center">
                <div>
                  <FaArrowLeftLong className="text-[#225CE4]" />
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2 text-white bg-[#225CE4]"
                  >
                    Go to home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Surgery