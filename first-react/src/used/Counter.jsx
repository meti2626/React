import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={increment}>Increase</button>
        <button className="counter-btn" onClick={reset}>Set Count</button>
        <button className="counter-btn" onClick={decrement}>Decrease</button>
      </div>
    </>
  );
}

export default Counter;
