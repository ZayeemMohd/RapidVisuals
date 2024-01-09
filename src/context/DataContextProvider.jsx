import React from "react";
import { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  let [Data, setData] = useState([
    { month: "Jan", sales: 300, revenue: 1200, profit: 800 },
    { month: "Feb", sales: 550, revenue: 1600, profit: 1100 },
    { month: "Mar", sales: 350, revenue: 1300, profit: 900 },
  ]);

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
