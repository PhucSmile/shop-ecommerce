import React from 'react';
import PropTypes from 'prop-types';

import './ProductCart.scss';
import { motion } from 'framer-motion';
import Col from 'react-bootstrap/Col';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cartSlice';

const ProductCart = ({ item }) => {
    const dispatch = useDispatch();

    const HandleAddCart = () => {
        dispatch(
            cartActions.addCart({
                id: item.id,
                productName: item.productName,
                image: item.imgUrl,
                price: item.price,
            }),
        );
        toast.success('Product added to successfully');
    };

    return (
        <Col lg={3} md={4} sm={6} className="mb-2">
            <div className="product__item">
                <div className="product__img">
                    <Link to={`/shop/${item.id}`}>
                        <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="Product-Item" />
                    </Link>
                </div>

                <div className="product__info p-2">
                    <h3 className="product__name">
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                    <div className="product__item-bottom d-flex justify-content-between align-align-items-center p-2">
                        <span className="price">${item.price}</span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={HandleAddCart}>
                            <i className="ri-add-line"></i>
                        </motion.span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

ProductCart.propTypes = {
    item: PropTypes.object.isRequired,
};

export default ProductCart;
