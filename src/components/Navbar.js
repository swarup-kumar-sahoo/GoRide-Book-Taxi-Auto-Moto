import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  // Retrieve user details from localStorage
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {
    name: "Guest",
    email: "guest@example.com",
  };

  return (
    <div className="navbar">
      <div className="logo">goride</div>
      <div className="profile" onClick={() => setShowProfile(!showProfile)}>
        <span role="img" aria-label="user profile" className="profile-icon">👤</span>
        {showProfile && (
          <div className="profile-dropdown">
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
