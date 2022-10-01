import React, { useState } from 'react';
import './Register.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Helmet from '../../component/Helmet/Helmet';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Loading from '../../component/UI/loading/Loading';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../../Firebase';
import { storage } from '../../Firebase';
import { db } from '../../Firebase';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password); //lưu email pas vào firebase
            // cập nhập trạng thái tên và img user
            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + userName}`);
            const uploadTask = uploadBytesResumable(storageRef, file); //cập nhập file

            // lưu dữ liệu hình ảnh để cập nhập cho user
            uploadTask.on(
                (error) => {
                    toast.error(error.message);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        // update use profile
                        await updateProfile(user, {
                            displayName: userName,
                            photoURL: downloadURL,
                        });

                        // store user data in firebase database lưu trữ dữ liệu người dùng trong cơ sở dữ liệu firebase
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: userName,
                            email,
                            photoURL: downloadURL,
                        });
                    });
                },
            );

            setLoading(false);
            toast.success('Account created successfully');
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.error('somethings went wrong');
            setError(error.message);
        }
    };

    return (
        <Helmet title="Register">
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg={12} className="m-auto text-center">
                                <Loading />
                            </Col>
                        ) : (
                            <Col lg={6} className="m-auto text-center">
                                <h3 className="fw-bold fs-4 mb-4">Register</h3>
                                <Form className="form__register" onSubmit={Register}>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="User name"
                                            required
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </Form.Group>

                                    {error ? <p className="error">{error}</p> : null}

                                    <button type="submit" className="buy__btn auth__btn mt-3">
                                        Create an Account
                                    </button>
                                    <p>
                                        Already have an account ?. <Link to="/login">Login</Link>
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

export default Register;
