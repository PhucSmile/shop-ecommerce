import React, { useState } from 'react';
import './Login.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Helmet from '../../component/Helmet/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../component/UI/loading/Loading';

import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            setLoading(false);
            toast.success('Successfully login ');
            navigate('/home');
        } catch (error) {
            setLoading(false);
            setError(error.message);
            toast.error(error.message);
        }
    };

    return (
        <Helmet title="Login">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg={12}>
                                <Loading />
                            </Col>
                        ) : (
                            <Col lg={6} className="m-auto text-center">
                                <h3 className="fw-bold fs-4 mb-4">Login</h3>
                                <Form className="form__login" onSubmit={login}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    {error ? <p className="error">{error}</p> : null}

                                    <button type="submit" className="buy__btn auth__btn mt-3">
                                        Login
                                    </button>
                                    <p>
                                        Don't have an account ?. <Link to="/register">Create an account</Link>
                                    </p>
                                </Form>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Login;
