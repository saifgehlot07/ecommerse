import React from "react";

import heroImg from "../assets/hero-img.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="h-screen w-full p-10 flex justify-between items-center mix-blend-multiply"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex justify-between items-center">
        <div className="w-2/4">
          <h1>Efficient supply chain limitless growth</h1>
          <p>
            Join Aksum Trademart in revolutionizing the way we handle supply
            chain operations and simplify commerce for Small and Medium
            Enterprises and Corporates.
          </p>
          <div className="action-btn">
            <button>Sign-up</button>
            <button>Sign-in</button>
          </div>
        </div>
        <div>
          <img className="w-2/4" src={heroImg} alt="products" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
