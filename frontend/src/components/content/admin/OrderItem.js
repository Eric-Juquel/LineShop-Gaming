import React from "react";
import classes from "./OrderListScreen.module.scss";

const OrderItem = ({ order, orderDetail }) => {
  return (
    <div className={classes.row}>
      <div className={classes.cell}>{order._id}</div>
      <div className={classes.cell}>user</div>
      <div className={classes.cell}>date</div>
      <div className={classes.cell}>price</div>
      <div className={classes.cell}>paid</div>
      <div className={classes.cell}>delivered</div>
      <div className={classes.cell}>
        <button
          title="Edit User"
          className={classes.detail}
          onClick={() => orderDetail(`/order/${order._id}`)}
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
