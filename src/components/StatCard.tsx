import React from "react";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdReportGmailerrorred } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";

interface StatCardProps {
  title: string;
  count: number;
  change: string;
  color: string;
}

export default function StatCard({ title, count, change, color }: StatCardProps) {
  const renderIcon = () => {
    if (title.toLowerCase().includes("flagged")) {
      return (
      <div>
        
          <div className="bg-red-100 text-red-500 p-2 rounded">
          
          <FiAlertTriangle size={24} />
        </div>
      </div>
      );
    }
    if (title.toLowerCase().includes("healthcare")) {
      return (
        <div className="bg-green-100 text-green-600 p-2 rounded ">
          <BsPersonCheckFill size={24} />
        </div>
      );
    }
    if (title.toLowerCase().includes("patient")) {
      return (
        <div className="bg-blue-100 text-blue-500 p-2 rounded">
          <MdOutlinePersonOutline size={24} />
        </div>
      );
    }
    return (
      <div className="bg-blue-100 text-blue-500 p-2 rounded">
        <MdOutlinePersonOutline size={24} />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow  flex justify-between items-center p-10">
      <div>
      
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{count}</h3>
        <p className={`text-sm ${color}`}>{change}</p>
      </div>
      
      {renderIcon()}
    </div>
  );
}
