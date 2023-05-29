import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="footer-home">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
