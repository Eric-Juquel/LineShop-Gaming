import React from "react";
import classes from "./Header.module.scss";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import UserAction from "./UserAction";

const Header = () => {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);

  return (
    <div className={classes.container}>
      <Logo />

      {screenWidth > 960 && <Navbar />}

      <Searchbar />

      <UserAction />
    </div>
  );
};

export default Header;
