import React from "react";
import { Link } from "react-router-dom";
import classes from "./CheckoutSteps.module.scss";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          {step1 ? (
            <Link className={classes.link} to="/login">
              Sign In
            </Link>
          ) : (
            <Link className={classes.link} disabled>
              Sign In
            </Link>
          )}
        </li>
        <hr />
        <li className={classes.item}>
          {step2 ? (
            <Link className={classes.link} to="/shipping">
              Shipping
            </Link>
          ) : (
            <Link className={classes.link} disabled>
              Shipping
            </Link>
          )}
        </li>
        <hr />
        <li className={classes.item}>
          {step3 ? (
            <Link className={classes.link} to="/payment">
              Payment
            </Link>
          ) : (
            <Link className={classes.link} disabled>
              Payment
            </Link>
          )}
        </li>
        <hr />
        <li className={classes.item}>
          {step4 ? (
            <Link className={classes.link} to="/placeorder">
              Place Order
            </Link>
          ) : (
            <Link className={classes.link} disabled>
              Place Order
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default CheckoutSteps;
