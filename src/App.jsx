import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
