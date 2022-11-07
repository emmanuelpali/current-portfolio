import React from "react";
import Intro from "../Intro";
import About from "../About";
import Portfolio from "../Portfolio";
import Footer from "../Footer";
import "./index.scss";

const Home = () => {
  return (
    <div className="main">
      <About />
      <Intro />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
