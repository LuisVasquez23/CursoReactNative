import { User } from "../interfaces";

interface Props {
  user: User;
}

const UserRow = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <>
      <tr>
        <td>
          <img
            src={avatar}
            style={{ width: "50px" }}
            alt="Avatar del usuario"
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    </>
  );
};

export default UserRow;
