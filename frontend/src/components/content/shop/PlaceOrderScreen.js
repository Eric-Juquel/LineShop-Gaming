import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./PlaceOrderScreen.module.scss";
import ErrorComponent from "../../ErrorComponent";
import CheckoutSteps from "./CheckoutSteps";
import { createOrder } from "../../../actions/orderActions";
import { ORDER_CREATE_RESET } from '../../../constants/orderConstants'
import { USER_DETAILS_RESET } from '../../../constants/userConstants'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }

  // Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice =
    cart.itemsPrice > 100 ? 0 : cart.itemsPrice === 0 ? 0 : 15;
  cart.taxPrice = addDecimals(Number(0.15 * cart.itemsPrice).toFixed(2));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return error ? (
    <ErrorComponent err={error} />
  ) : (
    <div className={classes.container}>
      <CheckoutSteps step1 step2 step3 step4 />

      <div className={classes.content}>
        <div className={classes.shipping}>
          <h2>Shipping</h2>
          <p>
            <strong>Address: </strong>
            {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
            {cart.shippingAddress.postalCode},{" "}
            {cart.shippingAddress.country.label.toUpperCase()}
          </p>
        </div>
        <div className={classes.payment}>
          <h2>Payment Method</h2>
          <p>
            <strong>Method:</strong>
            {cart.paymentMethod}
          </p>
        </div>
        <div className={classes.order}>
          <h2>Order Items</h2>
          <div className={classes.items}>
            {cart.cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.cartItems.map((item) => (
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
              <p>{new Intl.NumberFormat().format(cart.itemsPrice)} €</p>
            </div>
            <div>
              <label>Shipping :</label>
              <p>{cart.shippingPrice} €</p>
            </div>
            <div>
              <label>Tax :</label>
              <p>{cart.taxPrice} €</p>
            </div>
            <div>
              <label>Total :</label>
              <p>{new Intl.NumberFormat().format(cart.totalPrice)} €</p>
            </div>
            <div>
              <button
                disabled={cart.cartItems.length === 0}
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
