const BasicTypes = () => {
  /** Tipos de datos basicos */
  const name: string = "Luis"; /** => String */
  const age: number = 37; /** => Number */
  const isActive: boolean = true; /** => Boolean */
  return (
    <>
      <h3>Tipos basicos</h3>

      <ul>
        <li>
          <b>String:</b> {name}
        </li>
        <li>
          <b>Number:</b> {age}
        </li>
        <li>
          <b>Bool:</b> {isActive ? "True" : "False"}
        </li>
      </ul>
    </>
  );
};

export default BasicTypes;
