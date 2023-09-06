import React, { useState } from "react";
import {
  faEnvelope,
  faInstagram,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FooterPage() {
  const [showPhoneNo, setShowPhoneNo] = useState(false);
  const onClickShowPhoneNo = () => {
    setShowPhoneNo(true);
  };
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg class="bi" width="30" height="24"></svg>
            </a>
            <span class="mb-3 mb-md-0 text-body-secondary">
              © 2023 Company, Inc
            </span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  class="bi"
                  width="24"
                  height="24"
                >
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                </svg>
              </a>
            </li>

            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg
                  onClick={(e) => {
                    e.preventDefault();
                    onClickShowPhoneNo();
                  }}
                  class="bi"
                  width="24"
                  height="24"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-body-secondary" href="#">
                <svg
                  onMouseOver={(e) => {
                    onClickShowPhoneNo();
                    e.preventDefault();
                  }}
                  class="bi"
                  width="24"
                  height="24"
                >
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
