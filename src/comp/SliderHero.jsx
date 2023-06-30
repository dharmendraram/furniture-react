import React from "react";
import Sdata from "../data/Sdata";

const SliderHero = () => {
 
  return (
    <section className="hero">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {Sdata.slice(0, 1).map((a) => (
            <div className="carousel-item active">
              <img src={a.simg} className="d-block w-100" alt="..." />
            </div>
          ))}
          {Sdata.slice(1, 3).map((a) => (
             <div className="carousel-item">
            <img src={a.simg} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default SliderHero;
