import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signupUser = (email, password, password_confirmation) => {
    console.log("signup function email", email);
    console.log("signup function password", password);

    axios
      .post(
        `https://netflix-movie-matcher.herokuapp.com/registrations`,
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response from signup", response);
        //if status is created, set current user to response.data.user
        if (response.data.status === 'created') {
          setCurrentUser(response.data.user);
        }
      })

      .catch((error) => {
        console.log("error from signup", error);
      });
  };

  const value = {
    currentUser,
    signupUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;