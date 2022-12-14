import React, { useEffect, useState } from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

import Helmet from '../../component/Helmet/Helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Services from '../../component/services/Services';
import ProductList from '../../component/UI/producList/ProductList';
import Clock from '../../component/UI/clock/Clock';

import heroImg from '../../assets/images/hero-img.png';
import countTimeImg from '../../assets/images/counter-timer-img.png';
import product from '../../assets/data/products';

import { motion } from 'framer-motion';

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const year = new Date().getFullYear();

    // API
    useEffect(() => {
        const filteredTrendingProducts = product.filter((product) => product.category === 'chair');
        const filteredBestSalerProducts = product.filter((product) => product.category === 'sofa');
        const filteredMobileProducts = product.filter((product) => product.category === 'mobile');
        const filteredWirelessProducts = product.filter((product) => product.category === 'wireless');
        const filteredPopularProducts = product.filter((product) => product.category === 'watch');

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalerProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);

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
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="section__title">Trending Products</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            {/* Best sales */}
            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="section__title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            {/* Time Count */}
            <section className="time__count">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="clock__content">
                                <h4>Limited Offers</h4>
                                <h3>Quantity Armchair</h3>
                                <Clock />
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn btn__clock">
                                    <Link to="/shop">Visit Store</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg={6} md={12} className="text-end">
                            <img src={countTimeImg} alt="Time Count" className="count__img" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* New Arrivals */}
            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="section__title">New Arrivals</h2>
                        </Col>
                        <ProductList data={mobileProducts} />
                        <ProductList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            {/*Popular Category */}
            <section className="popular__category">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="section__title">Popular in Category</h2>
                        </Col>
                        <ProductList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
