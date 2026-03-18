import React, { useState, useEffect } from "react";

const ScrollTracker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; 
    console.log("Current Scroll Position:", position); 
    setScrollPosition(position); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <></>
  );
};

export default ScrollTracker;
