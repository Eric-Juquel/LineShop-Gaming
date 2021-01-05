import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import cartIcon from "../../images/icones/marketplace-drawing-clipart-4.png";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link className={classes.link} to="/products">
            SHOP
          </Link>
        </li>
        {!userInfo ? (
          <>
            <li className={classes.item}>
              <Link className={classes.link} to="#">
                REGISTER
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/login">
                LOGIN
              </Link>
            </li>
          </>
        ) : (
          <li className={classes.item}>
            <Link  to="/cart">
              <img className={classes.cart} src={cartIcon} alt="cart" />
            </Link>
            {/* {cart !== null && <div className={classes.qty}> {cart.length} </div>} */}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
