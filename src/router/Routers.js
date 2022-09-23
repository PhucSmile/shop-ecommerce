import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Details from '../pages/details/Details';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Checkout from '../pages/checkout/Checkout';

const Routers = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="" element={<Navigate to="/" />} />; */}
                <Route path="/" element={<Home />} />;
                <Route path="shop" element={<Shop />} />;
                <Route path="cart" element={<Cart />} />;
                <Route path="shop/:id" element={<Details />} />;
                <Route path="login" element={<Login />} />;
                <Route path="register" element={<Register />} />;
                <Route path="checkout" element={<Checkout />} />;
            </Routes>
        </Router>
    );
};

export default Routers;
