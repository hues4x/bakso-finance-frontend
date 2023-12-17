import React from "react";
import "./Footer.css";
import fb from "../../assets/images/icons/fb.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import telegram from "../../assets/images/icons/telegram.svg";
import reddit from "../../assets/images/icons/reddit.svg";
import tictok from "../../assets/images/icons/tictok.svg";
import discord from "../../assets/images/icons/discord.svg";
import youtube from "../../assets/images/icons/youtube.svg";
import medium from "../../assets/images/icons/medium.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto socialMedia">
            <div className="singleMediaCard mx-auto">
              <a href="https://www.tiktok.com/@baksoswap?" target="blank">
                <img src={tictok} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://www.instagram.com/baksoswap/" target="blank">
                <img src={instagram} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://www.reddit.com/r/BaksoSwap/" target="blank">
                {" "}
                <img src={reddit} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://www.facebook.com/baksoswap" target="blank">
                {" "}
                <img src={fb} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://discord.gg/AMW2qQsVTK" target="blank">
                {" "}
                <img src={discord} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://twitter.com/BaksoSwap" target="blank">
                {" "}
                <img src={twitter} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a
                href="https://www.youtube.com/channel/UCH-ogsGjAtpy-mLTv0JFRdw"
                target="blank"
              >
                {" "}
                <img src={youtube} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://t.me/baksoswap" target="blank">
                {" "}
                <img src={telegram} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
            <div className="singleMediaCard mx-auto">
              <a href="https://medium.com/@baksoswap" target="blank">
                <img src={medium} alt="socialIcon" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="col-lg-10 mx-auto copyRight">
            <p>
              Copyright &copy; {new Date().getFullYear()} BAKSO.FINANCE | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
