import React from "react";
import Services from "../../components/Services/Services";
import MainSection from "../../components/Main/MainSection";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
