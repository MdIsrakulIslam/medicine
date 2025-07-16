"use client";

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';

const Signup = () => {
    const [user, setuser]=useState({
        email:"",
        passworrd:"",
        confirmPassword:""
    })

     const [buttonDisabled, setButoonDisabled]=useState(false)
     const [loading, setloading]=useState(false)

     const onSignup= async() =>{
        try{
            setloading(true)
            setButoonDisabled(true)
            // simulate on API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setloading(false)
            setButoonDisabled(false)
            alert("signup successful")
            // router.push("/login")
        }catch(error){
            console.error("Signup failed:", error);
            setloading(false)
            setButoonDisabled(false)
            alert("signup failed")
        }
     }

     useEffect(() => {
        if (user.email.length > 0 && user.passworrd.length > 0 && user.confirmPassword.length > 0) {
            setButoonDisabled(false)
        } else {
            setButoonDisabled(true)
        }
    },[user])

  return (
    <div className=" bg-gray-50 md:bg-white p-4 md:p-20">
      <div className="md:flex gap-5">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          {/* Medium and Large device - side image */}
          <div className="hidden md:block  ">
            <Image
              src="/eye.png"
              alt="medical"
              layout="fill"
              objectFit="cover"
              className='border rounded-2xl'
            />
          </div>

          {/* Small device - top image */}
          <div className="md:hidden relative h-44 w-[300px]">
            <Image
              src="/eye.png"
              alt="medical"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 flex items-center justify-center ">
          <div className="w-full max-w-md">
            <div className="bg-white  rounded-xl overflow-hidden 
                          w-[300px] mx-auto  md:w-full md:mt-0 md:mx-0">
              
              {/* Form content */}
              <div className="p-6 space-y-5 md:space-y-6 md:p-8
                            absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white 
                            w-[300px] -mt-13 rounded-t-3xl rounded-b-xl items-center
                            md:static md:w-full md:mt-0 md:bg-white md:rounded-none">
                
                <h1 className="font-bold text-xl md:text-2xl text-center">Welcome</h1>
                <p className="text-center text-gray-600 text-[14px] md:text-base">
                  Sign in to enjoy the best Medical experience
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className='mb-4'>
                    <Label htmlFor="email" className='mb-2'>Email</Label>
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
                        onChange={(e) => setuser({...user, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="password" className='mb-2'>Password</Label>
                    <div>
                      <div className="relative bg-white rounded-lg">
                        <div className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'>
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
                          value={user.passworrd}
                          onChange={(e) => setuser({...user, passworrd: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <Label htmlFor="confirmPassword" className='mb-2'>Confirm Password</Label>
                    <div className="relative bg-white rounded-lg">
                      <div className='absolute right-3 top-2.5 text-gray-400 cursor-pointer'>
                        <IoEyeOutline />
                      </div>
                      <span className="absolute left-3 top-2.5 text-gray-400">
                        <FiLock />
                      </span>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder=".........."
                        className="pl-10"
                        value={user.confirmPassword}
                        onChange={(e) => setuser({...user, confirmPassword: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Remember me */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>

                  {/* Sign up button */}
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={onSignup}
                    disabled={buttonDisabled}
                  >
                    {loading ? "Signing up..." : "Sign up"}
                  </Button>

                  {/* Google sign in */}
                  <Button variant="outline" className="w-full flex items-center gap-2 bg-[#F5F5F5]">
                    <FaGoogle /> Google sign in
                  </Button>

                  {/* Sign in link */}
                  <p className="text-center text-sm">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 font-medium">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup