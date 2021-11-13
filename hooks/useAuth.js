import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
        if(logInResult.type === 'success') {

        }
    })
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
