import React from "react";

// Page sections
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";
import About from "../components/About/About";
import Events from "../components/Events/Events";
import Internship from "../components/Internship/Internship";
import LiveGuidance from "../components/LiveGuidance/LiveGuidance";
import Testimonial from "../components/Testimonial/Testimonial";
import Blog from "../components/Blog/Blog";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <section className="home-page">
        <Banner />
        <Category />
        <About />
        <Events />
        <Internship />
        <LiveGuidance />
        <Testimonial /> 
        <Blog />
        <Newsletter />
    </section>
  );
};

export default Home;