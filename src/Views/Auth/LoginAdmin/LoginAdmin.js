import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row, Alert, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import style from './LoginAdmin.module.css'
import LogoSecondary from '../../../Assets/image/Auth/img-logo-secondary.png'
import ModalSuccess from '../../../Components/Modal/ModalSuccess/ModalSuccess'
import { useDispatch, useSelector } from 'react-redux'
import { postAdminLogin } from '../../../Redux/features/authSlice'

const LoginAdmin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [InputForm, setInputForm] = useState({})
    const [Status, setStatus] = useState({ alert: false, message: false, modal: false })
    const { isLoading, isSuccess, dataLogin } = useSelector(state => state.authReducer)

    useEffect(() => {
        if (isSuccess) {
            if (dataLogin) {
                if (dataLogin.message) {
                    setStatus({ message: true })
                } else {
                    setStatus({ message: false })
                    setStatus({ modal: true })
                    setTimeout(() => {
                        setStatus({ modal: false })
                        navigate("/admin/dashboard/dashboard", { replace: true })
                    }, 1600)
                }
            }
        }
    }, [isSuccess, dataLogin, navigate])

    const handleChange = (e) => {
        setInputForm({
            ...InputForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        const regexPassword = /^(?=.{6,})/gm
        if (regexEmail.test(InputForm.email) && regexPassword.test(InputForm.password)) {
            await dispatch(postAdminLogin({ email: InputForm.email, password: InputForm.password }))
        } else {
            setStatus({ alert: true })
        }
    }

    return (
        <Container fluid>
            <ModalSuccess show={Status.modal} onHide={() => setStatus({ modal: false })} />
            <Row>
                <Col lg={7} md={5} className={style.image}></Col>
                <Col lg={5} md={7}>
                    <Row className={'ms-md-5 me-md-5 align-content-center gap-4 ' + style.form}>
                        <Col md={12}>
                            <Link to="/"><img src={LogoSecondary} alt="Binar Car Rental" /></Link>
                        </Col>
                        <Col md={12}>
                            <h2>Login Admin</h2>
                        </Col>
                        <Col md={12}>
                            {Status.alert ?
                                <Alert variant="danger">Masukkan email dan password yang benar. Perhatikan penggunaan huruf kapital.</Alert> : null
                            }
                            {Status.message ?
                                <Alert variant="danger">{dataLogin.message}</Alert> : null
                            }
                            <Form className={'d-grid gap-2 '} onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" name="email" onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password <span style={{ color: "red" }}>*</span></Form.Label>
                                    <Form.Control type="password" placeholder="6+ karakter" name="password" onChange={handleChange} />
                                </Form.Group>
                                {isLoading ?
                                    <Button className={'mt-3 '} variant="primary" type="submit" disabled>Loading...</Button>
                                    :
                                    <Button className={'mt-3 '} variant="primary" type="submit">Login</Button>
                                }
                            </Form>
                        </Col>
                        <Col md={12} className={'text-center '}>
                            <span>Don’t have an account? </span><Link to="/register/admin" className={style.link}><b>Signup for free</b></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginAdmin