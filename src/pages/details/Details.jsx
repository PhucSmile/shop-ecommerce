import React, { useEffect, useState } from 'react';
import './Details.scss';

import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Helmet from '../../component/Helmet/Helmet';
import CommonSection from '../../component/UI/commoSection/CommonSection';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import commonImg from '../../assets/images/common.png';

import products from '../../assets/data/products';
import { useParams } from 'react-router-dom';
import ProductList from '../../component/UI/producList/ProductList';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/slices/cartSlice';

const Details = () => {
    const [tab, setTab] = useState('desc');
    const [nameValue, setNameValue] = useState('');
    const [rating, setRating] = useState(null);
    const [contentValue, setContentValue] = useState('');
    const userFeedback = [];
    const dispatch = useDispatch();

    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    // related
    const relatedProduct = products.filter((item) => item.category === product.category);

    const { productName, category, imgUrl, price, avgRating, reviews, shortDesc, description } = product;

    const addCart = () => {
        dispatch(
            cartActions.addCart({
                id: id,
                productName: productName,
                image: imgUrl,
                price: price,
            }),
        );
        toast.success('Product added to successfully');
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        setNameValue('');

        setContentValue('');

        const feedback = {
            name: nameValue,
            rating: rating,
            review: contentValue,
        };
        userFeedback.push(feedback);
        console.log(userFeedback);
        toast.success('Success Thanks You');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title="Detail">
            <CommonSection title={category} image={commonImg} />

            <section className="detail pt-0">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={imgUrl} alt="img-product" />
                        </Col>
                        <Col lg={6}>
                            <div className="product__detail">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-fill"></i>
                                        </span>
                                        <span>
                                            <i className="ri-star-half-fill"></i>
                                        </span>
                                    </div>
                                    <p>
                                        (<span>{avgRating}</span> Ratings)
                                    </p>
                                </div>

                                <div className="d-flex align-items-center gap-5">
                                    <span className="product__price">${price}</span>
                                    <span>Category: {category.toUpperCase()}</span>
                                </div>
                                <p className="mt-3">{shortDesc}</p>

                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addCart}>
                                    Add to Cart
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section__tab">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="tab__wrap d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>
                                    Description
                                </h6>
                                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}>
                                    Reviews ({reviews.length})
                                </h6>
                            </div>

                            {tab === 'desc' ? (
                                <div className="tab__content mt-5">
                                    <p>{description}</p>
                                </div>
                            ) : (
                                <div className="section__tab">
                                    <div className="review__wrap mt-5">
                                        <ul>
                                            {reviews?.map((item, index) => (
                                                <li key={index}>
                                                    <h6>Eric</h6>
                                                    <span>{item.rating}(Rating)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="reviews__form">
                                            <h4>Leave your experience</h4>
                                            <form className="form__submit" onSubmit={HandleSubmit}>
                                                <div className="form__group">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        required
                                                        value={nameValue}
                                                        onChange={(e) => setNameValue(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form__group rating__group d-flex align-items-center gap-3">
                                                    <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(1)}>
                                                        1<i className="ri-star-fill"></i>
                                                    </motion.span>
                                                    <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(2)}>
                                                        2<i className="ri-star-fill"></i>
                                                    </motion.span>
                                                    <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(3)}>
                                                        3<i className="ri-star-fill"></i>
                                                    </motion.span>
                                                    <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(4)}>
                                                        4<i className="ri-star-fill"></i>
                                                    </motion.span>
                                                    <motion.span whileTap={{ scale: 1.3 }} onClick={() => setRating(5)}>
                                                        5<i className="ri-star-fill"></i>
                                                    </motion.span>
                                                </div>

                                                <div className="form__group">
                                                    <textarea
                                                        type="text"
                                                        placeholder="Enter your reviews message..."
                                                        rows={4}
                                                        required
                                                        value={contentValue}
                                                        onChange={(e) => setContentValue(e.target.value)}
                                                    />
                                                </div>
                                                <button type="submit" className="buy__btn">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>

                        <Col lg={12} className="mt-5">
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductList data={relatedProduct} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Details;
