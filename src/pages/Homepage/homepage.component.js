import React, { useState } from "react";
import Cardlist from "../../components/Cardlist/Cardlist.component";
import Navbar from "../../components/Navbar/Navbar.component";
import { toggleSearch } from "../../redux/Search/Search.actions";
import { connect } from "react-redux";
import CheckoutPage from "../Checkout/checkout.page";
function Homepage({ toggle }) {
  return (
    <div className="homepage">
      <Navbar />
      <Cardlist />
      <CheckoutPage/>
    </div>
  );
}
const mapD = (d) => ({
  toggle: () => d(toggleSearch()),
});
export default connect(null, mapD)(Homepage);
