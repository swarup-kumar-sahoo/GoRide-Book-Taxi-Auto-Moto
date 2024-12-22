import React, { useState } from "react";
import "./ForgotPasswordPage.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    alert("A password reset link has been sent to your email.");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">Enter your email to reset your password</p>
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="forgot-btn">
            Send Reset Link
          </button>
        </form>
        <a href="/login" className="back-to-login">
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
