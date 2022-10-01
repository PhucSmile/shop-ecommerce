import React from 'react';
import './Cart.scss';

import cartImg from '../../assets/images/cart.png';
import { motion } from 'framer-motion';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

import Helmet from '../../component/Helmet/Helmet';
import CommonSection from '../../component/UI/commoSection/CommonSection';

import { cartActions } from '../../store/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmout = useSelector((state) => state.cart.totalAmount);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const HandleCheckout = () => {
        if (!user) {
            toast.warn('Please login to checkout');
        } else {
            navigate('/checkout');
        }
    };

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" image={cartImg}></CommonSection>

            <section className="section__cart">
                <Container>
                    <Row>
                        <Col lg={9}>
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center">No item added to the cart</h2>
                            ) : (
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <Tr item={item} key={index} />
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Col>
                        <Col lg={3}>
                            <div className="cart__checkout">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Total quantity:</h6>
                                    <span>{totalQuantity}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Subtotal:</h6>
                                    <span>${totalAmout}</span>
                                </div>
                                <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>

                                <div>
                                    <motion.button
                                        whileTap={{ scale: 1.2 }}
                                        className="buy__btn w-100 "
                                        onClick={HandleCheckout}
                                    >
                                        Checkout
                                    </motion.button>
                                </div>

                                <div>
                                    <motion.button whileTap={{ scale: 1.2 }} className="buy__btn w-100 mt-3">
                                        <Link to="/shop">Continue Shopping</Link>
                                    </motion.button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({ item }) => {
    const dispatch = useDispatch();

    const HandleDelete = () => {
        dispatch(cartActions.deleteCart(item.id));
    };

    // Increase
    const handleIncrease = () => {
        dispatch(
            cartActions.addCart({
                id: item.id,
                productName: item.productName,
                imgUrl: item.imgUrl,
                price: item.price,
            }),
        );
    };

    // Decrease
    const HandleDecrease = () => {
        dispatch(cartActions.removeCart({ id: item.id }));
    };
    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="product" />
            </td>
            <td>{item.productName}</td>
            <td>
                <span>${item.price}</span>
            </td>
            <td>
                <div className=" d-flex justify-content-center align-items-center ">
                    <motion.span whileTap={{ scale: 1.3 }}>
                        <i class="ri-subtract-line" onClick={HandleDecrease}></i>
                    </motion.span>
                    <span>{item.quantity}pcs</span>
                    <motion.span whileTap={{ scale: 1.3 }}>
                        <i class="ri-add-line" onClick={handleIncrease}></i>
                    </motion.span>
                </div>
            </td>
            <td>
                <motion.span whileTap={{ scale: 1.3 }}>
                    <i className="ri-delete-bin-line" onClick={() => HandleDelete()}></i>
                </motion.span>
            </td>
        </tr>
    );
};

export default Cart;
