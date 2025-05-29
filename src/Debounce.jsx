import React, { useEffect, useState } from "react";

const Debounce = () => {
    const [input, setInput] = useState("");
    const [debounceInput, setDebounceInput] = useState("");
  
    useEffect(()=>{
      //It sets a timer (handler) to update debounceInput after 500 milliseconds.
      const handler=setTimeout(()=>{
        setDebounceInput(input);
      },3000)

      //cleanup function - It cancels the previous timer if the user types again within 500ms.
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
