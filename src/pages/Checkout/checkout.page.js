import React from "react";
import { connect } from "react-redux";

const Checkout = ({ cartItems }) => {
  return (
    <>
    jhi
    </>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});
export default connect(mapStateToProps)(Checkout);
