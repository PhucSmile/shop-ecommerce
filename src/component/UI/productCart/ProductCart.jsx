import React from 'react';
import './ProductCart.scss';
import { motion } from 'framer-motion';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

import Product from '../../../assets/images/single-sofa-01.jpg';

const ProductCart = () => {
    return (
        <Col lg={3} md={4}>
            <div className="product__item">
                <div className="product__img">
                    <Link to="/shop/id">
                        <motion.img whileHover={{ scale: 0.9 }} src={Product} alt="Product-Item" />
                    </Link>
                </div>

                <div className="product__info p-2">
                    <h3 className="product__name">
                        <Link to="/shop/id">Modern armchair</Link>
                    </h3>
                    <span>Chair</span>
                    <div className="product__item-bottom d-flex justify-content-between align-align-items-center p-2">
                        <span className="price">$299</span>
                        <motion.span whileTap={{ scale: 1.2 }}>
                            <i class="ri-add-line"></i>
                        </motion.span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ProductCart;
