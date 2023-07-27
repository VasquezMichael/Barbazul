import React from "react";
import Hero from "../Hero";
import AboutUsWithCarrousel from "../AboutUs-Carrousel";
import { Home } from "./style.js";
import OurServices from "../OurServices";
import OurTeam from "../OurTeam";
import OurJobs from "../OurJobs";
import Footer from "../Footer";
const HomePage = () => {
  return (
    <Home>
      <section id="hero">
        <Hero />
      </section>

      <section id="about-me">
        <AboutUsWithCarrousel />
      </section>
      <section id="servicios">
        <OurServices />
      </section>
      <section id="our-team">
        <OurTeam />
      </section>
      <section id="our-jobs">
        <OurJobs />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </Home>
  );
};

export default HomePage;
