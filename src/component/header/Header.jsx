import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import logo from '../../assets/images/eco-logo.png';
import user from '../../assets/images/user-icon.png';

const nav__links = [
    {
        display: 'Home',
        path: 'home',
    },
    {
        display: 'Shop',
        path: 'shop',
    },
    {
        display: 'Cart',
        path: 'cart',
    },
];

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="header__nav d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Link to="/home">
                                <img src={logo} alt="logo" />
                                <div>
                                    <h1>Maltimart</h1>
                                </div>
                            </Link>
                        </div>

                        {/* Menu */}
                        <div className="navigation">
                            <div className="menu d-flex align-items-center gap-5">
                                {nav__links.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        className={(navClass) => (navClass.isActive ? 'active__menu' : '')}
                                    >
                                        {item.display}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="navbar__icon">
                            <span className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className="cart__icon">
                                <i className="ri-briefcase-3-line"></i>
                                <span className="badge">1</span>
                            </span>
                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={user} alt="user" />
                            </span>
                            <span className="mobile__menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
