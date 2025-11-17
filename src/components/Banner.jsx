import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>Shop the Best Products</h1>
          <p>Trendy, affordable, and top quality – all in one place!</p>
          <button>Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
