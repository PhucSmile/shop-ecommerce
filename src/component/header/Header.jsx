import React, { useRef, useState, useEffect } from 'react';
import './Header.scss';
import { motion } from 'framer-motion';

import { NavLink, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import logo from '../../assets/images/eco-logo.png';
import userImg from '../../assets/images/user-icon.png';

import { toast } from 'react-toastify';
import Tippy from '@tippyjs/react/headless';

import { useSelector } from 'react-redux';

import { auth } from '../../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/slices/userSlice';

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
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const [stickyScroll, setStickyScroll] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const dispatch = useDispatch();

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                dispatch(
                    userActions.login({
                        displayName: currentUser.displayName,
                        email: currentUser.email,
                        photoURL: currentUser.photoURL,
                    }),
                );
            } else {
                dispatch(userActions.logout());
            }
        });

        return () => {
            unSubscribed();
        };
    }, [dispatch]);

    const HandleLogOut = async () => {
        try {
            await signOut(auth);
            toast.success('Successfully logout ');
        } catch (error) {
            toast.success(error.message);
        }
    };

    window.onscroll = () => {
        setStickyScroll(window.scrollY > 80 ? true : false);
        // clearUp
        return () => window.onscroll(null);
    };

    const menuToggle = () => {
        menuRef.current.classList.toggle('active__menu');
    };

    const navigateToCart = () => {
        navigate('/cart');
    };

    return (
        <header className={`header ${stickyScroll ? 'sticky-scroll' : ''}`}>
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
                        <div className="navigation" ref={menuRef}>
                            <div className="navigation__overlay" onClick={menuToggle}></div>
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
                            <motion.span whileTap={{ scale: 1.2 }} className="fav__icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">1</span>
                            </motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} className="cart__icon">
                                <i className="ri-briefcase-3-line" onClick={navigateToCart}></i>
                                {totalQuantity >= 1 ? <span className="badge">{totalQuantity}</span> : null}
                            </motion.span>
                            <div className="profile">
                                <Tippy
                                    // inertia
                                    interactive
                                    delay={[0, 700]}
                                    placement="bottom"
                                    render={(attrs) => (
                                        <div className="user__list" tabIndex="-1" {...attrs}>
                                            <div className="user__items d-flex flex-column gap-1 ">
                                                {user?.email ? (
                                                    <>
                                                        <span onClick={HandleLogOut}>Logout</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>
                                                            <Link to="/login">Login</Link>
                                                        </span>
                                                        <span>
                                                            <Link to="/register">Register</Link>
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.2 }}
                                        src={user?.photoURL ? user.photoURL : userImg}
                                        alt="user"
                                    />
                                </Tippy>
                            </div>
                            <span className="mobile__menu">
                                <i className="ri-menu-line" onClick={menuToggle}></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
