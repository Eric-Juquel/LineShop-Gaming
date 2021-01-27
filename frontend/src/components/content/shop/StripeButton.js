import React from "react";
import logo from '../../../images/logo/logo2.png'
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price, email}) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IEAPiDtfwWjTe2zQakBH416tdNbfW2Ys1rPVO9KZECDmb5IiloffWlBHxwwmZxZ9vCGR8fx6XzpBm45EICiYyGZ00X5AODGAa";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="LineShop Gaming"
      image={logo}
      shippingAddress 
      email={email}
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
