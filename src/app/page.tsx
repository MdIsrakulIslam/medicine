"use client";

import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import StatCard from "../components/StatCard";
import JourneyLineChart from "../components/LineChart";
import Notifications from "../components/Notification";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

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
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 ">
        <Header />
        <div className="bg-slate-50 p-5">
          <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          <div className="text-right">
            <p className="text-sm font-medium">January 2025</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-xl shadow mb-6">
              <h2 className="text-lg font-semibold mb-2">
                How many patient are completing their journey in LAMARE app!
              </h2>
              <JourneyLineChart data={chartData} />
            </div>
          </div>

          <div className="md:col-span-1">
            <Notifications logs={notifications} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
