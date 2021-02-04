import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navigationContainer}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link className={classes.link} to="/products">
              SHOP
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.link} to="/gallery">
              GALLERY
            </Link>
          </li>
          <li className={`${classes.item} ${classes.mobile}`}>
            <Link className={classes.link} to="/register">
              REGISTER
            </Link>
          </li>
          <li className={`${classes.item} ${classes.mobile}`}>
            <Link className={classes.link} to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
