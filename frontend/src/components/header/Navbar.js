import { set } from "mongoose";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = ({ setIsChecked = null }) => {
  return (
    <div className={classes.navigationContainer}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link
              className={classes.link}
              to="/products"
              onClick={
                setIsChecked &&
                (() => {
                  setIsChecked(false);
                })
              }
            >
              SHOP
            </Link>
          </li>
          <li className={classes.item}>
            <Link
              className={classes.link}
              to="/gallery"
              onClick={
                setIsChecked &&
                (() => {
                  setIsChecked(false);
                })
              }
            >
              GALLERY
            </Link>
          </li>
          <li
            className={`${classes.item} ${classes.mobile}`}
            onClick={
              setIsChecked &&
              (() => {
                setIsChecked(false);
              })
            }
          >
            <Link className={classes.link} to="/register">
              REGISTER
            </Link>
          </li>
          <li
            className={`${classes.item} ${classes.mobile}`}
            onClick={
              setIsChecked &&
              (() => {
                setIsChecked(false);
              })
            }
          >
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
