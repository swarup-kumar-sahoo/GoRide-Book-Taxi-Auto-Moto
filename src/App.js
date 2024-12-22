import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'; // Assuming you have a global stylesheet
import LoginPage from "./components/LoginPage";
import SplashScreen from "./components/SplashScreen";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import SignUpPage from "./components/SignUpPage";
import City from "./components/City";
import CuttackPage from "./components/CuttackPage"; // Import CuttackPage component
import BhubaneswarPage from "./components/BhubaneswarPage"; // Import BhubaneswarPage component
import PuriPage from "./components/PuriPage"; // Import PuriPage component
import PaymentPage from "./components/PaymentPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/city" element={<City />} /> 
        <Route path="/cuttack" element={<CuttackPage />} />
        <Route path="/bhubaneswar" element={<BhubaneswarPage />} />
        <Route path="/puri" element={<PuriPage />} />
        <Route path="/payment/:vehicleType" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
