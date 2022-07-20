import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <div>
      <Carousel>
        <div className="bg-white flex gap-8">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            quam?
          </div>

          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            quam?
          </div>

          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
            quam?
          </div>
          {/* <p className="legend">Legend 1</p> */}
        </div>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          quam?
          {/* <img src="assets/2.jpeg" /> */}
          {/* <p className="legend">Legend 2</p> */}
        </div>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          quam?
          {/* <img src="assets/3.jpeg" /> */}
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
