import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";



import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

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

  const googleSignIn = async () => {
    const gProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, gProvider);
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
    signout,
    googleSignIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


export function AuthWrapper({ redirectTo, Fallback = Loader, afterAuth = false, children}) {
  let {currentUser, authLoading} = useAuth();
  let location = useLocation();

  if (authLoading){
    return <>
      <Fallback/>
    </>
  }

  if ((!currentUser && !afterAuth) || (afterAuth && currentUser) ) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return children;
}
