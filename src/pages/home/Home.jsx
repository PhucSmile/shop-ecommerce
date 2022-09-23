import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

import Helmet from '../../component/Helmet/Helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Services from '../../component/services/Services';
import ProductList from '../../component/UI/producList/ProductList';

import heroImg from '../../assets/images/hero-img.png';

import { motion } from 'framer-motion';

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title="Home">
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending product in {year}</p>
                                <h2>Make Your Interior More Minimalistic & Modern</h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum mollitia ab non
                                    nobis velit eligendi blanditiis deleniti neque doloremque?
                                </p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                                    <Link to="/shop">SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="hero__img">
                                <img src={heroImg} alt="images product" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services */}
            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductList />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
