import React, { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./CuttackPage.css"; // Import the CSS for the Cuttack Page

const CuttackPage = () => {
  const navigate = useNavigate(); // useNavigate hook for redirection

  // List of 50 locations in Cuttack city (same as before)
  const locations = [
    "Jagannath Temple",
      "Puri Beach",
      "Konark Temple",
      "Chilka Lake",
      "Puri Railway Station",
      "Cuttack", "Bhubaneswar"
  ];

   // Distance matrix (you need to fill in the actual distances)
   const distances = {
    "Jagannath Temple": {
      "Puri Beach": 1,
      "Konark Temple": 35,
      "Chilka Lake": 18,
      "Puri Railway Station": 2,
      "Cuttack": 82,
      "Bhubaneswar": 69,
      
    },
    "Puri Beach": {
      "Jagannath Temple": 1,
      "Konark Temple": 36,
      "Chilka Lake": 20,
      "Puri Railway Station": 3,
      "Cuttack": 82,
      "Bhubaneswar": 69,
    },
    "Konark Temple": {
      "Jagannath Temple": 35,
      "Puri Beach": 36,
      "Chilka Lake": 45,
      "Puri Railway Station": 34,
      "Cuttack": 82,
      "Bhubaneswar": 69,
    },
    "Chilka Lake": {
      "Jagannath Temple": 18,
      "Puri Beach": 20,
      "Konark Temple": 45,
      "Puri Railway Station": 17,
      "Cuttack": 82,
      "Bhubaneswar": 69,
    },
    "Puri Railway Station": {
      "Jagannath Temple": 2,
      "Puri Beach": 3,
      "Konark Temple": 34,
      "Chilka Lake": 17,
      "Cuttack": 82,
      "Bhubaneswar": 69,
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
          <img src="https://media.istockphoto.com/id/1466277764/photo/lord-jagannath-temple.jpg?s=612x612&w=0&k=20&c=LlPVey0p6B2NWKO2DdFmzsN93qp6SVDQKmi6fLQWDIg=" alt="Puri" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default CuttackPage;
