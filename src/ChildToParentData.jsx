import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleCounterChange = (newCount) => {
    setCount(newCount);
    console.log('New count from child:', newCount);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Counter initialCount={count} onCounterChange={handleCounterChange} />
    </div>
  );
}

function Counter({ initialCount, onCounterChange }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCounterChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCounterChange(newCount);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default ParentComponent;
