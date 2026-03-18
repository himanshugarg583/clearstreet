import React from "react";

export default function AnimatedText() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Background translucent animated rectangles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className={`absolute w-40 h-[300px] bg-blue-500 opacity-40 animate-[slide_8s_linear_infinite]`}
          style={{
            transform: `rotate(${index * 24}deg)`,
            animationDelay: `${index * 0.5}s`,
          }}
        ></div>
      ))}

      {/* Text in the center */}
      <div className="text-center z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-blue-700 leading-snug">
          This is where
        </h1>
        <h1 className="text-6xl md:text-7xl font-bold text-blue-700 leading-snug">
          Clear Street<sup className="text-sm">&reg;</sup> comes in.
        </h1>
      </div>

      {/* Custom keyframes */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateY(-100vh) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(0deg);
            }
          }
        `}
      </style>
    </div>
  );
}
