import { createContext } from "react";

// creating a context
const LoginContext = createContext({
  userName: "RY Default"
});

// const LoginContext = createContext("RY Default111");

export default LoginContext;