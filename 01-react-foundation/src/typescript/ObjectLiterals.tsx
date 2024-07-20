interface Address {
  country: string;
  houseNo: number;
}
interface Person {
  fullName: string;
  age: number;
  lastName: string;
  adress: Address;
  isAlive: boolean;
}
const ObjectLiterals = () => {
  /** Objetos literales */
  const person: Person = {
    fullName: "Luis",
    age: 22,
    lastName: "Vasquez",
    adress: {
      country: "El Salvador",
      houseNo: 5,
    },
    isAlive: true,
  };

  return (
    <>
      <h3>ObjectLiterals</h3>
      {/** Datos de la persona */}
      <ul>
        <li>
          <b>Nombre:</b>
          {person.fullName} {person.lastName}
        </li>
        <li>
          <b>Edad:</b>
          {person.age}
        </li>
      </ul>
    </>
  );
};

export default ObjectLiterals;
