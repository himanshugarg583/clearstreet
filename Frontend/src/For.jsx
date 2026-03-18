import React from 'react';

export default function For() {
  return (
    <>
      <div className="bg-[#000]">
        <div className="w-[1200px] m-auto flex gap-4 py-[30px]">
          {/* Static Header */}
          <div className="w-[300px] h-[300px] text-[65px] font-[500] text-[white] flex justify-center items-center">
            FOR
          </div>

          {/* Scrolling Text */}
          <div className="w-[850px] h-[300px] text-[55px] font-[600] overflow-hidden shadow-inner-deep relative bg-gray-800 rounded-lg">
            <div className="animate-scroll space-y-8">
              <div className="text-[#34a36c]">Family offices</div>
              <div className="text-[#573ebb]">Active traders</div>
              <div className="text-[#e85030]">Alternative asset managers</div>
              <div className="text-[white]">Traditional asset managers</div>
              <div className="text-[#3488a3]">Hedge funds</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

