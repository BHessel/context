import React from "react";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import VideoContainer from "./VideoContainer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/VideoContainer"
              element={
                <PrivateRoute>
                  <VideoContainer />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
