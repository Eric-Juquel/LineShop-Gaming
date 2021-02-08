import React, { useState } from "react";
import classes from "./Footer.module.scss";
import { FcCopyright } from "react-icons/fc";

const Footer = () => {
  const [active, setActive] = useState(true);

  return (
    <div className={classes.container}>
      {active === true ? (
        <div className={classes.demo}>
        <div className={classes.marquee}>
          <p>This is a DEMO store for testing e-commerce fullStack MERN project using modern React Hooks - Redux - Sass - Flex - Grid , full responsive ...</p>
          </div>
        <button onClick={() => setActive(false)}>X</button>
        </div>
      ) : (
        <p className={classes.copyright}>
          <FcCopyright /> Copyright 2021 by Eric Juquel.Feel free to use this
          project for your own purposes, but NOT to claim it as your own design.
          A credit to the original author, Eric Juquel, is of course highly
          appreciated!
        </p>
      )}
    </div>
  );
};

export default Footer;
