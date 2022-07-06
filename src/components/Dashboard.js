import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
    const [error, setError] = useState("");
    const { currentUser, logoutUser } = useAuth();
    let navigate = useNavigate();
    
    const handleLogout = async () => {
        setError("");
        try {
            await logoutUser();
            navigate('/');
        }
        catch {
            setError("Error logging out");
        }
    }

  return (
    <div>
      <h1>Profile</h1>
      {error && <p>{error}</p>}
        <p>{currentUser}</p>

      <button onClick={handleLogout}>Logout</button>
        
    </div>
  );
};

export default Dashboard;
