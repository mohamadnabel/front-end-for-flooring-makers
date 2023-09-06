import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../AboutUs/AboutUs.css";
import SupplyM from "../assets/supply.jpg";
import Instullation from "../assets/installtion.jpg";
import Selflevel from "../assets/self-level (2).jpg";
function AboutUs() {
  return (
    <div id="Main-About">
      <div class="row m-4">
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src={SupplyM}
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Material Supply</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh.
          </p>
          <p>
            {/* <a class="btn btn-secondary" href="#" role="button">
              Contact Us »
            </a> */}
          </p>
          <hr class="featurette-divider" />
          <hr class="featurette-divider" />
        </div>
        {/* /<!-- /.col-lg-4 --> */}
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src={Instullation}
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Installation</h2>
          <p>
            Vinyl flooring installation involves preparing the subfloor,
            acclimating the flooring, installing underlayment, installing the
            flooring, and finishing the edges.
          </p>
          <p>
            {/* <a class="btn btn-secondary" href="#" role="button">
              Contact Us »
            </a> */}
          </p>
          <hr class="featurette-divider" />
          <hr class="featurette-divider" />
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src={Selflevel}
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Self-Level</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh.
          </p>
          <div >
            <p>
              <a id="btn-aboutUs" class="btn btn-secondary" href="#" role="button">
                View details »
              </a>
            </p>
          </div>
          <hr class="featurette-divider" />
          <hr class="featurette-divider" />
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
    </div>
  );
}

export default AboutUs;
