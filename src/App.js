import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from "../src/Route/HomePage/HomePage";
import ContactUs from "../src/Route/contactus/ContactUs";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
