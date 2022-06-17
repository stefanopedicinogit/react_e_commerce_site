import React, { useState } from 'react';
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Slider from "../../components/Slider/Slider.js";
import Hero from "../../components/Hero/Hero.js"
import coffee from "../../assets/coffee.jpg"
import coffee2 from "../../assets/coffee2.jpg"
import coffee3 from "../../assets/coffee3.jpg"

function Home() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={coffee} />
      <Slider
        imageSrc={coffee2}
        title={"Title."}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lectus et elit volutpat accumsan"
        }
      />
      <Slider
        imageSrc={coffee3}
        title={"Title."}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lectus et elit volutpat accumsan"}
        flipped={true}
      />
    </div>
  );
}

export default Home;
