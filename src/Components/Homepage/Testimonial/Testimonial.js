import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './Testimonial.module.css'

const Testimonial = () => {
    return (
        <Container>
            <Row className={'gap-4 '}>
                <Col md={12}>
                    <h3 className={'text-center '}>Testimonial</h3>
                    <p className={'text-center '}>Berbagai review positif dari para pelanggan kami</p>
                </Col>
                <Col md={12}>
                    Testimonial
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial