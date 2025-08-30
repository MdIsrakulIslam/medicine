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
        <div className="bg-red-100 text-red-500 p-3 rounded-lg">
          <FiAlertTriangle size={24} />
        </div>
      );
    }
    if (title.toLowerCase().includes("healthcare")) {
      return (
        <div className="bg-green-100 text-green-600 p-3 rounded-lg">
          <BsPersonCheckFill size={24} />
        </div>
      );
    }
    if (title.toLowerCase().includes("patient")) {
      return (
        <div className="bg-blue-100 text-blue-500 p-3 rounded-lg">
          <MdOutlinePersonOutline size={24} />
        </div>
      );
    }
    return (
      <div className="bg-purple-100 text-purple-500 p-3 rounded-lg">
        <MdOutlinePersonOutline size={24} />
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-center p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{count}</h3>
        <p className={`text-sm font-medium ${color}`}>{change}</p>
      </div>
      
      <div className="ml-4 flex-shrink-0">
        {renderIcon()}
      </div>
    </div>
  );
}
