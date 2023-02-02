import React from "react";
import Hero from "../components/Hero";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full bg-primary">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
