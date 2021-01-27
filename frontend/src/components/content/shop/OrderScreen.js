import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderScreen.module.scss";
import ErrorComponent from "../../ErrorComponent";
import Spinner from "../../Spinner";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../../../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../../../constants/orderConstants";

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      console.log(clientId);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || order._id !== orderId || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay, successDeliver, userInfo, history]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const successDeliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return error ? (
    <ErrorComponent err={error} />
  ) : loading ? (
    <Spinner />
  ) : (
    <div className={classes.container}>
      <h1>
        Order <span>{order._id}</span>
      </h1>
      <div className={classes.content}>
        <div className={classes.orderShipping}>
          <h2>Shipping</h2>
          <div className={classes.contact}>
            <strong>Contact: </strong> {order.user.firstName}{" "}
            {order.user.lastName}
            <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
          </div>
          <div className={classes.address}>
            <strong>Address: </strong>
            {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
            {order.shippingAddress.postalCode},{" "}
            {order.shippingAddress.country.label.toUpperCase()}
          </div>
          {order.isDelivered ? (
            <div className={classes.statusSuccess}>
              Delidery on{" "}
              <Moment format="YYYY/MM/DD">{order.deliveredAt}</Moment>
            </div>
          ) : (
            <div className={classes.statusDanger}>
              {loadingDeliver ? <Spinner /> : "Not Delivered"}
            </div>
          )}
        </div>
        <div className={classes.orderPayment}>
          <h2>Payment Method</h2>
          <p>
            <strong>Method:</strong>
            {order.paymentMethod}
          </p>
          {order.isPaid ? (
            <div className={classes.statusSuccess}>
              Paid on <Moment format="YYYY/MM/DD">{order.paidAt}</Moment>{" "}
            </div>
          ) : (
            <div className={classes.statusDanger}>Not Paid</div>
          )}
        </div>

        <div className={classes.order}>
          <h2>Order Items</h2>
          <div className={classes.items}>
            {order.orderItems.length === 0 ? (
              <p>Order is empty</p>
            ) : (
              order.orderItems.map((item) => (
                <div key={item.product} className={classes.item}>
                  <img src={item.image} alt={item.name} />
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  <p>
                    {item.qty} x {item.price} € ={" "}
                    <span>
                      {new Intl.NumberFormat().format(item.qty * item.price)} €
                    </span>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={classes.summary}>
          <div className={classes.card}>
            <div>
              <h5>Order Summary</h5>
            </div>
            <div>
              <label>Items :</label>
              <p>{new Intl.NumberFormat().format(order.itemsPrice)} €</p>
            </div>
            <div>
              <label>Shipping :</label>
              <p>{order.shippingPrice} €</p>
            </div>
            <div>
              <label>Tax :</label>
              <p>{order.taxPrice} €</p>
            </div>
            <div>
              <label>Total :</label>
              <p>{new Intl.NumberFormat().format(order.totalPrice)} €</p>
            </div>
          </div>
        </div>
        {!order.isPaid && (
          <div className={classes.paypalBtn}>
            {loadingPay && <Spinner />}
            {!sdkReady ? (
              <Spinner />
            ) : (
              <PayPalButton
                amount={order.totalPrice}
                onSuccess={successPaymentHandler}
              />
            )}
          </div>
        )}

        {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
          <button className={classes.deliver} onClick={successDeliverHandler}>
            Mark As Delivered
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderScreen;
