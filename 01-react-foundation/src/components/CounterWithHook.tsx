import useCounter from "../hooks/useCounter";

const CounterWithHook = () => {
  const { count, increaseBy } = useCounter({
    initialValue: 0,
  });

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

export default CounterWithHook;
