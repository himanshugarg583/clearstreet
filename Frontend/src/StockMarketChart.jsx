import React, { useRef, useEffect, useState } from "react";

const StockMarketChart = () => {
  const canvasRef = useRef(null);
  const [hoverPrice, setHoverPrice] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const stockData = [
      { date: "2024-12-01", price: 100 },
      { date: "2024-12-02", price: 105 },
      { date: "2024-12-03", price: 102 },
      { date: "2024-12-04", price: 110 },
      { date: "2024-12-05", price: 108 },
      { date: "2024-12-06", price: 115 },
      { date: "2024-12-07", price: 120 },
    ];

    const width = (canvas.width = 300);
    const height = (canvas.height = 200);
    const padding = 50;

    const maxPrice = Math.max(...stockData.map((d) => d.price));
    const minPrice = Math.min(...stockData.map((d) => d.price));
    const yScale = (height - padding * 2) / (maxPrice - minPrice);
    const xScale = (width - padding * 2) / (stockData.length - 1);

    const drawChart = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the chart background
      ctx.fillStyle = "#00000";
      ctx.fillRect(0, 0, width, height);

      // Draw axes
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;

      // Y-axis
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, height - padding);
      ctx.stroke();

      // X-axis
      ctx.beginPath();
      ctx.moveTo(padding, height - padding);
      ctx.lineTo(width - padding, height - padding);
      ctx.stroke();

      // Draw the stock prices
      ctx.strokeStyle = "#007BFF";
      ctx.lineWidth = 2;
      ctx.beginPath();

      stockData.forEach((point, index) => {
        const x = padding + index * xScale;
        const y = height - padding - (point.price - minPrice) * yScale;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw the data points
      ctx.fillStyle = "#FF4500";

      stockData.forEach((point, index) => {
        const x = padding + index * xScale;
        const y = height - padding - (point.price - minPrice) * yScale;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw hover arrow
      if (hoverIndex !== null) {
        const point = stockData[hoverIndex];
        const x = padding + hoverIndex * xScale;
        const y = height - padding - (point.price - minPrice) * yScale;

        // Draw arrow
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(x, y - 10); // Arrow tip
        ctx.lineTo(x - 10, y - 20); // Left wing
        ctx.lineTo(x + 10, y - 20); // Right wing
        ctx.closePath();
        ctx.fill();

        // Show price
        ctx.fillStyle = "#ffff";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`$${point.price}`, x, y - 30);
      }
    };

    drawChart();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;

      // Find the closest point
      const index = Math.round((mouseX - padding) / xScale);
      if (index >= 0 && index < stockData.length) {
        setHoverPrice(stockData[index].price);
        setHoverIndex(index);
      } else {
        setHoverPrice(null);
        setHoverIndex(null);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hoverIndex]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }}></canvas>
    </div>
  );
};

export default StockMarketChart;
