import React, { useEffect, useState } from "react";
import app from "./config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext({ user: null });

const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = getAuth().currentUser;
    return { initializing: !user, user };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), onChange);
    return () => unsubscribe();
  }, []);

  return state;
};

export const AuthProvider = ({ children }) => {
  const { initializing, user } = useAuth();
  if (initializing) return null;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};