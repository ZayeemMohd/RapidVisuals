import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

export default function DataInp() {
  const { setData } = useContext(DataContext);

  let [inpVal, setInpVal] = useState({
    month: "",
    sales: "",
    revenue: "",
    profit: "",
  });

  let handleInputChange = (event) => {
    setInpVal((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inpVal);

    setInpVal({
      month: "",
      sales: "",
      revenue: "",
      profit: "",
    });

    setData((currData) => [...currData, inpVal]);
  };

  return (
    <>
      <p className="text-slate-950/100">Enter Your Data:</p>
      <form className="flex flex-col items-center justify-center px-4 md:px-8 xl:px-10 pb-12">
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 justify-center align-middle w-full gap-10 max-w-[1400px]">
          <input
            type="text"
            placeholder="Enter the Month"
            onChange={handleInputChange}
            name="month"
            value={inpVal.month}
            className="sm:flex items-center w-72 text-left space-x-3 px-4 h-12 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-900 dark:ring-blue-900 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-900"
          />

          <input
            type="text"
            placeholder="Enter Sales"
            onChange={handleInputChange}
            name="sales"
            value={inpVal.sales}
            className="sm:flex items-center w-72 text-left space-x-3 px-4 h-12 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-900 dark:ring-blue-900 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-900"
          />

          <input
            type="text"
            placeholder="Enter revenue"
            onChange={handleInputChange}
            name="revenue"
            value={inpVal.revenue}
            className="sm:flex items-center w-72 text-left space-x-3 px-4 h-12 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-900 dark:ring-blue-900 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-900"
          />

          <input
            type="text"
            placeholder="Enter profit"
            onChange={handleInputChange}
            name="profit"
            value={inpVal.profit}
            className="sm:flex items-center w-72 text-left space-x-3 px-4 h-12 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-900 dark:ring-blue-900 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-900"
          />

          <button
            onClick={handleSubmit}
            className="hidden sm:flex items-center justify-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 m-auto dark:bg-slate-800 dark:ring-0 col-start-2 col-span-2 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          >
            Add Data
          </button>
        </div>
      </form>
    </>
  );
}
