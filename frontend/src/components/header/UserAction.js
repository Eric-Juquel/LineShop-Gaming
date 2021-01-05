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
      <div className={classes.action}>
        {userInfo ? (
          <DropdownButton
            label={`Hello ${userInfo.firstName}`}
            options={["profile", "logout"]}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.admin}>
        {userInfo && userInfo.isAdmin ? (
          <DropdownButton
            label={"Admin"}
            options={["users", "orders", "products"]}
          />
        ) : (
          ""
        )}
      </div>
      <div className={classes.avatar}>
        <img
          src={avatar}
          alt="avatar"
          title={`${userInfo.firstName} profile`}
        />
      </div>
    </div>
  );
};

export default UserAction;
