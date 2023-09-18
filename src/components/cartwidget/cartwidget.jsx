import React from "react";

const CartWidget = () => {
  return (
    <div className="ml-autok">
      <a to="/Cart" className="navbar-brand" href="#">
        <i className="fas fa-shopping-cart" style={{ color: "black" }}>
          <span className="span-icon" style={{ color: "black" }}>
            0
          </span>
        </i>
      </a>
    </div>
  );
};
export default CartWidget;