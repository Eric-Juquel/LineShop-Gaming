import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./UserAction.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../images/avatars/index.jpg";
import DropdownButton from "./DropdownButton";

const UserAction = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        {userInfo ? (
          <DropdownButton
            label={`Hello ${userInfo.firstName}`}
            options={[
              { label: "profile", path: "/profile" },
              { label: "logout", path: "/logout" },
            ]}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.admin}>
        {userInfo && userInfo.isAdmin ? (
          <DropdownButton
            label={"Admin"}
            options={[
              { label: "users", path: "/admin/userList" },
              { label: "orders", path: "/admin/orderList" },
              { label: "products", path: "/admin/productList" },
            ]}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.avatar}>
        {userInfo && (
          <img
            src={avatar}
            alt="avatar"
            title={`${userInfo.firstName} profile`}
          />
        )}
      </div>
    </div>
  );
};

export default UserAction;
