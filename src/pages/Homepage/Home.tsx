import React from "react";
import Services from "../../components/Services/Services";
import MainSection from "../../components/Main/MainSection";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import styles from "./Home.module.sass";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <MainSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
