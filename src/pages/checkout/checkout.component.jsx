import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <CheckoutHeader />
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
