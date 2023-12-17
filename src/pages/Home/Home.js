import React from "react";
import Header from "../../components/Header/Header";
import About from "../../sections/About/About";
import BuyBaksoSwap from "../../sections/NFTStaking/NFTStaking";
import Footer from "../../sections/Footer/Footer";
import HeaderMain from "../../sections/HeaderMain/HeaderMain";
import Timeline from "../../sections/Roadmap/Roadmap";
import Product from "../../sections/Product/Product";
import Arisan from "../../sections/Arisan/Arisan";
import Referrals from "../../sections/Referrals/Referrals";
import BaksoMania from "../../sections/BaksoMania/BaksoMania";

const Home = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <About />
      <Product />
      <Timeline />
      <Arisan />
      <Referrals />
      <BaksoMania />
      <BuyBaksoSwap />
      <Footer />
    </>
  );
};

export default Home;
