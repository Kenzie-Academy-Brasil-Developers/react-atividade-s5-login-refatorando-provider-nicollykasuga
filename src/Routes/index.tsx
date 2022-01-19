import { Switch, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Dashboard } from "../components/Dashboard";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
};
