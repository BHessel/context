import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const password_confirmationRef = useRef();

  const [error, setError] = useState("");

  const { signupUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== password_confirmationRef.current.value) {
      return alert("Passwords do not match");
    }

    try {
      setError("");
      await signupUser(
        emailRef.current.value,
        passwordRef.current.value,
        password_confirmationRef.current.value
      );
    } catch {
      setError("Error signing up");
    }
  };

  return (
    <div className="create-user">
      <form onSubmit={handleSubmit}>
        <h3 className="top-label">Sign Up</h3>

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

        <div className="">
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            ref={password_confirmationRef}
            className="search"
            required
          />
        </div>

        <button type="submit" className="button-27">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
