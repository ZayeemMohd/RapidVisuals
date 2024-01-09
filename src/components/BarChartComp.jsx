import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function BarChartComp() {
  const { Data } = useContext(DataContext);
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={CustomTooltip}/>
        <Legend />
        <Bar dataKey="sales" fill="#039ABA" />
        <Bar dataKey="revenue" fill="#f85f98" />
        <Bar dataKey="profit" fill="#E5B80B" />
      </BarChart>
      </ResponsiveContainer>
    </>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-white">{label}</p>
        <p className="text-sm text-yellow-500">
          Profit:
          <span className="ml-2">${payload[2].value}</span>
        </p>
        <p className="text-sm text-pink-500">
          Revenue:
          <span className="ml-2">${payload[1].value}</span>
        </p>
        <p className="text-sm text-cyan-600">
          Sales:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
