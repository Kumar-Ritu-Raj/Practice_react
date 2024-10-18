import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <>
      {formattedTime}
    </>
  );
}

export default function UseEffect() {
  return (
    <div>
      <h5>React Clock</h5>
      <Clock />
    </div>
  );
}

