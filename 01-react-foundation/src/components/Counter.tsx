import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      Contador: <small>{count}</small>
      <div>
        <button onClick={() => increaseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
