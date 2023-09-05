import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeftLong,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import ContactUs from "../contactus/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import Marketing from "../marketing/Marketing";
import FooterPage from "../Footer/FooterPage";
function HomePage() {
  const myRef = useRef(null);

  function handleClick() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div className="center">
        <h1 className="display-3 font-weight-bold">
          Welcome to <span style={{ color: "blue" }}>Flooring Makers</span>
        </h1>
        <a onClick={handleClick} href="#myRef">
          <FontAwesomeIcon className="btnScroll" icon={faArrowDown} /> Learn
          More About Us
        </a>
      </div>
      <div ref={myRef}>
        <AboutUs />
        {/* <ContactUs /> */}
        <Marketing />
        <FooterPage />
      </div>
    </div>
  );
}
// function HomePage() {
//   const myRef = useRef(null);

//   function handleClick() {
//     myRef.current.scrollIntoView({ behavior: "smooth" });
//   }
//   return (
//     <div>
//       <div className="center">
//         <h1 className="display-3 font-weight-bold">
//           Welcome to <span style={{ color: "blue" }}>Flooring Makers</span>
//         </h1>
//         <a onclick={handleClick()} href="#myRef">
//           <FontAwesomeIcon icon={faArrowDown} /> Learn More About Us
//         </a>
//         <div ref={myRef}>
//           <ContactUs />
//         </div>
//       </div>
//     </div>
//   );
// }

export default HomePage;
