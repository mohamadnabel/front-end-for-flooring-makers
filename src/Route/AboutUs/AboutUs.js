import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../AboutUs/AboutUs.css";
function AboutUs() {
  return (
    <div id="Main-About">
      <div class="row m-4">
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
            risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
            cursus magna.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        {/* /<!-- /.col-lg-4 --> */}
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
    </div>
  );
}

export default AboutUs;
