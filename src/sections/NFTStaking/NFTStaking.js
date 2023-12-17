import React from "react";
import "./NFTStaking.css";
import img from "../../assets/images/Mascot.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const nft_staking_list = [
  "Goto Bakso Mania Dashboard to view all your unstaked Bakso Maniacs.",
  "Choose the Bakso Maniacs you would like to stake.",
  "View estimated rewards for staking by duration.",
  "Click “Stake Bakso Maniac” and watch your NFTs earn for you !",
];

const NFTStaking = () => {
  return (
    <section className="buybaksoswap" id="docs">
      <div className="container">
        <div className="row">
          <div
            className=" d-flex align-items-center flex-column nftTitle"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <SectionTitle title="NFT STAKING" />
            <p>Earn $BAKSO with your inactive NFTs!</p>
          </div>
          <div className="col-lg-8 col-11 mx-auto d-flex flex-column justify-content-center">
            <div
              className="col-lg-6"
              data-aos="fade-down"
              data-aos-duration="700"
              data-aos-delay="1000"
            >
              <h3>STAKE YOUR BAKSO MANIACS FOR $BAKSO</h3>
            </div>
            <div className="list">
              {nft_staking_list.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay={`${
                    index === 0
                      ? "500"
                      : index === 1
                      ? "700"
                      : index === 2
                      ? "900"
                      : "1200"
                  }`}
                >
                  <div className="count">
                    <p>{index + 1}</p>
                  </div>
                  <div>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-4 d-flex justify-content-center align-items-center"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <img src={img} alt="maskot-bakso" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTStaking;
