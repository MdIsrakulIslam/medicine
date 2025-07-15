"use client";
import React, { useEffect, useState } from 'react'
import { useRouter} from  'next/navigation'
import Image from 'next/image';


// components/SignupForm.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";



import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { IoEyeOutline } from 'react-icons/io5';

const Signup = () => {
    const router = useRouter()
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
            router.push("/login")
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

     <div className="bg-white shadow-lg rounded-xl overflow-hidden w-[300px]  mx-auto mt-10">
      {/* Top image */}
      <div className="relative  h-44 md:h-52">
        <Image
          src="/eye.png"
          alt="medical"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Form content */}
      <div className="p-6  space-y-5 absolute mx-auto bg-gradient-to-b from-[#F0F5FF] to-white w-[300px] -mt-13 rounded-t-3xl rounded-b-xl">
        <h1 className=" font-bold text-xl text-center">Welcome</h1>
        <p className="text-center  text-gray-600 text-[14px]">
          Sign in to enjoy the best Medical experience
        </p>

        <div className="space-y-4 ">
          {/* Email */}
          <div className='mb-4 '>
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
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password " className='mb-2' >Password</Label>
           <div>
            
             <div className="relative  bg-white rounded-lg">
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
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          {/* Sign up button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Sign up
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
  )
}

export default Signup