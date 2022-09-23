import React from 'react';
import './Home.scss';

import Helmet from '../../component/Helmet/Helmet';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title="Home">
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending product in {year}</p>
                                <h2>Make Your Interrior More Minimalistic & Modern</h2>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            1 of 1
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;
