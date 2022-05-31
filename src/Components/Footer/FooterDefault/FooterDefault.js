import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './FooterDefault.module.css'
import LogoPrimary from '../../../Assets/image/Footer/img-logo-primary.png'
import IconFacebook from '../../../Assets/image/Footer/icon-facebook.svg'
import IconInstagram from '../../../Assets/image/Footer/icon-instagram.svg'
import IconTwitter from '../../../Assets/image/Footer/icon-twitter.svg'
import IconMail from '../../../Assets/image/Footer/icon-mail.svg'
import IconTwitch from '../../../Assets/image/Footer/icon-twitch.svg'

const FooterDefault = () => {
    return (
        <Container className={'pt-5 pb-5 '}>
            <Row className={'gap-4 gap-md-0'}>
                <Col md={3}>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </Col>
                <Col md={2}>
                    <p><Link className={style.nav_footer} to="/#OurService-Homepage">Our Service</Link></p>
                    <p><Link className={style.nav_footer} to="/#WhyUs-Homepage">Why Us</Link></p>
                    <p><Link className={style.nav_footer} to="/#Testimonial-Homepage">Testimonial</Link></p>
                    <p><Link className={style.nav_footer} to="/#FAQ-Homepage">FAQ</Link></p>
                </Col>
                <Col md={4}>
                    <p>Connect with us</p>
                    <div className={'d-flex gap-2'}>
                        <Link to="#"><img src={IconFacebook} width="32px" height="32px" /></Link>
                        <Link to="#"><img src={IconInstagram} width="32px" height="32px" /></Link>
                        <Link to="#"><img src={IconTwitter} width="32px" height="32px" /></Link>
                        <Link to="#"><img src={IconMail} width="32px" height="32px" /></Link>
                        <Link to="#"><img src={IconTwitch} width="32px" height="32px" /></Link>
                    </div>
                </Col>
                <Col md={3}>
                    <p>Copyright Binar 2022</p>
                    <Link to="/"><img src={LogoPrimary} alt="Binar Car Rental" /></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterDefault