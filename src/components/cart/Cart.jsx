import React from "react";
import cartIcon from "../../assets/images/bag.svg";

export default function Cart() {
  return (
    <div className="cart__wrapper">
      <div className="cart__nav nav">
        <label htmlFor="dropdown-toggle" id="dropdown-toggle-label" style={{backgroundImage: `url(${cartIcon})`}}></label>
        <input type="checkbox" id="dropdown-toggle" />
        <div className="cart dropdown">
          <h1>Din beställning</h1>
          <div className="cart-item__wrapper">
            <div className="cart-item">
              <div className="cart-item__type">
                <h3>Bryggkaffe</h3>
                <span></span>
                <p>- 1 +</p>
              </div>
              <div className="cart-item__price">
                <p>39kr</p>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-item__type">
                <h3>Espresso</h3>
                <span></span>
                <p>- 1 +</p>
              </div>
              <div className="cart-item__price">
                <p>39kr</p>
              </div>
            </div>
            <div className="cart-total">
              <div className="cart-total__cost">
                <h3>Total</h3>
                <span></span>
                <h3>79kr</h3>
              </div>
              <div className="cart-total__label">
                <p>inkl moms + drönarleverans</p>
              </div>
            </div>
            {/* <div className="cart-total">
              <h2>Total</h2>
              <h2>78kr</h2>
              <p>inkl moms + drönarleverans</p>
            </div> */}
          </div>
          <button>Take my money!</button>
        </div>
      </div>
    </div>
  );
}