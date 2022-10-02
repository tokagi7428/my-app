import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartBox from "./components/cartBox/CartBox";
import Footer from "./components/footer/Footer";
import NavbarComponent from "./components/navbar/NavbarComponent";
import AboutUs from "./pages/aboutUs/AboutUs";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Payment from "./pages/payment/Payment";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import User from "./pages/user/User";

function App() {
  // console.log({ state });

  return (
    <div className="app">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <CartBox />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
