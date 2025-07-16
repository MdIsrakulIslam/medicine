"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { FaArrowLeftLong } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";
import { GiHeartOrgan } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Surgery = () => {
  const [form, setForm] = useState({
    type: "",
    name: "",
    date: "",
    time: "",
    hospital: "",
  });

  return (
    <div className=" md:bg-white p-4 md:p-20 ">
      

        <div className="md:flex gap-5 ">
        {/* Left Side Image for large devices */}
        <div className="md:w-1/2 relative">
          <div className="hidden md:block h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/twodoc.png"
              alt="medical"
              layout="fill"
              objectFit=""
              className="rounded-2xl"
            />
          </div>

          {/* Small device image */}
          <div className="md:hidden relative h-44 w-[300px] mx-auto">
            <Image
              src="/twodoc.png"
              alt="medical"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Form Section */}
        
          <div className="md:w-1/2 flex items-center justify-center relative">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl overflow-hidden w-[300px] mx-auto md:w-full md:mx-0">
              <div className="p-6 space-y-5 md:space-y-6 md:p-8
                              absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white 
                              w-[300px] -mt-12 rounded-t-3xl rounded-b-xl
                              md:static md:w-full md:mt-0 md:bg-white md:rounded-none">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-center px-8 md:px-12 space-x-2 md:space-x-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <p className="border rounded-full text-white inline-block w-5 h-5 text-center text-sm bg-[#225CE4]">
                        {step}
                      </p>
                      {step !== 3 && <hr className="w-6 md:w-20 border-gray-300 mx-2" />}
                    </div>
                  ))}
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-center mt-5">Surgery Information</h1>
                <p className="text-center text-black text-[14px] md:text-base">
                  These will help us to personalize data
                </p>

                <div className="space-y-4">
                  {/* Surgery Type */}
                  <div className="mb-4">
                    <Label htmlFor="surgeryType" className="mb-2">Surgery Type</Label>
                    <div className="relative bg-white rounded-lg">
                        <span className="absolute left-3 top-2.5 text-gray-400">
                        <GiHeartOrgan />
                      </span>
                      <Input
                        id="surgeryType"
                        type="text"
                        placeholder="     Select surgery type"
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}/>

                        <span className="absolute left-89 top-2.5 text-gray-400">
                        <IoIosArrowDown />
                      </span>
                    </div>
                  </div>

                  {/* Surgery Name */}
                  <div>
                    <Label htmlFor="surgeryName" className="mb-2">Surgery Name</Label>
                    <div className="relative bg-white rounded-lg">
                      <Input
                        id="surgeryName"
                        type="text"
                        placeholder="Write surgery name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center space-x-2">
                    <Label>Surgery Date and Time</Label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="w-full text-[#8C8C8C] bg-white border"
                      onClick={() => alert("Pick date")}
                    >
                      <SlCalender />
                      Select Date
                    </Button>
                    <Button
                      className="w-full text-[#8C8C8C] bg-white border"
                      onClick={() => alert("Pick time")}
                    >
                      <IoTimeOutline />
                      Select Time
                    </Button>
                  </div>

                  {/* Hospital */}
                  <div className="mb-4">
                    <Label htmlFor="hospital" className="mb-2">Hospital</Label>
                    <div className="relative bg-white rounded-lg">
                      <span className="absolute left-3 top-2.5 text-gray-400">
                        <LiaHospitalAltSolid />
                      </span>
                      <Input
                        id="hospital"
                        type="text"
                        placeholder="Write hospital name"
                        className="pl-10"
                        value={form.hospital}
                        onChange={(e) => setForm({ ...form, hospital: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-[#225CE4] cursor-pointer">
                      <FaArrowLeftLong size={20} />
                    </div>
                    <Button
                      variant="outline"
                      className=" flex items-center gap-2 text-white bg-[#225CE4]"
                    >
                      Go to home
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

       
      

     

      </div>









       
      
    </div>
  );
};

export default Surgery;
