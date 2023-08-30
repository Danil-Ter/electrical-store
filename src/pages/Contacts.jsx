import React from "react";
import Info from "../Components/Info";
import Cart from "../Components/Cart";
import CartMini from "../Components/Mini-Cart";
import "../styles/contact.css";

function contacts() {
  return (
    <div className="Contacts">
      <Info />
      <Cart />
      <CartMini />
    </div>
  );
}

export default contacts;
