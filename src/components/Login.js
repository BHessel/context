import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");

  const { loginUser } = useAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await loginUser(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Error logging in");
    }
  };

  return (
    <div className="create-user">
      <form onSubmit={handleSubmit}>
        <h3 className="top-label">Login</h3>

        <div className="">
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
            className="search"
            required
          />
        </div>

        <div className="">
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={passwordRef}
            className="search"
            required
          />
        </div>

        <button type="submit" className="button-27">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
