import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Canva() {

    const data = [
      { label: "Long MV", width: "50%" },
      { label: "Total MV", width: "80%" },
      { label: "Short MV", width: "30%" },
    ];


    const data1 = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "P&L",
          data: [2, 3, 1, 5, 6, 4, 8],
          borderColor: "#00C9FF",
          backgroundColor: "#00C9FF",
          pointBorderColor: "#00C9FF",
          pointBackgroundColor: "#00C9FF",
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#00C9FF",
          borderWidth: 2,
          tension: 0.4,
        },
        {
          label: "ROI",
          data: [1, 2, 0.5, 4, 5, 3, 7],
          borderColor: "#FFC300",
          backgroundColor: "#FFC300",
          pointBorderColor: "#FFC300",
          pointBackgroundColor: "#FFC300",
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "#FFC300",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#9CA3AF", // Tailwind Gray
            usePointStyle: true,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          ticks: { color: "#9CA3AF" },
          grid: { display: false },
        },
        y: {
          ticks: { color: "#9CA3AF" },
          grid: { color: "#374151" }, 
        },
      },
      hover: {
        mode: "nearest",
        intersect: false,
      },
    };


      const data2 = [7, 4, 3, 6, 9, 5, 8, 6, 2, 3, 1, 4, 7, 7];

  return (
    <>
    <div className='bg-[#000] text-[white]'>
    <div className="flex w-[1200px] m-auto text-[28px] font-[500] gap-3 flex-wrap">
    <div className='w-[58%] bg-[#0d111d] p-[20px] h-[290px] rounded-[18px]'>
        <h4 className="-body_large" data-v-79284dce="">
          Risk and Margin
        </h4>
        <div className='w-[100%] p-[20px]'>
        <div className="w-full max-w-sm mx-auto">
      <div className="bg-[#111827] text-white p-4 rounded-xl shadow-md flex items-center justify-between">
        {/* Left Section */}
        <div>
          <p className="text-xl font-bold">$2,067,643</p>
          <p className="text-green-500 text-sm font-semibold">3.41%</p>
        </div>

        {/* Right Section */}
        <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg font-semibold">
          Risk details
        </button>
      </div>

      {/* Gradient Bar */}
      <div className="mt-4 h-12 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-xl flex justify-between items-center px-4">
        <span className="text-white font-semibold">Excess</span>
        <span className="text-white font-semibold">Deficit</span>
      </div>
    </div>
        </div>
    </div>
    <div className='w-[38%] bg-[#0d111d] p-[20px] h-[290px] rounded-[18px]'>
    <h4>
          Risk and Margin
        </h4>
        <div className='w-[100%] p-[10px]'>
        <div className="bg-[#111827] text-white p-6 rounded-xl w-full max-w-md mx-auto shadow-md">
      {/* Table Header */}
      <div className="flex justify-between mb-4 text-sm font-semibold">
        <span>Asset class</span>
        <span>Account ID</span>
        <span>Sector</span>
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="group flex items-center space-x-4"
          >
            <div className="text-sm w-20">{item.label}</div>
            <div className="relative w-full bg-gray-700 h-6 rounded-lg overflow-hidden">
              <div
                className="absolute h-6 bg-purple-600 rounded-lg transition-transform duration-300 group-hover:scale-x-[1.1]"
                style={{ width: item.width, transformOrigin: "left" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    </div>

    <div className='w-[40%] bg-[#0d111d] p-[20px] rounded-[18px]'>
    <h4>P&L</h4>
    <div className='w-[100%] p-[10px]'>
    <div className="bg-[#111827] p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <Line data={data1} options={options} />
      <div className="flex justify-center mt-4 space-x-4">
        {["Week", "Month", "Year"].map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              index === 0 ? "bg-white text-black" : "bg-gray-700 text-gray-300"
            } hover:bg-gray-500 hover:text-white`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
    </div>
    </div>
    
    <div className='w-[56%] bg-[#0d111d] p-[20px] rounded-[18px]'>
      <h4>Analytic Reports</h4>
      <div className='w-[100%] p-[10px]'>

      <div className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg w-full max-w-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-white text-sm">Transactions</h2>
        <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded-md">
          <span className="bg-red-500 text-white rounded-full px-2 py-0.5 mr-1">PDF</span>
          Download
        </button>
      </div>
      <div className="flex items-end justify-between w-full mt-4">
        {data2.map((value, index) => (
          <div
            key={index}
            className="bg-purple-500 hover:bg-purple-400 transition-all duration-300 ease-in-out"
            style={{
              height: `${value * 10}px`,
              width: '14px',
              transform: 'scaleY(1)',
            }}
          ></div>
        ))}
      </div>
    </div>

      </div>
    </div>
    
  </div>
</div>
    </>
  )
}
