import React from 'react';
import './Footer.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={6} className="mb-4">
                        <div className="logo text-center">
                            <h1>Maltimart</h1>
                        </div>
                        <p className="footer__desc mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sunt vel atque,
                            asperiores incidunt non distinctio praesentium repudiandae aut autem dolorem. Soluta quaerat
                            sapiente a?
                        </p>
                    </Col>
                    <Col lg={3} md={3} className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className="mb-3">
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="#">Mobile Phones</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="#">Arm Chair</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="#">Smart Watches</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={2} md={3} className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">UseFul Links</h4>
                            <ListGroup className="mb-3">
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="/shop">Shop</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="/cart">Cart</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="/login">Login</Link>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0">
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={3} md={4} className="mb-4">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
                            <ListGroup className="mb-3">
                                <ListGroup.Item className="fs-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                    </span>
                                    <p>District 7, Hồ Chí Minh City</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-phone-line"></i>
                                    </span>
                                    <p>0333475095</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="fs-0 border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>
                                    <p>mrphuc48@gmail.com</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Row>
                        <Col lg={6} md={6} sm={6}>
                            <p className="footer__copyright">
                                Copyright - {year}, website made by Thành Phúc. All Rights Reserved.
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className="footer__follow d-flex align-items-center justify-content-end gap-3">
                                <p className="m-0">Follow:</p>
                                <span>
                                    <a href="https://www.facebook.com/profile.php?id=100030760065201">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/PhucSmile?tab=repositories">
                                        <i className="ri-github-line"></i>
                                    </a>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
