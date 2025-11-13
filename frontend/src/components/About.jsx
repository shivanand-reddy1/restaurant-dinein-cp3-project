import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Dine District, where flavor meets comfort in every bite. Our café blends modern dining with warm hospitality, creating a space where good food and great conversations come together. From handcrafted beverages to freshly made meals, every dish is prepared with care and creativity. At Dine District, we believe dining is more than eating—it’s an experience to be shared and remembered. Step inside, unwind, and discover your new favorite spot for indulgence, connection, and taste that truly delights the senses.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
