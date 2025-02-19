import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart-icon-container">
      <div className="cart-icon" onClick={toggleCart}>
        <FaShoppingCart />
        {cart.length > 0 && (
          <span className="cart-badge">{cart.length}</span>
        )}
      </div>
      {isOpen && (
        <div className="cart-dropdown">
          <h2>Shopping Cart</h2>

      {cart.length === 0 ? <p>Cart is empty.</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
        </div>
      )}
    </div>

  );
};

export default Cart;
