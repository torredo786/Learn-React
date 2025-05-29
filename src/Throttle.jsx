import React, { useState, useRef } from "react";


// Allow a button to be clicked freely, but only trigger the counter increase once every 5 seconds.

const Throttle = () => {
  const [count, setCount] = useState(0);
  const lastCalledRef = useRef(0);

  const handleClick = () => {
    const now = Date.now();
    const delay = 5000;
    console.log("lastCalledRef.current",lastCalledRef)
    if (now - lastCalledRef.current >= delay) {
      lastCalledRef.current = now;
      setCount((prev) => prev + 1);
      console.log("Incremented at:", new Date().toLocaleTimeString());
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Throttle Example</h2>
      <button onClick={handleClick}>Click Fast!</button>
      <p>Throttled Count: {count}</p>
    </div>
  );
};

export default Throttle;
