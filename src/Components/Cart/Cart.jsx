import React from "react";

import "./Cart.css";
import Subtotal from "../Subtotal/Subtotal.jsx";
import CartProduct from "../CartProduct/CartProduct.jsx";
import { useStateValue } from "../../StateProvider.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          {user ? <h3>Hello, {user?.email}</h3> : ""}
          <h1 className="cart__title">
            Your shopping basket{basket.length === 0 ? " is Empty" : ""}
          </h1>
          {basket.map((item, index) => (
            <CartProduct
              key={`${item.id}-${index}`}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          <Link to={"/"}>
            <button className="cart__addons">Add more items?</button>
          </Link>
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
