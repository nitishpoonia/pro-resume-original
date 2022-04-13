import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { Navigate, useLocation } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [authLoading, setAuthLoading] = useState(true);

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = async (email, password) => { 
    return await signInWithEmailAndPassword(auth, email, password);
  }

  const signout = async () => {
    return await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
    });

    return () => {
      unsubscribe()
    };
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    authLoading,
    signout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function RequireAuth({ to, children}) {
  let {currentUser, authLoading} = useAuth();
  let location = useLocation();

  if (authLoading){
    return <>
      <h1>Loading...</h1>
    </>
  }

  if (!currentUser) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  return children;
}

