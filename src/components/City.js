import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar";  // Assuming Navbar is available
import './CityPage.css'; // Assuming you have styles for the City page

const CityPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleCitySelection = (city) => {
    // Redirect to the selected city's page
    navigate(`/${city.toLowerCase()}`);
  };

  return (
    <div>
      <Navbar /> {/* Assuming Navbar is always visible */}
      <div className="city-container">
        <h1>Select Your City</h1>
        <div className="city-options">
          <button onClick={() => handleCitySelection("Cuttack")}>Cuttack</button>
          <button onClick={() => handleCitySelection("Bhubaneswar")}>Bhubaneswar</button>
          <button onClick={() => handleCitySelection("Puri")}>Puri</button>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
