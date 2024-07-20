import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

const LoginPage = () => {
  const status = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, [logout]);

  if (status == "checking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h3>Login page</h3>

      {status == "authenticated" ? (
        <div>Autenticado como: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No Autenticado</div>
      )}

      {status == "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button
          onClick={() => {
            login("luis@gmail.com", "password");
          }}
        >
          Log in
        </button>
      )}
    </>
  );
};

export default LoginPage;
