"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Icons
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  return (
    <div className="bg-gray-50 md:bg-white p-4 md:p-20 min-h-screen">
      <div className="md:flex gap-5">
        {/* Left Side Image (Large Devices) */}
        <div className="md:w-1/2 relative">
          <div className="hidden md:block h-full relative rounded-2xl overflow-hidden">
            <Image
              src="/mri.jpg"
              alt="medical"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          {/* Top Image (Small Devices) */}
          <div className="md:hidden relative h-44 w-[300px] mx-auto">
            <Image
              src="/mri.jpg"
              alt="medical"
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
              {/* Form Content */}
              <div className="p-6 space-y-5 md:space-y-6 md:p-8
                              absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white 
                              w-[300px] -mt-18 rounded-t-3xl rounded-b-xl
                              md:static md:w-full md:mt-0 md:bg-white md:rounded-none">

                <h1 className="font-bold text-xl md:text-2xl text-center">Welcome</h1>
                <p className="text-center text-gray-600 text-[14px] md:text-base">
                  Sign in to enjoy the best Medical experience
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="mb-4">
                    <Label htmlFor="email" className="mb-2">Email</Label>
                    <div className="relative bg-white rounded-lg">
                      <span className="absolute left-3 top-2.5 text-gray-400">
                        <FiMail />
                      </span>
                      <Input
                        id="email"
                        type="email"
                        placeholder="yourmail@gmail.com"
                        className="pl-10"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="password" className="mb-2">Password</Label>
                    <div className="relative bg-white rounded-lg">
                      <div className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                        <IoEyeOutline />
                      </div>
                      <span className="absolute left-3 top-2.5 text-gray-400">
                        <FiLock />
                      </span>
                      <Input
                        id="password"
                        type="password"
                        placeholder=".........."
                        className="pl-10"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Remember me & Forget password */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <p className="text-[12px] text-[#225CE4] cursor-pointer">Forget password?</p>
                  </div>

                  {/* Login Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-28">
                    Log in
                  </Button>

                  {/* Google Sign-In */}
                  {/* <Button variant="outline" className="w-full bg-[#F5F5F5] flex items-center gap-2 ">
                    <FaGoogle /> Google sign in
                  </Button> */}

                  {/* Sign up link */}
                  <p className="text-center text-sm">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-600 font-medium">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Login;
