"use client";
import { Stethoscope, User } from "lucide-react";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const ehrData = [
  {
    name: "Total",
    count: 200,
    fill: "white",
  },
  {
    name: "Male",
    count: 120,
    fill: "#A2D2FF", // Light blue
  },
  {
    name: "Female",
    count: 80,
    fill: "#FFC8DD", // Light pink
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Patients by Gender</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={ehrData}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/malefemale.png" // Replace with a healthcare-relevant icon
          alt="Gender Icon"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* LEGEND */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-[#A2D2FF] rounded-full" />
          <h1 className="font-bold">120</h1>
          <h2 className="text-xs text-gray-400">Male (60%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-5 h-5 bg-[#FFC8DD] rounded-full" />
          <h1 className="font-bold">80</h1>
          <h2 className="text-xs text-gray-400">Female (40%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
