import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logoutUser } = useAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logoutUser();
      navigate("/login");
    } catch {
      setError("Error logging out");
    }
  };

  console.log("currentUser from Dashboard", currentUser);

  return (
    <div>
      <h1>Profile</h1>
      {error && <p>{error}</p>}
      <p>{currentUser.email}</p>

      <button onClick={handleLogout}>Logout</button>
      <button>
        <Link to="/VideoContainer">Video Container</Link>
      </button>
    </div>
  );
};

export default Dashboard;
