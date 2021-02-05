import React, { useState } from "react";
import classes from "./BurgerNavigation.module.scss";
import Navbar from "./Navbar";

const BurgerNavigation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.container}>
      <input
        id="navi"
        type="checkbox"
        className={classes.checkbox}
        checked={isChecked}
        readOnly
      />
      <label htmlFor="navi" className={classes.btn} onClick={checkHandler}>
        <span className={classes.icon}>&nbsp;</span>
      </label>
      <div className={classes.background}>&nbsp;</div>
      <div className={classes.navbar}>
        <Navbar setIsChecked={setIsChecked} />
      </div>
    </div>
  );
};

export default BurgerNavigation;
