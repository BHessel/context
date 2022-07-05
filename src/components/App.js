import React from "react";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
