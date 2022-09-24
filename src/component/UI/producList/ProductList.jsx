import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.scss';

import ProductCart from '../productCart/ProductCart';

const ProductList = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <ProductCart key={index} item={item} />
            ))}
        </>
    );
};

ProductList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ProductList;
