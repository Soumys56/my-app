import React from "react";
import "./Header.css";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg" />
      </div>
      <div className="input">
        <div className="serch_logo">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <input
          placeholder="Serach for products,Brands and more"
          className="input_Section"
        />
      </div>
      <div className="profile_section">
        <CgProfile />
        <p>Soumya Bera</p>
      </div>
      <div className="cart-section">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
        <p>Cart</p>
      </div>
      <div className="seller">
        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        <p>Become a Seller</p>
      </div>
    </div>
  );
};

export default Header;
