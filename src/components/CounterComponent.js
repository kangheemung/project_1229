import React from 'react';
import useCount from './useCount';  // import the useCount hook

// A component that uses the useCount hook
const CounterComponent = () => {
  const { count, increase, decrease, reset } = useCount(); // Use the hook here

  return (
    <div>
      <h1>{count}</h1> {/* Display the current count */}
      <button onClick={increase}>Increase</button> {/* Increase count */}
      <button onClick={decrease}>Decrease</button> {/* Decrease count */}
      <button onClick={reset}>Reset</button> {/* Reset count */}
    </div>
  );
};

export default CounterComponent;
