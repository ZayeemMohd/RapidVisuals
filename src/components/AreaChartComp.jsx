import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function AreaChartComp() {
  const { Data } = useContext(DataContext);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={Data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Legend />

          <Area
            type="monotone"
            dataKey="sales"
            stackId="1"
            stroke="#039ABA"
            fill="#039ABA"
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#f85f98"
            fill="#f85f98"
          />

          <Area
            type="monotone"
            dataKey="profit"
            stackId="1"
            stroke="#E5B80B"
            fill="#E5B80B"
          />
        </AreaChart>
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


