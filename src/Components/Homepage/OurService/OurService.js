import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './OurService.module.css'
import ImageOurService from '../../../Assets/image/Homepage/img-our-service.png'
import IconChecklist from '../../../Assets/image/Homepage/icon-checklist.svg'

const OurService = () => {
    return (
        <Container>
            <Row className={'gap-md-0 gap-4 '}>
                <Col lg={5} md={6} sm={12} className={'offset-lg-1 my-auto '}>
                    <img src={ImageOurService} width="90%" alt="Our Service" />
                </Col>
                <Col lg={5} md={6} sm={12} className={'my-auto '}>
                    <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <p className={'d-flex align-items-center '}><img src={IconChecklist} className={'me-3 '} width="24px" height="24px" />Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    <p className={'d-flex align-items-center '}><img src={IconChecklist} className={'me-3 '} width="24px" height="24px" />Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    <p className={'d-flex align-items-center '}><img src={IconChecklist} className={'me-3 '} width="24px" height="24px" />Sewa Mobil Jangka Panjang Bulanan</p>
                    <p className={'d-flex align-items-center '}><img src={IconChecklist} className={'me-3 '} width="24px" height="24px" />Gratis Antar - Jemput Mobil di Bandara</p>
                    <p className={'d-flex align-items-center '}><img src={IconChecklist} className={'me-3 '} width="24px" height="24px" />Layanan Airport Transfer / Drop In Out</p>
                </Col>
            </Row>
        </Container>
    )
}

export default OurService