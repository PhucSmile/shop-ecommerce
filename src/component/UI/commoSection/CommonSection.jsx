import React from 'react';
import PropTypes from 'prop-types';
import './CommonSection.scss';

import Container from 'react-bootstrap/Container';

const CommonSection = ({ title }) => {
    return (
        <section className="common__section">
            <Container className="text-center">
                <h1>{title}</h1>
            </Container>
        </section>
    );
};

CommonSection.propTypes = {
    title: PropTypes.string,
};

export default CommonSection;
