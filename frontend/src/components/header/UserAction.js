import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./UserAction.module.scss";
import cartIcon from "../../images/icones/marketplace-drawing-clipart-4.png";
import DropdownButton from "./DropdownButton";

const UserAction = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className={classes.actionContainer}>
      {!userInfo ? (
        <nav className={classes.navigation}>
          <ul className={classes.list}>
            <li className={classes.userCart}>
              <Link to="/cart">
                <img className={classes.cart} src={cartIcon} alt="cart" />
                {cart !== null && (
                  <div className={classes.qty}>
                    {" "}
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </div>
                )}
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/register">
                REGISTER
              </Link>
            </li>
            <li className={classes.item}>
              <Link className={classes.link} to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div className={classes.userLoged}>
          <div className={classes.userCart}>
            <Link to="/cart">
              <img className={classes.cart} src={cartIcon} alt="cart" />
              {cart !== null && (
                <div className={classes.qty}>
                  {" "}
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </div>
              )}
            </Link>
          </div>
          <div className={classes.admin}>
            {userInfo && userInfo.isAdmin ? (
              <DropdownButton
                label={"Admin"}
                options={[
                  { label: "users", path: "/admin/userlist" },
                  { label: "products", path: "/admin/productlist" },
                  { label: "orders", path: "/admin/orderlist" },
                ]}
              />
            ) : (
              <div className={classes.empty}></div>
            )}
          </div>
          <div className={classes.user}>
            <DropdownButton
              label={`Hello ${userInfo.firstName}`}
              options={[
                { label: "profile", path: "/profile" },
                { label: "logout", path: "/logout" },
              ]}
            />
          </div>

          <div className={classes.avatar}>
            <Link to={"/profile"}>
              {userInfo && userInfo.avatar ? (
                <img
                  src={userInfo.avatar}
                  alt="avatar"
                  title={`${userInfo.firstName} profile`}
                />
              ) : (
                <div className={classes.noAvatar}>
                  {userInfo.firstName.substring(0, 1)}{" "}
                  {userInfo.lastName.substring(0, 1)}
                </div>
              )}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAction;
