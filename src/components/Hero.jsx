import React from "react";

import heroImg from "../assets/hero-img.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div
        className="h-screen w-full p-10 flex justify-between bg-primary items-center mix-blend-multiply"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="w-2/4">
            <h1 className="text-light-green text-6xl leading-12 pb-2 font-Montserrat">
              Efficient supply chain limitless
              <span className="text-green pl-2">growth</span>
            </h1>
            <p className="text-light-gray font-Montserrat leading-17">
              Join Aksum Trademart in revolutionizing the way we handle supply
              chain operations and simplify commerce for Small and Medium
              Enterprises and Corporates.
            </p>
            <div className="action-btn pt-5">
              <button className="bg-orange mr-4 text-light-gray h-12 px-14 rounded-3xl">
                Sign-up
              </button>
              <button className="bg-transparent text-light-gray h-12 px-14 rounded-3xl border-2 border-orange">
                Sign-in
              </button>
            </div>
          </div>
          <div className="right-img w-2/5">
            <img className="w-full" src={heroImg} alt="products" />
            <div className="w-20 bg-green h-12 absolute top-25"></div>
          </div>
        </div>
      </div>
      <div className="p-10 block justify-between">
        <h1 className="text-white text-2xl border-b-2 border-green w-max pb-2">
          What We Do
        </h1>
        <p className="text-white pt-3">
          As India’s first B2B ScaaS platform we assist SME’ s and corporates
          build in sufficient flexibility in their supply chain processes by
          developing a framework that helps them plan & execute their
          procurement operations and working capital management in a more
          efficient and flexible manner.
        </p>
      </div>
    </>
  );
};

export default Hero;
