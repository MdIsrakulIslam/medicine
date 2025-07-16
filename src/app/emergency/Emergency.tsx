"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Icons
import { CiPhone } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

const Emergency = () => {
  const [form, setForm] = useState({
    contactNumber: "",
    relation: ""
  });

  const router = useRouter();

  return (
    <div className=" md:bg-white p-4 md:p-20 min-h-screen">
      <div className="md:flex gap-5">
        {/* Left Side Image (for large screens) */}
        <div className="md:w-1/2 relative">
          <div className="hidden md:block h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/operation.png"
              alt="operation"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Small devices - top image */}
          <div className="md:hidden relative h-44 w-[300px] mx-auto">
            <Image
              src="/operation.png"
              alt="operation"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl overflow-hidden w-[300px] mx-auto md:w-full md:mx-0">
              <div className="p-6 space-y-5 md:space-y-6 md:p-8
                              absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white 
                              w-[300px] -mt-14 rounded-t-3xl rounded-b-xl
                              md:static md:w-full md:mt-0 md:bg-white md:rounded-none">
                
                {/* Step Indicator */}
                <div className="flex items-center justify-center px-8 md:px-12 space-x-2 md:space-x-4">
                  {[1, 2, 3].map((step, i) => (
                    <div key={i} className="flex items-center">
                      <p className={`border rounded-full text-white inline-block w-5 h-5 text-center text-sm
                        ${step <= 2 ? "bg-[#225CE4]" : "bg-[#DEE9FB] text-black"}`}>
                        {step}
                      </p>
                      {step !== 3 && <hr className="w-6 md:w-20 border-gray-300 mx-2" />}
                    </div>
                  ))}
                </div>

                <h1 className="font-bold text-xl md:text-2xl text-center mt-5">Emergency Contact</h1>
                <p className="text-center text-black text-[14px] md:text-base mb-6">
                  Help us keep you safe and connected
                </p>

                {/* Contact Number */}
                <div className="mb-4">
                  <Label htmlFor="contactNumber" className="mb-2">Contact Number</Label>
                  <div className="relative bg-white rounded-lg">
                    <span className="absolute left-3 top-2.5 text-gray-400">
                      <CiPhone />
                    </span>
                    <Input
                      id="contactNumber"
                      type="text"
                      placeholder="Enter your contact number"
                      className="pl-10"
                      value={form.contactNumber}
                      onChange={(e) =>
                        setForm({ ...form, contactNumber: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Relation */}
                <div className="mb-4">
                  <Label htmlFor="relation" className="mb-2">Relation with contact person</Label>
                  <div className="relative bg-white rounded-lg">
                    <Input
                      id="relation"
                      type="text"
                      placeholder="ex. Brother"
                      value={form.relation}
                      onChange={(e) =>
                        setForm({ ...form, relation: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-16">
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

export default Emergency;
