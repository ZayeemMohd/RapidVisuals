import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataContext from "../context/DataContext";

export default function LineChartComp() {
  const { Data } = useContext(DataContext);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="sales" stroke="#039ABA" />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#f85f98"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="profit" stroke="#E5B80B" />
          
        </LineChart>
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

