
import React, { useEffect, useState } from 'react';

export default function SetInterval() {
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(interval); // Stop when it reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Time Left: {time} second
    </div>
  );
}
