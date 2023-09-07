import React from "react";
import NavBar from "./NavBar/NavBar";
import "./App.css";
import HomePage from "../src/Route/HomePage/HomePage";
import ContactUs from "../src/Route/contactus/ContactUs";
import AboutUs from "../src/Route/AboutUs/AboutUs";
import Marketing from "../src/Route/marketing/Marketing";
import FooterPage from "../src/Route/Footer/FooterPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <HomePage />
        <AboutUs />
        <Marketing />
        {/* <ContactUs /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/marketing" element={<Marketing />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <FooterPage />
        {/* <Link to="/contact">Contact Us</Link> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import NavBar from "./NavBar/NavBar";
// import "./App.css";
// import HomePage from "../src/Route/HomePage/HomePage";
// import ContactUs from "../src/Route/contactus/ContactUs";
// import AboutUs from "../src/Route/AboutUs/AboutUs";
// import Marketing from "../src/Route/marketing/Marketing";
// import FooterPage from "../src/Route/Footer/FooterPage";
// import { BrowserRouter, Route, Router } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavBar />
//         <HomePage />
//         <AboutUs />
//         <Marketing />
//         <FooterPage />
//         <Route path="/contact" element={<ContactUs />} />
//         <ContactUs />
//       </div>
//     </Router>
//   );
// }

// export default App;
