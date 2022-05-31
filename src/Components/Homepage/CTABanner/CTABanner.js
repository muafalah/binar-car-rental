import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './CTABanner.module.css'

const CTABanner = () => {
    return (
        <Container>
            <Card className={'text-center ' + style.card}>
                <Card.Body>
                    <Row className={'pt-5 pb-5 gap-3'}>
                        <Col md={12}>
                            <Card.Title><h1 style={{ color: "#FFFFFF" }}>Sewa Mobil di (Lokasimu) Sekarang</h1></Card.Title>
                        </Col>
                        <Col md={12}>
                            <Card.Text className={'col-lg-6 offset-lg-3 col-md-8 offset-md-2'}>
                                <span style={{ color: "#FFFFFF" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                            </Card.Text>
                        </Col>
                        <Col md={12} className={'mt-4'}>
                            <Link to="/search"><Button variant="success">Mulai Sewa Mobil</Button></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CTABanner