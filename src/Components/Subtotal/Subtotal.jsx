import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => {
          basket.length === 0
            ? alert("No items in cart")
            : navigate("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
