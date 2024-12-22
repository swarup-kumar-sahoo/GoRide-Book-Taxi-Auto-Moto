import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate hook for navigation
import "./LoginPage.css";
import logo from "../assets/logo.png"; // Path to your logo

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate to the city page after login

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate a successful login (you can add your logic to verify credentials here)
    if (email && password) {
      // Store the user data in localStorage
      const userDetails = { email, name: "User" }; // Replace "User" with the actual name if available
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      // Navigate to the city page after a successful login
      navigate("/city");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-section">
          <img src={logo} alt="App Logo" className="app-logo" />
        </div>
        <h1>Welcome Back!</h1>
        <p>Log in to continue your journey with us.</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="separator">or</div>
        <button className="google-login">Continue with Google</button>
        <div className="additional-options">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
