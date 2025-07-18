// components/ProfileModal.tsx
import { BsPersonCheckFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoCall, IoClose } from "react-icons/io5";
import { MdCalendarToday, MdEmail, MdLocalActivity, MdLocationOn } from "react-icons/md";

interface Provider {
  id: number;
  name: string;
  email: string;
  specialization: string;
  hospital: string;
  lastActive: string;
  phone: string;
  joinDate: string;
  avatar: string;
}

export default function ProfileModal({
  provider,
  onClose,
}: {
  provider: Provider;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg p-6  max-w-md mx-4 shadow-xl w-[800px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Provider Profile</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoClose size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            
            
               <div>
                <GoPerson className=' border bg-[#DBEAFE] inline-block rounded-full text-3xl text-[#2563EB]' />
             </div>
             <div >
                 <h4 className="font-semibold">{provider.name}</h4>
              <p className="text-sm text-gray-600">{provider.email}</p>
             </div>
            
          </div>

          <div className="">
            <div className="flex flex-row space-y-6 gap-5 ">
            <div className="border-t pt-4">
              <h5 className="font-medium mb-3">Contact Information</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  <IoCall size={16} className="" />
                  <span>{provider.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  <MdEmail size={16} className="text-gray-500" />
                  <span>{provider.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  <BsPersonCheckFill size={16} className="text-gray-500" />
                  <span>{provider.specialization}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  <MdLocationOn size={16} className="text-gray-500" />
                  <span>{provider.hospital}</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h5 className="font-medium mb-3">Activity</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
              
                  <span>Join Date: {provider.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#4B5563]">
                  
                  <span>Last Active: {provider.lastActive}</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
