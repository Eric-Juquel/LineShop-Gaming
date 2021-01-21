import React from "react";
import classes from "./Header.module.scss";

import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./SearchBar";
import UserAction from "./UserAction";

const Header = () => {
  return (
    <div className={classes.container}>
      <Logo />

      <Navbar />

      <Searchbar />

      <UserAction />
    </div>
  );
};

export default Header;
