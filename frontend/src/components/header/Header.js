import React from "react";
import classes from "./Header.module.scss";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import UserAction from "./UserAction";

const Header = () => {
  const screenWidth = window.innerWidth;

  return (
    <div className={classes.container}>
      <Logo />

      <div className={classes.navigation}>
        <Navbar />
      </div>

      <Searchbar />

      <UserAction />
    </div>
  );
};

export default Header;
