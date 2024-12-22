import React, { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./CuttackPage.css"; // Import the CSS for the Cuttack Page

const CuttackPage = () => {
  const navigate = useNavigate(); // useNavigate hook for redirection

  // List of 50 locations in Cuttack city (same as before)
  const locations = [
    "Airport Road", "Nayapalli", "Unit-4", "Khandagiri", "Saheed Nagar","Lingaraj Temple","Bapuji Nagar","Janla",
    "Chandaka","Baramunda","Puri","Cuttack"
  ];

   // Distance matrix (you need to fill in the actual distances)
   const distances = {
  "Airport Road": {
    "Nayapalli": 5,
    "Unit-4": 6,
    "Khandagiri": 7,
    "Saheed Nagar": 5,
    "Lingaraj Temple": 8,
    "Bapuji Nagar": 4,
    "Janla": 12,
    "Chandaka": 15,
    "Baramunda": 10,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Nayapalli": {
    "Unit-4": 3,
    "Khandagiri": 4,
    "Saheed Nagar": 2,
    "Lingaraj Temple": 6,
    "Bapuji Nagar": 3,
    "Janla": 10,
    "Chandaka": 13,
    "Baramunda": 8,
    "Airport Road": 5,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Unit-4": {
    "Khandagiri": 2,
    "Saheed Nagar": 3,
    "Lingaraj Temple": 7,
    "Bapuji Nagar": 4,
    "Janla": 9,
    "Chandaka": 14,
    "Baramunda": 9,
    "Airport Road": 6,
    "Nayapalli": 3,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Khandagiri": {
    "Saheed Nagar": 4,
    "Lingaraj Temple": 5,
    "Bapuji Nagar": 6,
    "Janla": 11,
    "Chandaka": 16,
    "Baramunda": 10,
    "Airport Road": 7,
    "Nayapalli": 4,
    "Unit-4": 2,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Saheed Nagar": {
    "Lingaraj Temple": 5,
    "Bapuji Nagar": 3,
    "Janla": 9,
    "Chandaka": 14,
    "Baramunda": 7,
    "Airport Road": 5,
    "Nayapalli": 2,
    "Unit-4": 3,
    "Khandagiri": 4,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Lingaraj Temple": {
    "Bapuji Nagar": 4,
    "Janla": 10,
    "Chandaka": 15,
    "Baramunda": 11,
    "Airport Road": 8,
    "Nayapalli": 6,
    "Unit-4": 7,
    "Khandagiri": 5,
    "Saheed Nagar": 5,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Bapuji Nagar": {
    "Janla": 8,
    "Chandaka": 14,
    "Baramunda": 10,
    "Airport Road": 4,
    "Nayapalli": 3,
    "Unit-4": 4,
    "Khandagiri": 6,
    "Saheed Nagar": 3,
    "Lingaraj Temple": 4,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Janla": {
    "Chandaka": 6,
    "Baramunda": 12,
    "Airport Road": 12,
    "Nayapalli": 10,
    "Unit-4": 9,
    "Khandagiri": 11,
    "Saheed Nagar": 9,
    "Lingaraj Temple": 10,
    "Bapuji Nagar": 8,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Chandaka": {
    "Baramunda": 8,
    "Airport Road": 15,
    "Nayapalli": 13,
    "Unit-4": 14,
    "Khandagiri": 16,
    "Saheed Nagar": 14,
    "Lingaraj Temple": 15,
    "Bapuji Nagar": 14,
    "Janla": 6,
    "Cuttack": 26,
      "Puri": 69,
  },
  "Baramunda": {
    "Airport Road": 10,
    "Nayapalli": 8,
    "Unit-4": 9,
    "Khandagiri": 10,
    "Saheed Nagar": 7,
    "Lingaraj Temple": 11,
    "Bapuji Nagar": 10,
    "Janla": 12,
    "Chandaka": 8,
    "Cuttack": 26,
      "Puri": 69,
  }
};

  
  

  const [startingLocation, setStartingLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [price, setPrice] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Add state for selected vehicle

  // Handle location input change
  const handleLocationChange = (e, setLocation) => {
    const value = e.target.value;
    setLocation(value);

    if (value.length > 0) {
      // Filter locations based on user input only if there's text entered
      setFilteredLocations(
        locations.filter(loc => loc.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      setFilteredLocations([]);
    }
  };

  // Handle price calculation
  const handlePriceCalculation = () => {
    if (!startingLocation || !destination) {
      alert("Please select both starting and destination locations.");
      return;
    }

    // Fetch the distance between the starting and destination locations
    const distance = distances[startingLocation]?.[destination];

    if (!distance) {
      alert("Service not available for the selected locations.");
      return;
    }

    // Prices per km
    const vehiclePrices = {
      car: 7 * distance,
      bike: 4 * distance,
      auto: 5 * distance
    };

    setPrice(vehiclePrices);
  };

  // Handle booking redirection
  const handleBooking = () => {
    if (!selectedVehicle) {
      alert("Please select a vehicle to book.");
      return;
    }

    const selectedPrice = price[selectedVehicle];

    if (!selectedPrice) {
      alert("Price not available for the selected vehicle.");
      return;
    }

    // Navigate to the payment page with the selected vehicle type and price
    navigate(`/payment/${selectedVehicle}`, { state: { price: selectedPrice } });
  };

  return (
    <div className="cuttack-page">
      <Navbar />
      <div className="hero-section">
        <div className="hero-left">
          <h2>Enter Your Location and Destination</h2>
          
          <div className="input-group">
            <label>Starting Location</label>
            <input 
              type="text" 
              value={startingLocation} 
              onChange={(e) => handleLocationChange(e, setStartingLocation)} 
              placeholder="Enter your location" 
            />
            {startingLocation && (
              <div className="location-suggestions">
                {filteredLocations.map((loc, index) => (
                  <div 
                    key={index} 
                    className="location-suggestion-item" 
                    onClick={() => {
                      setStartingLocation(loc);
                      setFilteredLocations([]);  
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="input-group">
            <label>Destination</label>
            <input 
              type="text" 
              value={destination} 
              onChange={(e) => handleLocationChange(e, setDestination)} 
              placeholder="Enter destination" 
            />
            {destination && (
              <div className="location-suggestions">
                {filteredLocations
                  .filter((loc) => loc !== startingLocation)
                  .map((loc, index) => (
                    <div 
                      key={index} 
                      className="location-suggestion-item" 
                      onClick={() => {
                        setDestination(loc);
                        setFilteredLocations([]);  
                      }}
                    >
                      {loc}
                    </div>
                  ))}
              </div>
            )}
          </div>

          <button className="see-price-btn" onClick={handlePriceCalculation}>
            See Price
          </button>

          {price && (
            <div className="price-display">
              <p>Car Price: ₹{price.car}</p>
              <p>Bike Price: ₹{price.bike}</p>
              <p>Auto Price: ₹{price.auto}</p>
            </div>
          )}

          <div className="price-grid">
            <div 
              className={`price-item ${selectedVehicle === 'car' ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle('car')}
            >
              <img src="https://img.icons8.com/ios/50/car--v1.png" alt="Car" className="price-icon" />
              <p>Book Car</p>
              <p>₹{price ? price.car : 0}</p>
            </div>
            <div 
              className={`price-item ${selectedVehicle === 'bike' ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle('bike')}
            >
              <img src="https://img.icons8.com/ios/50/motorcycle.png" alt="Bike" className="price-icon" />
              <p>Book Moto</p>
              <p>₹{price ? price.bike : 0}</p>
            </div>
            <div 
              className={`price-item ${selectedVehicle === 'auto' ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle('auto')}
            >
              <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/external-autorickshaw-transportation-icongeek26-glyph-icongeek26.png" alt="Auto" className="price-icon" />
              <p>Book Auto</p>
              <p>₹{price ? price.auto : 0}</p>
            </div>
          </div>

          {/* Book Now button */}
          <div className="book-the-bt">
          <button className="book-now-btn" onClick={handleBooking}>
            Book Now
          </button>
          </div>
        </div>

        <div className="hero-right">
          <img src="https://i.redd.it/baramunda-inter-state-bus-terminus-isbt-v0-6m6uj8ijfrlc1.jpg?width=1600&format=pjpg&auto=webp&s=acdfefa245c43fac1465639cb40bad6b5a011bdd" alt="Bhubaneswar" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default CuttackPage;
