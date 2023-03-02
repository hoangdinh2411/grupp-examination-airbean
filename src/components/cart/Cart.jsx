import React from "react";
import cartIcon from "../../assets/images/bag.svg";
import Button from '../../components/Button'

export default function Cart() {
  const order = [
    {
      id: "coffee-vxig26my4y",
      title: "Bryggkaffe",
      price: 39,
      quantity: 5,
    },
    {
      id: "coffee-4pdksmrkfa",
      title: "Cappuccino",
      price: 49,
      quantity: 3,
    },
  ];
 
  function increaseQuantity() {
    console.log('increaseQuantity');
  }

  function decresseQuantity() {
    console.log('decresseQuantity');
  }

  function calculateTotalCost() {
    let totalCost = 0;
    for (let i = 0; i < order.length; i++) {
      totalCost += order[i].price * order[i].quantity;
    }
    return totalCost;
  }

  function calculateTotalQuantity() {
    let totalQuantity = 0;
    for (let i = 0; i < order.length; i++) {
      totalQuantity += order[i].quantity;
    }
    return totalQuantity;
  }

  function renderCartItems() {
    return order.map((item) => {
      return (
        <div className="cart-item" key={item.id}>
          <div className="cart-item__type">
            <h3 className="cart-item__type-label">{item.title}</h3>
            <span className="dots"></span>
            <Button onClick={decresseQuantity} variant='dark' className='cart-item__button-minus'>-</Button>
            <p className="cart-item-quantity-label">{item.quantity}</p>
            <Button onClick={increaseQuantity} variant='dark' className='cart-item__button-plus'>+</Button>
          </div>
          <div className="cart-item__price">
            <p className="cart-item__price-label">{item.price * item.quantity}kr ({item.price}kr per st)</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="cart__wrapper">
      <div className="cart__nav nav">
        <label htmlFor="dropdown-toggle" id="dropdown-toggle-label" style={{backgroundImage: `url(${cartIcon})`}}></label>
        <input type="checkbox" id="dropdown-toggle" />
        <div className="cart__total-quantity">
          {calculateTotalQuantity()}
        </div>
        <div className="cart dropdown">
          <h1>Din beställning</h1>
          <div className="cart-item__wrapper">
            {renderCartItems()}
            <div className="cart-total">
              <div className="cart-total__cost">
                <h3>Total</h3>
                <span className="dots"></span>
                <h3>{calculateTotalCost()}kr</h3>
              </div>
              <div className="cart-total__sub">
                <p className="cart-total__sub-label">inkl moms + drönarleverans</p>
              </div>
            </div>
          </div>
          <button>Take my money!</button>
        </div>
      </div>
    </div>
  );
}