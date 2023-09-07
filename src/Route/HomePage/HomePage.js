// import "bootstrap/dist/css/bootstrap.min.css";
// import "./HomePage.css";
// import floor from "../assets/floor2background.jpg";
// import { useRef } from "react";
// import ContactUs from "../contactus/ContactUs";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { Carousel } from "react-bootstrap";

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// function HomePage() {
//   const myRef = useRef(null);
//   function handleClick() {
//     myRef.current.scrollIntoView({ behavior: "smooth" });
//   }
//   const images = [
//     floor,
//     "https://picsum.photos/800/400?random=2",
//     "https://picsum.photos/800/400?random=3",
//   ];

//   return (
//     <Carousel>
//       {[...Array(3)].map((_, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100"
//             src={images[getRandomInt(images.length)]}
//             alt={`Slide ${index + 1}`}
//           />
//         </Carousel.Item>
//       ))}
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
//     </Carousel>
//   );
// }

// export default HomePage;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import floor from "../assets/floor2background.jpg";
import { useRef } from "react";
import ContactUs from "../contactus/ContactUs";
import "../HomePage/HomePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function HomePage() {
  const images = [
    "https://picsum.photos/800/400?random=2",
    "https://picsum.photos/800/400?random=3",
  ];

  return (
    <div className="Carusel-Home  p-3">
      {/* <hr class="featurette-divider" />
      <hr class="featurette-divider" /> */}


      <Carousel>
        {[...Array(3)].map((_, index) => (
          <Carousel.Item key={index}>
            {/* <span></span> */}
            <img
            id="carousel-img"
              className="d-block w-100"
              src={images[getRandomInt(images.length)]}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>
                Flooring <span style={{ color: "darkgrey" }}>makers</span>
              </h3>
              <p>
                This is an example of a caption that appears on top of the
                image.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;
