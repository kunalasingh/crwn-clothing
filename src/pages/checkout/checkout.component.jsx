import React from "react";
import "./checkout.styles.scss";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = () => {
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const checkoutItems = cartItems.map((item) => (
    <CheckoutItem key={item.id} cartItem={item} />
  ));
  return (
    <div className="checkout-page">
      <CheckoutHeader />
      {checkoutItems}
      <div className="total">
        <span>Total : ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments
        <br />
        4242 4242 4242 4242 - Exp 01/50 - CVV 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
