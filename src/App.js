import React from "react";
import NavBar from "./components/NavBar";
// import Background from "../src/assets/floor_one.jpg";
import ContactUs from "../src/Route/ContactUs";
function App() {
  return (
    <div className="App">
      <NavBar />

      <ContactUs />
      <h1 class="animate__animated animate__bounce">An animated element</h1>
      <div class="animate__animated animate__bounce animate__delay-2s">Example</div>

    </div>
  );
}

export default App;
