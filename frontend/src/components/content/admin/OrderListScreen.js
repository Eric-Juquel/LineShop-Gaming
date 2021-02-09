import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderListScreen.module.scss";
import Spinner from "../../Spinner";
import ErrorComponent from "../../ErrorComponent";
import OrderItem from "./OrderItem";
import { listOrders } from "../../../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const onDetail = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Orders</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorComponent err={error} />
      ) : (
        <div className={classes.ordersTable}>
          <div className={classes.entitled}>
            <h4 className={classes.cell}>ID</h4>
            <h4 className={classes.cell}>USER</h4>
            <h4 className={classes.cell}>DATE</h4>
            <h4 className={classes.cell}>TOTAL</h4>
            <h4 className={classes.cell}>PAID</h4>
            <h4 className={classes.cell}>DELIVERED</h4>
            <h4 className={classes.cell}> </h4>
          </div>

          <div className={classes.items}>
            {orders.map((order) => (
              <OrderItem key={order._id} order={order} orderDetail={onDetail} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderListScreen;
