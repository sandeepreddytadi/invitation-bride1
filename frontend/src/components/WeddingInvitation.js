import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PhotoGallery from "./PhotoGallery";
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";
import Footer from "./Footer";

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-amber-100">
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="gallery">
        <PhotoGallery />
      </div>
      <div id="countdown">
        <CountdownTimer />
      </div>
      <Footer />
    </div>
  );
};

export default WeddingInvitation;