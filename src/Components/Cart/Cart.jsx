import "./Cart.css";

import Subtotal from "../Subtotal/Subtotal.jsx";
import CartProduct from "../CartProduct/CartProduct.jsx";
import { useStateValue } from "../../StateProvider.jsx";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisement"
        />
        <div>
          <h1 className="cart__title">Your shopping basket</h1>

          {basket.map((item) => (
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
