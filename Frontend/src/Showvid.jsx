

import React, { useState, useEffect } from "react";

export default function Showvid() {
  const [bgColor, setBgColor] = useState("#2e21de");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 1500; // Start fading out
      const fadeEnd = 2100;   // End fading out
      const fadeInStart = 2100; // Start fading back in
      const fadeInEnd = 2190;   // End fading back in

      if (scrollY < fadeStart) {
        setBgColor("#2e21de");
        setOpacity(1);
      } else if (scrollY > fadeEnd && scrollY <= fadeInStart) {
        setBgColor("#000000");
        setOpacity(0);
      } else if (scrollY > fadeInStart && scrollY <= fadeInEnd) {
        const percentage = (scrollY - fadeInStart) / (fadeInEnd - fadeInStart);
        setBgColor("#000000");
        setOpacity(percentage); // Gradually fade back in
      } else if (scrollY > fadeInEnd) {
        setBgColor("#000000");
        setOpacity(1); // Fully visible after 2700px
      } else {
        const percentage = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        const color = interpolateColor("#2e21de", "#000000", percentage);
        const newOpacity = 1 - percentage;
        setBgColor(color);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const interpolateColor = (startColor, endColor, percentage) => {
    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);
    const r = Math.round(start.r + (end.r - start.r) * percentage);
    const g = Math.round(start.g + (end.g - start.g) * percentage);
    const b = Math.round(start.b + (end.b - start.b) * percentage);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  return (
    <>
      <div className="pt-10">
        <div className="w-full h-[100vh] relative">
          <video
            src="./images/vid1.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div data-aos="zoom-in-up" className="absolute top-[250px] right-[300px] text-4xl text-white text-center">
            The financial industry still operates on <br /> Outdated
            infrastructure built in the <br /> 1970s
          </div>
          <div
            className="w-full h-[100vh] absolute z-10 top-0 right-0"
            style={{
              backgroundColor: bgColor,
              opacity: opacity,
              transition: "background-color 0.3s, opacity 0.3s", // Optional smoothing
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

