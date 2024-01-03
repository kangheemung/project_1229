import { useState } from 'react';


function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount(c => c + 1);
  const decrease = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increase,
    decrease,
    reset
  };
}

export default useCount;