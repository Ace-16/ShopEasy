import React from "react";

import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../CartProduct/CartProduct";

const Payment = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket.length} items)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items in delivery</h3>
          </div>
          <div className="payment__items">
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
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">{/* strpie */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
