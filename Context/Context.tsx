import React, { createContext } from "react";

type AuthContextType = {
  SignUp: () => void;
  LogIn: () => void;
  LogOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  SignUp: () => {},
  LogIn: () => {},
  LogOut: () => {},
});
