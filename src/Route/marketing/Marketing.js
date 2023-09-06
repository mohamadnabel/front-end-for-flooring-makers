import React from "react";
import "../marketing/Markting.css";
import Hospitall from "../assets/Hospital-Flooring.png";
function Marketing() {
  return (
    <div id="containerMarkiting" class="container marketing">
      <hr class="featurette-divider" />

      {/* <!-- Three columns of text below the carousel --> */}

      {/* <!-- START THE FEATURETTES --> */}
      <hr class="featurette-divider" />

      <h2 class="featurette-heading">
        What is <span class="text-muted">vinyl?</span>
      </h2>
      <p class="lead">
        Vinyl flooring is a popular choice for many gym, hospital, home and
        business owners due to its durability. It is made from a synthetic
        material called polyvinyl chloride (PVC) and is available in a wide
        range of colors, patterns and textures.
      </p>
      <hr class="featurette-divider" />
      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            One of its uses as well <br></br>
            <span class="text-muted">, In hospitals</span>
          </h2>
          <p class="lead">
            Vinyl flooring is a popular choice for <b>hospitals</b> due to its{" "}
            <b>
              durability, low maintenance, and resistance to moisture, bacteria,
            </b>
            and stains. It is also slip-resistant and easy to clean, making it a
            safe and hygienic option for healthcare facilities.
          </p>
        </div>

        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: "500px", height: "500px" }}
            src={Hospitall}
            data-holder-rendered="true"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it's that good.{" "}
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src="csaim"
            data-holder-rendered="true"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a646fe252%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a646fe252%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  );
}

export default Marketing;
