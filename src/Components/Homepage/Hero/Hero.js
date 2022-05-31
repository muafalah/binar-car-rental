import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import style from './Hero.module.css'
import ImageHero from '../../../Assets/image/Homepage/img-hero-car.png'
import { Link } from 'react-router-dom'

const Hero = ({ type }) => {
    return (
        <Container>
            <Row>
                <Col md={6} className={'my-auto pb-3 '}>
                    <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className={'col-lg-10 '}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {type === "homepage" ? <Link to="/search"><Button variant="success">Mulai Sewa Mobil</Button></Link> : null}
                </Col>
                <Col md={6} className={'mt-5 '}>
                    <img src={ImageHero} width="100%" height="100%" alt="Hero Image" />
                </Col>
            </Row>
        </Container>
    )
}

export default Hero