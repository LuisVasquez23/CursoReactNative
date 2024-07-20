const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Basic functions</h3>
      <span>El resultado de sumar es : {addTwoNumbers(1, 1)}</span>
    </>
  );
};

export default BasicFunctions;
