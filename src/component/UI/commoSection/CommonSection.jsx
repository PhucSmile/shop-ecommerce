import React from 'react';
import PropTypes from 'prop-types';
import './CommonSection.scss';

import Container from 'react-bootstrap/Container';

const CommonSection = ({ title, image }) => {
    return (
        <section className="common__section" style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

CommonSection.propTypes = {
    title: PropTypes.string,
    image: PropTypes.node,
};

export default CommonSection;
