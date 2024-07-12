import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";
import { useEffect } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.jsx";
import Payment from "./Components/Payment/Payment.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Pb6HtRxUlNo5otWJnTGuH3nGRupT2N71JCN4BUSOrUGzWwMyyyYzd3sge0vobhYtj0dYNOjY1U2WEI1gTJgEaoF00bPpF6p51"
);

function Main() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
