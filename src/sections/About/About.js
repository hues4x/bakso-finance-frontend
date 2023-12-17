import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 col-11 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="1500"
          >
            <h1>
              #1 ARISAN ON <br />
              SOLANA BLOCKCHAIN
            </h1>
            <p>
              MICROFINANCE ON <span>SOLANA BLOCKCHAIN</span>{" "}
            </p>
            <a href="/" target="blank" className="primaryBtn about">
              Launch App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
