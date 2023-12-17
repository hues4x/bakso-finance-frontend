import React from "react";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Product.css";

const Product = () => {
  return (
    <section className={`product`} id="products">
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div
            className="d-flex justify-content-center flex-column align-items-center col-lg-7"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1000"
            data-aos-offset="200"
          >
            <SectionTitle title="our products" />
            <div className="prod_detail">
              <p>
                A diverse suite of microfinance products & games running on
                SOLANA BLOCKCHAIN
              </p>
            </div>
          </div>
          <div
            className={`column col-lg-6 col-md-8 col-1}`}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <div className="products">
              <button className={`productBtn`}>ARISAN</button>
              <button className={`productBtn`}>REFERRALS</button>
              <button className={`productBtn`}>SOUP KITCHEN</button>
              <button className={`productBtn`}>LAUNCH PAD</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bgContainer">
        <img src={bg1} alt="bg" className="bg1" />
        <img src={bg2} alt="bg" className="bg2" />
      </div>
    </section>
  );
};

export default Product;
