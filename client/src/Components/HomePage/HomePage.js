import React from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import HowToUse from "../HowToUse/HowToUse";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
};

export default HomePage;
