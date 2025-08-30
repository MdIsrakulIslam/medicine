import { BsPersonCheckFill } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";

interface StatCardProps {
  title: string;
  count: number;
  change: string;
  color: string;
  alertMsg?: string;
}

export default function StatCard({
  title,
  count,
  change,
  color,
  alertMsg,
}: StatCardProps) {
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
      <div className="flex flex-col justify-end items-end">
        {alertMsg ? (
          <h2 className={`text-sm text-red-800 bg-red-100 rounded-lg px-3 -mt-8 mb-2`}>
            {alertMsg ?? ""}
          </h2>
        ) : null}
        <div className="w-fit ml-4 flex-shrink-0">{renderIcon()}</div>
      </div>
    </div>
  );
}
