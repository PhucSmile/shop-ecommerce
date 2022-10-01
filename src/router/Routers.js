import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import Cart from '../pages/cart/Cart';
import Details from '../pages/details/Details';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Checkout from '../pages/checkout/Checkout';

import ProtectedRouter from '../component/hooks/ProtectedRouter';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />;
            <Route path="/home" element={<Home />} />;
            <Route path="shop" element={<Shop />} />;
            <Route path="cart" element={<Cart />} />;
            <Route path="shop/:id" element={<Details />} />;
            <Route path="login" element={<Login />} />;
            <Route path="register" element={<Register />} />;
            <Route
                path="checkout"
                element={
                    <ProtectedRouter>
                        <Checkout />
                    </ProtectedRouter>
                }
            />
            ;
        </Routes>
    );
};

export default Routers;
