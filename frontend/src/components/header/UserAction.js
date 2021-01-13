import React from "react";
import { useSelector } from "react-redux";
import classes from "./UserAction.module.scss";
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
              { label: "users", path: "/admin/userlist" },
              { label: "products", path: "/admin/productlist" },
              { label: "orders", path: "/admin/orderlist" },
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
