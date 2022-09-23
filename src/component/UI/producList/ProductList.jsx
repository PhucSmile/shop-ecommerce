import React from 'react';
import './ProductList.scss';

import ProductCart from '../productCart/ProductCart';

const ProductList = () => {
    return (
        <>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
        </>
    );
};

export default ProductList;
