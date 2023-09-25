import React from "react";
import Services from "../../components/Services/Services";
import MainSection from "../../components/Main/MainSection";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <About />
      <Services />
    </div>
  );
};

export default Home;
