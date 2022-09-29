import React from 'react';
import PropTypes from 'prop-types';

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

// ProductList.propTypes = {
//     data: PropTypes.node.isRequired,
// };

export default ProductList;
