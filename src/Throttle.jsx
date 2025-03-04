import React, { useState, useEffect } from "react";

const Throttle = () => {
  const [input, setInput] = useState("");
  const [throttleInput, setThrottleInput] = useState("");
  const [lastExecuted, setLastExecuted] = useState(0);
  useEffect(()=>{
    const now =Date.now();
    const delay = 500;
    if(now - lastExecuted > delay){
      setThrottleInput(input);
      setLastExecuted(now);
    }
    else{
        const remainingTime = delay - (now - lastExecuted);
        const handler = setTimeout(()=>{
            if(Date.now() - lastExecuted >= delay){
                setThrottleInput(input);
                setLastExecuted(Date.now());
            }
        }, remainingTime);
        return () => clearTimeout(handler);
    }
  },[input, lastExecuted])

  return (
    <div>
      <label htmlFor="box">throttle example</label>
      <input id="box" type="text" onChange={(e) => setInput(e.target.value)} />
        <p>User Input: {input}</p>
        <p>User throttleInputd: {throttleInput}</p>
    </div>
  );
};

export default Throttle;
