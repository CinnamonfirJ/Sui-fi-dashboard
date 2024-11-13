// components/ExpensePieChart.js
"use client";
import { VictoryPie } from "victory";
// const data = [
//   { x: "Electricity", y: 40 },
//   { x: "Internet", y: 25 },
//   { x: "School Fees", y: 20 },
//   { x: "Cable", y: 15 },
// ];

export default function ExpensePieChart() {
  return (
    <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto flex flex-col items-center'>
      <h3 className='text-lg font-semibold text-gray-700 mb-4'>
        Monthly Expenses
      </h3>
      <div className='relative'>
        {/* VictoryPie Chart */}
        <VictoryPie
          // data={data}
          colorScale={["#4CAF50", "#FFC107", "#03A9F4", "#8BC34A"]}
          innerRadius={70} // Creates a doughnut effect
          padAngle={2} // Adds padding between slices
          style={{
            data: {
              fillOpacity: 0.9, // Makes colors slightly translucent
              stroke: "#fff", // White stroke between slices
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#374151", // Tailwind gray color for labels
              fontWeight: "bold",
            },
          }}
          // labelRadius={({ innerRadius }) => innerRadius + 30} // Adjusts label position
          // labels={({ datum }) => `${datum.x}: ${datum.y}%`} // Label format
        />
        {/* Centered Text */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-2xl font-semibold text-gray-800'>Total</span>
        </div>
      </div>
    </div>
  );
}
