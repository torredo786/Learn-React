import React, { useEffect, useState } from "react";

const Debounce = () => {
    const [input, setInput] = useState("");
    const [debounceInput, setDebounceInput] = useState("");
  
    useEffect(()=>{
      const handler=setTimeout(()=>{
        setDebounceInput(input);
      },500)
      return ()=>{
        clearTimeout(handler);
      }
    }, [input])
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>User Input: {debounceInput}</p>
      </div>
    );
};

export default Debounce;
