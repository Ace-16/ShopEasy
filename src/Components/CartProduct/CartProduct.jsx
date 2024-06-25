import React from "react";

import "./CartProduct.css";
import { useStateValue } from "../../StateProvider";
import { type } from "@testing-library/user-event/dist/type";

const Star = () => <span>⭐</span>;

const CartProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} />
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {Array.from({ length: rating }, (_, i) => (
            <Star />
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CartProduct;
