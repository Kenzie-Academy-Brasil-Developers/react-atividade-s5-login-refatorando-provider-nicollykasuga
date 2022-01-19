import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  signIn: (userData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: UserData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then(response => {
        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  const logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
