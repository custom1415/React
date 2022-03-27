import React, { useState } from "react";
import "./Navbar.styles.scss";
import { BiBox, BiCart, BiSearchAlt } from "react-icons/bi";
import { connect } from "react-redux";
import { toggleSearch } from "../../redux/Search/Search.actions";

function Navbar({ isSearchBoxHidden }) {
  const navLinks = ["home", "shop", "blog", "contact"];
  return (
    <section className="navbar">
      <div className="logo__container">
        <div className="logo__icon">
          <BiBox />
        </div>
        <p className="logo__name">Chor bazaar</p>
      </div>
      <div className="links__container">
        <ul className="nav__links">
          {navLinks.map((link, i) => {
            return (
              <li key={i} className={link}>
                {link}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cart__container">
        <BiSearchAlt onClick={isSearchBoxHidden} />
        <div className="cart__icon">
          <BiCart />
        </div>
      </div>
    </section>
  );
}
const mapDispatchToProps = (dispatch) => ({
  isSearchBoxHidden: () => dispatch(toggleSearch()),
});
export default connect(null, mapDispatchToProps)(Navbar);
