import { AuthContext } from "../../Providers/Auth";
import { useContext } from "react";
import { useHistory } from "react-router";
export const Dashboard = () => {
  const { logout, authToken } = useContext(AuthContext);

  const history = useHistory();

  function Dashboard() {
    if (authToken === "") {
      history.push("/");
    }
  }
  function handleLogout() {
    logout();
  }

  Dashboard();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => handleLogout}>Sair</button>
    </>
  );
};
