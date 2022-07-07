import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  let navigate = useNavigate();

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
        if (response.data.status === "created") {
          setCurrentUser(response.data.user);
          navigate("/");
        }
      })

      .catch((error) => {
        console.log("error from signup", error);
      });
  };

  const loginUser = (email, password) => {
    axios
      .post(
        "https://netflix-movie-matcher.herokuapp.com/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("res from login", response);
        if (response.data.logged_in) {
          setCurrentUser(response.data.user);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("login errors", error);
      });
  };

  const logoutUser = () => {
    axios
      .delete("https://netflix-movie-matcher.herokuapp.com/logout", {
        withCredentials: true,
      })
      .then((response) => {
        console.log("logout response", response);
        // return response;
        navigate("/login");
      })
      .catch((error) => {
        console.log("logout error?", error);
      });
  };

  const value = {
    currentUser,
    signupUser,
    setCurrentUser,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
