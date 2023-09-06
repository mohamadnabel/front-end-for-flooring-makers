import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from "../src/Route/HomePage/HomePage";
import ContactUs from "../src/Route/contactus/ContactUs";
import AboutUs from "../src/Route/AboutUs/AboutUs";
import Marketing from "../src/Route/marketing/Marketing";
import FooterPage from "../src/Route/Footer/FooterPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutUs />
      <Marketing />
      <FooterPage />
    </div>
  );
}

export default App;
