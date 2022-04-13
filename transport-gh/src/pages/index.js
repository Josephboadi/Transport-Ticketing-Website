import React, { useState } from "react";

import HeroSection from "../components/HeroSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import InfoSection1 from "../components/InfoSection1";
// import Contact from "../components/ContactSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
// import Accordion from "../components/Accordian";
import Dropdown from "../components/Dropdown";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [isDrop, setIsDrop] = useState(false);
  const Droptoggle = () => {
    setIsDrop(!isDrop);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Dropdown isDrop={isDrop} Droptoggle={Droptoggle} />
      <Navbar toggle={toggle} Droptoggle={Droptoggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection1 {...homeObjTwo} />
      <Services />
      {/* <Contact /> */}
      {/* <Accordion /> */}
      <Footer />
    </>
  );
};

export default Home;
