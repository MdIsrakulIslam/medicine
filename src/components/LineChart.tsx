"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
//   defs,
//   linearGradient,
//   stop,
} from "recharts";

interface Props {
  data: any[];
}

export default function CustomAreaChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={430}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="gradientColor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#225CE4" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#225CE4" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        
        <Area
          type="monotone"
          dataKey="completed"
          stroke="#225CE4"
          fill="url(#gradientColor)" // Using the linear gradient fill here
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
