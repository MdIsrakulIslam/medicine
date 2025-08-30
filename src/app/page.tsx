"use client";

import { FiCalendar } from "react-icons/fi";
import { useSelector } from "react-redux";
import JourneyLineChart from "../components/LineChart";
import Notifications from "../components/Notification";
import StatCard from "../components/StatCard";
import DashboardLayout from "../components/dashboard-layout";
import { RootState } from "./redux/store";

export default function Dashboard() {
  const { users, patients, providers, flaggedCases, chartData, notifications } =
    useSelector((state: RootState) => state.stats);

  const stats = [
    {
      title: "Total User",
      count: users,
      change: "+12% from last month",
      color: "text-green-500",
    },
    {
      title: "Total Patient",
      count: patients,
      change: "+8% from last month",
      color: "text-green-500",
    },
    {
      title: "Total Healthcare Provider",
      count: providers,
      change: "+15% from last month",
      color: "text-green-500",
    },
    {
      title: "Total Flagged Cases",
      count: flaggedCases,
      change: "+22% from last month",
      color: "text-red-500",
      alertMsg: "Requires Attention",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">
            Dashboard Overview
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-black border border-gray-300 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white flex items-center gap-2 transition-colors cursor-pointer">
              <FiCalendar className="text-gray-600 hover:text-white transition-colors" />
              <span className="text-sm font-medium">January 2025</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat}  />
          ))}
        </div>

        {/* Charts and Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">
                How many patients are completing their journey in LAMARE APP
              </h2>
              <JourneyLineChart data={chartData} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <Notifications logs={notifications} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
