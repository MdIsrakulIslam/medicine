"use client"

import { MdOutlinePersonOutline } from "react-icons/md";

interface Props {
  title: string;
  count: number;
  change: string;
  color: string;
}

export default function StatCard({ title, count, change, color }: Props) {
  return (
    <div  className="">
      <div className="bg-white rounded-xl shadow p-4 ">
         <div className="text-sm text-gray-500">{title}</div>
        <div className="text-xl font-bold">{count}</div>
         <div className={`text-sm mt-1 ${color}`}>{change}</div>
        
      </div>

      
    </div>
  );
}
