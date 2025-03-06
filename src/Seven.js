import React, { useEffect, useState } from 'react'

export default function Seven() {

    const [time,setTime] = useState(5);

    useEffect(()=>{
      console.log("first")
     if(time>0){
        const timer = setTimeout(()=> setTime(time-1),1000);
        return () => {
          console.log("Clearing timeout for time:", time);
          clearTimeout(timer);
        };
     }
    },[time])

  return (
    <div>
      Time Left: {time} second
    </div>
  )
}
