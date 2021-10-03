import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

import { selctCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selctCartItems(state),
});
export default connect(mapStateToProps, null)(CartDropDown);
