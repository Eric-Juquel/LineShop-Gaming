import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./PaymentScreen.module.scss";
import CheckoutSteps from "./CheckoutSteps";
import { savePaymentMethod } from "../../../actions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <div className={classes.container} >
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Select Method</h2>
        <div className={classes.radioGroup}>
          <input
            type="radio"
            className={classes.input}
            id="paypal"
            name="PaymentMethod"
            value="PayPal"
            checked={paymentMethod === "PayPal"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="paypal" className={classes.label}>
            <span className={classes.radioButton}></span>
            PayPal or Credit Card
          </label>
        </div>
        <div className={classes.radioGroup}>
          <input
            type="radio"
            className={classes.input}
            id="stripe"
            name="PaymentMethod"
            value="Stripe"
            checked={paymentMethod === "Stripe"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="stripe" className={classes.label}>
            <span className={classes.radioButton}></span>
            Stripe
          </label>
        </div>
        <div className={classes.continue}>
          <button className={classes.btn} type="submit">
            <span className={classes.btn__visible}>Continue</span>
            <span className={classes.btn__invisible}>Place Order</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
