import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure to have your Navbar component
import "./PaymentPage.css"; // Link to the CSS for styling
import logo from '../assets/goride.png'; // Adjust the path as per your file structure


const PaymentPage = () => {
  const { state } = useLocation();
  const { price } = state || { price: 0 }; // Extract price from location state
  const [paymentMethod, setPaymentMethod] = useState(""); // Track selected payment method

  // Handle payment button click
  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment of ₹${price} via ${paymentMethod} successful!`);
  };

  return (
    <div className="payment-page">
      <Navbar />
      <div className="payment-container">
        <div className="payment-left">
          <h2>Complete Your Payment</h2>
          <p>Total Amount: ₹{price}</p>

          {/* Payment method options */}
          <div className="payment-options">
            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI Payment
            </label>
            <label>
              <input
                type="radio"
                value="Cash"
                checked={paymentMethod === "Cash"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash Payment
            </label>
          </div>

          {/* Pay button */}
          <button className="pay-btn" onClick={handlePayment}>
            Pay ₹{price}
          </button>
        </div>

        {/* Right side illustration */}
        <div className="payment-right">
        <img src={logo} alt="Payment Illustrion" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
