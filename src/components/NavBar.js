import React, { useState } from "react";
import Logo from "../Route/assets/logo fmic.png";

function NavBar() {
  // <div class="alert alert-success mt-2" role="alert">
  //               Send Email has been Successfully
  //             </div>
  const [email, setEmail] = useState("");
  function HandlerSubmit() {
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-success", "mt-2");
    alert.setAttribute("role", "alert");
    // I have just sent you an email with your download link. Check your inbox!

    alert.textContent =
      `I have just sent you an email at ${email.substring(0, 12)}` +
      "******" +
      "           . Check your inbox!";

    if (email.length >= 12) {
      const form = document.querySelector(".d-block.mt-3");
      form.appendChild(alert);
      setTimeout(() => {
        alert.remove(alert);
      }, 5000);
    } else {
      const alertF = document.createElement("div");
      alertF.classList.add("alert", "alert-danger", "mt-2");
      alertF.setAttribute("role", "alert");
      alertF.textContent = "Error";
      const form = document.querySelector(".d-block.mt-3");
      form.appendChild(alertF);

      setTimeout(() => {
        alertF.remove(alertF);
      }, 5000);
    }
  }

  //   function HandlerSubmit() {
  //     const alert = document.createElement("div");
  //     alert.classList.add("alert", "alert-success", "mt-2");
  //     alert.setAttribute("role", "alert");
  //     alert.textContent = `Send Email ${email} has been Successfully`;

  //     document.body.appendChild(alert);
  //   }

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Flooring Makers
          </a> */}
          <img
            style={{ borderRadius: "7px", width: "85px", height: "40px" }}
            src={Logo}
          />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Flooring Makers
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contacts Us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    know more !
                  </a>
                  <ul class="dropdown-menu dropdown-menu-light">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-block mt-3" role="switch">
                <label class="form-label">Join With Us</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  class="form-control me-2"
                  type="Email"
                  placeholder="Your Email Address"
                  aria-label="email"
                />

                <button
                  onClick={HandlerSubmit}
                  class="btn btn-success mt-2 w-100"
                  type="submit"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
