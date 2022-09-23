import React from 'react';
import './Services.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

import serviceData from '../../assets/data/serviceData';

const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    {serviceData.map((item, index) => (
                        <Col lg={3} md={4} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="services__item"
                                style={{ backgroundColor: `${item.bg}` }}
                            >
                                <span>
                                    <i class={item.icon}></i>
                                </span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
