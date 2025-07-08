"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    available: 12,
    onLeave: 3,
  },
  {
    name: "Tue",
    available: 10,
    onLeave: 5,
  },
  {
    name: "Wed",
    available: 14,
    onLeave: 1,
  },
  {
    name: "Thu",
    available: 13,
    onLeave: 2,
  },
  {
    name: "Fri",
    available: 11,
    onLeave: 4,
  },
];

const DoctorAvailabilityChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-semibold">Doctor Availability</h1>
        <Image src="/moreDark.png" alt="options" width={20} height={20} />
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#9CA3AF" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="available"
            fill="#A8E6A1" // greenish
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="Available"
          />
          <Bar
            dataKey="onLeave"
            fill="#FCA5A5" // soft red
            legendType="circle"
            radius={[10, 10, 0, 0]}
            name="On Leave"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorAvailabilityChart;
