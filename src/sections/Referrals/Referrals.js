import React, { useEffect, useState } from "react";
import "./Referrals.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import arrow_right_1 from "../../assets/images/icons/arrow_right_1.svg";
import arrow_right_2 from "../../assets/images/icons/arrow_right_2.svg";
import arrow_right_3 from "../../assets/images/icons/arrow_right_3.svg";
import arrow_right_4 from "../../assets/images/icons/arrow_right_4.svg";
import gift from "../../assets/images/gift.png";

const referral_ul_li_items = [
  {
    img: arrow_right_1,
    text: "Connect your wallet to generate a unique referral link.",
  },
  {
    img: arrow_right_2,
    text: "Share the link with friends and family.",
  },
  {
    img: arrow_right_3,
    text: "You’ll receive 1% on all rewards of anyone using your link to join / create Arisan.",
  },
  {
    img: arrow_right_4,
    text: "Get 25 people to use your link and receive Bakso Tokens!",
  },
];

const Referrals = () => {
  const [giftbox, setGiftBox] = useState(0);
  useEffect(() => {
    const width = window.innerWidth;
    setGiftBox(width);
  }, []);

  return (
    <section className="referrals">
      <div className="referall_container">
        <div className="container">
          <div className="row">
            <div
              className="d-flex justify-content-center align-items-center flex-column"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="1000"
            >
              <SectionTitle title="REFERRALS" />
              <div className="referrals_text_and_ref d-flex flex-column align-items-center">
                <p>Earn Bakso Tokens for sharing!</p>
                <a href="/" target="blank">
                  reference.bakso.finance
                </a>
              </div>
            </div>
            <div className="referral_ul_li">
              <ol>
                {referral_ul_li_items.map((item, index) => (
                  <li
                    key={index}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay={`${
                      index === 0
                        ? "500"
                        : index === 1
                        ? "700"
                        : index === 2
                        ? "900"
                        : "1100"
                    }`}
                  >
                    <img src={item.img} alt="arrow" />
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div>
          {giftbox > 1200 && <img src={gift} alt="gift" className="gift_box" />}
        </div>
      </div>
    </section>
  );
};

export default Referrals;
