import React from "react";
import Cimage1 from "../../assets/images/C-image-1.jpeg";
import Cimage2 from "../../assets/images/C-image-2.jpeg";
import Cimage3 from "../../assets/images/C-image-3.jpeg";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Cimage1} class="w-100" alt="model-deck"></img>
          </div>
          <div class="carousel-item">
            <img src={Cimage2} class="w-100" alt="model-fireplace"></img>
          </div>
          <div class="carousel-item">
            <img
              src={Cimage3}
              class="w-100"
              alt="model-front-view-driveway"
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
