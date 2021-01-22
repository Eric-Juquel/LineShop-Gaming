import React from "react";
import Meta from "../Meta";
import classes from "./Carousel3d.module.scss";
import teken7 from "../../images/carousel/1200px-Tekken_7_Logo.svg.png";
import zelda from "../../images/carousel/1200px-The_Legend_of_Zelda_Breath_of_the_Wild_Logo.png";
import cyberpunk from "../../images/carousel/6964887_preview.png";
import ark from "../../images/carousel/ark-server-png-4.png";
import battlefield from "../../images/carousel/Battlefield-V-icon-download.png.webp";
import diablo from "../../images/carousel/diablo-3-logo-png-1.png";

const Carousel3d = () => {
  return (
    <>
      <Meta />
      <div className={classes.carousel3d}>
        <div className={classes.allPlan}>
          <div data-content="ombre" className={classes.p1}>
            <img src={teken7} alt="Teken-7" />
          </div>
          <div data-content="ombre" className={classes.p2}>
            <img src={zelda} alt="Zelda" />
          </div>
          <div data-content="ombre" className={classes.p3}>
            <img src={cyberpunk} alt="Cyberpunk-2077" />
          </div>
          <div data-content="ombre" className={classes.p4}>
            <img src={ark} alt="Ark" />
          </div>
          <div data-content="ombre" className={classes.p5}>
            <img src={battlefield} alt="battelfield-V" />
          </div>
          <div data-content="ombre" className={classes.p6}>
            <img src={diablo} alt="diablo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel3d;
