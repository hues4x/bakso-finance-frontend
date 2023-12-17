import React from "react";
import "./Arisan.css";

import deposit from "../../assets/images/icons/deposit.svg";
import earn from "../../assets/images/icons/earn.svg";
import collect from "../../assets/images/icons/collect.svg";
import simple from "../../assets/images/simple.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const cardList = [
  {
    img: deposit,
    title: "Deposit",
    text: "Join or create an Arisan cycle by depositing money with friends or even strangers on Bakso Finance.",
  },
  {
    img: earn,
    title: "Earn",
    text: "Earn interest on your money and receive Bakso Token rewards the longer you stay in the Arisan cycle.",
  },
  {
    img: collect,
    title: "Collect",
    text: " Collect your rewards anytime during the cycle, remove your deposit once the cycle is done. Feel free to create or join a new cycle!",
  },
];

const Arisan = () => {
  return (
    <section className="arisan">
      <div className="container">
        <div className="row">
          <div
            className="d-flex justify-content-center flex-column align-items-center"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            <div>
              <img src={simple} alt="simple" className="simpleImg" />
            </div>
            <SectionTitle title="arisan" />
            <div className="arisan_text">
              <p>Earn while you save!</p>
            </div>
          </div>
          <div className="arisan_card_deck">
            {cardList.map((item, index) => (
              <div
                className="arisan_card"
                key={index}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={`${
                  index === 0 ? "500" : index === 1 ? "800" : "1100"
                }`}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img src={item.img} alt="imges" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arisan;
