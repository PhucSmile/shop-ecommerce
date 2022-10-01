import React from 'react';
import './Checkout.scss';

import checkoutImg from '../../assets/images/checkoutpng.webp';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Helmet from '../../component/Helmet/Helmet';
import CommonSection from '../../component/UI/commoSection/CommonSection';

import { useSelector } from 'react-redux';

const Checkout = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmout = useSelector((state) => state.cart.totalAmount);

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" image={checkoutImg} />

            <section>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h6 className="mb-4 fw-bold">Billing Information</h6>
                            <Form className="billing__form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="number" placeholder="Phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Street address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>
                                <button type="submit" className="buy__btn mt-2">
                                    Submit
                                </button>
                            </Form>
                        </Col>
                        <Col lg={4}>
                            <div className="checkout__cart">
                                <h6>
                                    Total Quantity: <span>{totalQuantity}</span>
                                </h6>
                                <h6>
                                    Total Amount: <span>${totalAmout}</span>
                                </h6>
                                <h6>
                                    Shipping: <br />
                                    Free shipping<span>$0</span>
                                </h6>

                                <h4>
                                    Total Cost <span>${totalAmout}</span>
                                </h4>

                                <button className="buy__btn auth__btn w-100">Place an order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;
