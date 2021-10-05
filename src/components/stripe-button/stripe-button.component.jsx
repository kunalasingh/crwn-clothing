import React from "react";
import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablKey =
    "pk_test_51JhGAKSJ7pOqcIpkPqe4DqLp8AgP69kHoecHaKLUt7qtCXugcK6tz9aVgjgCORhWwSEpX6IDv4cEKbfiNMMmYFOd00N5wppkZD";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablKey}
    />
  );
};

export default StripeCheckoutButton;
