import { useState } from "react";

interface Options {
  initialValue: number;
}

const useCounter = ({ initialValue = 0 }: Options) => {
  const [count, setCount] = useState(initialValue);

  const increaseBy = (value: number) => {
    const newValue = count + value;

    if (newValue < 0) return;

    setCount(newValue);
  };

  return {
    // Properties
    count,

    //Methods
    increaseBy,
  };
};

export default useCounter;
