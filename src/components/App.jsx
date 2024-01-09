import DataContextProvider from "../context/DataContextProvider";
import "../styles/App.css";
import AreaChartComp from "./AreaChartComp";
import BarChartComp from "./BarChartComp";
import DataInp from "./DataInp";
import LineChartComp from "./LineChartComp";
import React from "react";

function App() {
  return (
    <DataContextProvider>
      <h1 className="bg-black font-semibold text-white text-4xl sm:text-5xl lg:text-6xl text-center pt-10 pb-3">
        &lt; Rapid Visuals /&gt;
      </h1>
      <p className="text-lg text-slate-600 pb-3 text-center max-w-3xl mx-auto italic">
        "Analyse your business in seconds"
      </p>
      <main className=" flex flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <DataInp />

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
          <GridItem title="Line Chart">
            <LineChartComp />
          </GridItem>

          <GridItem title="Bar Chart">
            <BarChartComp />
          </GridItem>

          <GridItem title="Area Chart">
            <AreaChartComp />
          </GridItem>
        </div>
      </main>
    </DataContextProvider>
  );
}

export default App;

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-blue-900 bg-blue-150/100 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
