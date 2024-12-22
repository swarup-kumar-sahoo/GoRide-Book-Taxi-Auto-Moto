import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate hook for navigation
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();  // Prevent form submission

    // Store user data in localStorage
    const userDetails = {
      name: formData.name,
      email: formData.email,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to the city page after successful sign-up
    navigate("/city");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us today!</p>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter a password"
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account?{" "}
          <a href="./login" className="login-link-text">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
