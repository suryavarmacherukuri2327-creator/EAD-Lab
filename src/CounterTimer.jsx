import React, { useState, useEffect } from "react";

export default function CounterTimer() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => 
        {setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={increment}>Increment</button>
      <span> {count} </span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>

      <h3>Timer</h3>
      <p>Time: {time} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
