import React from "react";
import Product from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div
        className="card text-white"
        style={{ height: "550px",
backgroundImage:"linear-gradient(to left, #f0f2f0, #000c40)",
backgroundImage: "linear-gradient(to top, rgba(62, 253, 9, 0.489), rgb(15, 45, 3))"
 }} 
      >
        {/* <img
          src="https://image.shutterstock.com/image-photo/shopaholic-seasonal-sales-concept-excited-600w-1612837594.jpg"
          className="card-img"
          alt="Background-Image"
          height="550px" />*/}

        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
