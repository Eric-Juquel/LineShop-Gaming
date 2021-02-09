import { set } from "mongoose";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { useSelector } from "react-redux";

const Navbar = ({ setIsChecked = null }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  return (
    <div className={classes.navigationContainer}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          {isAdmin === false ? (
            <>
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
              {!userInfo ? (
                <>
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
                </>
              ) : (
                <>
                  {userInfo.isAdmin && (
                    <li className={`${classes.item} ${classes.mobile}`}>
                      <Link
                        className={classes.link}
                        to="#"
                        onClick={() => setIsAdmin(true)}
                      >
                        ADMIN
                      </Link>
                    </li>
                  )}
                  <li
                    className={`${classes.item} ${classes.mobile}`}
                    onClick={
                      setIsChecked &&
                      (() => {
                        setIsChecked(false);
                      })
                    }
                  >
                    <Link className={classes.link} to="/profile">
                      PROFILE
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
                    <Link className={classes.link} to="/logout">
                      LOGOUT
                    </Link>
                  </li>
                </>
              )}
            </>
          ) : (
            <>
              <li
                className={`${classes.item} ${classes.mobile}`}
                onClick={
                  setIsChecked &&
                  (() => {
                    setIsChecked(false);
                  })
                }
              >
                <Link
                  className={classes.link}
                  to="/admin/userlist"
                  onClick={() => {
                    setTimeout(() => {
                      setIsAdmin(false);
                    }, 500);
                  }}
                >
                  USERS
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
                <Link
                  className={classes.link}
                  to="/admin/productlist"
                  onClick={() => {
                    setTimeout(() => {
                      setIsAdmin(false);
                    }, 500);
                  }}
                >
                  PRODUCTS
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
                <Link
                  className={classes.link}
                  to="/admin/orderlist"
                  onClick={() => {
                    setTimeout(() => {
                      setIsAdmin(false);
                    }, 500);
                  }}
                >
                  ORDERS
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
