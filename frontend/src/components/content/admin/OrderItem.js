import React from "react";
import classes from "./OrderListScreen.module.scss";
import Moment from "react-moment";
import { GiSplitCross } from "react-icons/gi";

const OrderItem = ({ order, orderDetail }) => {

    console.log('order', order) 
  return (
    <div className={classes.row}>
      <div className={classes.cell}>{order._id}</div>
      <div className={classes.cell}>{order.user && order.user.firstName}{' '}{order.user && order.user.lastName}</div>
      <div className={classes.cell}>
        <Moment format="YYYY/MM/DD">{order.createdAt}</Moment>
      </div>
      <div className={classes.cell}>
        {new Intl.NumberFormat().format(order.totalPrice)}
      </div>
      <div className={classes.cell}>
        {order.isPaid ? (
          <Moment format="YYYY/MM/DD">{order.paidAt}</Moment>
        ) : (
          <GiSplitCross />
        )}
      </div>
      <div className={classes.cell}>
        {order.isDelivered ? (
          <Moment format="YYYY/MM/DD">{order.deliveredAt}</Moment>
        ) : (
          <GiSplitCross />
        )}
      </div>
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
