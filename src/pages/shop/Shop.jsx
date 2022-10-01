import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Shop.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import searchImg from '../../assets/images/search.png';

import CommonSection from '../../component/UI/commoSection/CommonSection';
import Helmet from '../../component/Helmet/Helmet';

import product from '../../assets/data/products';
import ProductList from '../../component/UI/producList/ProductList';

import useDebounce from '../../component/hooks/useDebounce';

const Shop = () => {
    const [productData, setProductData] = useState(product);
    // value search
    const [searchValue, setSearchValue] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    const [loading, setLoading] = useState(false);
    const focusRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    // truyền 2 giá trị kể event loop nếu thay nổi nó sẻ tắt loading
    useEffect(() => {
        setLoading(false);
        setProductData(productData);
    }, [productData, debounced]);

    // Paginnate
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;

    // filter section type product
    const HandleFilter = (e) => {
        const value = e.target.value;
        if (value === 'all') {
            setProductData(product);
        }
        if (value === 'sofa') {
            const filterProducts = product.filter((item) => item.category === 'sofa');
            setProductData(filterProducts);
        }

        if (value === 'mobile') {
            const filterProducts = product.filter((item) => item.category === 'mobile');
            setProductData(filterProducts);
        }

        if (value === 'chair') {
            const filterProducts = product.filter((item) => item.category === 'chair');
            setProductData(filterProducts);
        }

        if (value === 'watch') {
            const filterProducts = product.filter((item) => item.category === 'watch');
            setProductData(filterProducts);
        }

        if (value === 'wireless') {
            const filterProducts = product.filter((item) => item.category === 'wireless');
            setProductData(filterProducts);
        }
    };

    // filter Sort section type product
    const HandleSort = (e) => {
        const sortValue = e.target.value;
        if (sortValue === 'ascending') {
            const sortProduct = productData.concat().sort((a, b) => a.id - b.id);
            setProductData(sortProduct);
        }
        if (sortValue === 'decreasing') {
            const reverseProduct = productData.concat().reverse((a, b) => a.id - b.id);
            setProductData(reverseProduct);
        }
    };

    // // Search product
    const HandleChange = (e) => {
        const value = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(value);
            setLoading(true);
        }
        return;
    };

    const HandleCloseValue = () => {
        setSearchValue('');
        focusRef.current.focus();
    };

    // display paginate
    const displayPage = productData.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(productData.length / productPerPage);

    // get results from the search value
    const searchProducts = displayPage.filter((item) => {
        if (debounced.value === '') {
            return item;
        }

        if (item.productName.toLowerCase().includes(debounced.toLowerCase())) {
            return item;
        } else {
            return null;
        }
    });

    const changedPages = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title="Shop">
            <CommonSection title="Products" image={searchImg} />

            <section className="section__filter">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <div className="filter__products">
                                <select onChange={HandleFilter}>
                                    <option value="all">Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="filter__sort">
                            <div className="filter__products">
                                <select onChange={HandleSort}>
                                    <option>Sort By </option>
                                    <option value="ascending">Ascending</option>
                                    <option value="decreasing">Decreasing</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="search__products">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Search....."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        ref={focusRef}
                                        value={searchValue}
                                        onChange={HandleChange}
                                    />
                                    {!!searchValue && !loading && (
                                        <span className="icon" onClick={HandleCloseValue}>
                                            <i className="ri-close-line"></i>
                                        </span>
                                    )}

                                    {loading && (
                                        <span className="icon loading">
                                            <i className="ri-loader-2-fill"></i>
                                        </span>
                                    )}

                                    <InputGroup.Text id="basic-addon2">
                                        <i className="ri-search-line"></i>
                                    </InputGroup.Text>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        {searchProducts.length === 0 ? (
                            <h1 className="not__product-text text-center fs-3">
                                No Products Are Found!
                                <i className="ri-emotion-sad-line "></i>
                            </h1>
                        ) : (
                            <ProductList data={searchProducts} />
                        )}

                        {/* PAGINATE */}
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changedPages}
                                previousLabel="Prev"
                                nextLabel="Next"
                                containerClassName="paginate-btns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
