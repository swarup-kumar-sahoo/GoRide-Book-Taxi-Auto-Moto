import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "./SplashScreen.css"; // Assuming you have a CSS file for styling
import logo from '../assets/logo.png'; // Adjust the path as per your file structure


const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Navigate to login page after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
  <div className="splash-screen">
      <img src={logo} alt="App Logo" className="logo" />
  </div>
  );
};

export default SplashScreen;
