import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import style from './WhyUs.module.css'
import IconComplete from '../../../Assets/image/Homepage/icon-complete.svg'
import IconPrice from '../../../Assets/image/Homepage/icon-price.svg'
import Icon24Hour from '../../../Assets/image/Homepage/icon-24hrs.svg'
import IconProfessional from '../../../Assets/image/Homepage/icon-professional.svg'

const WhyUs = () => {
    return (
        <Container>
            <Row className={'gap-4 '}>
                <Col md={12}>
                    <h3 className={'text-center text-md-start '}>Why Us?</h3>
                    <p className={'text-center text-md-start '}>Mengapa harus pilih Binar Car Rental?</p>
                </Col>
                <Col md={12}>
                    <Row>
                        <Col lg={3} md={6} className={'mb-3 '}>
                            <Card className={'p-0 ' + style.card}>
                                <Card.Body className={'p-4 '}>
                                    <img src={IconComplete} alt="Icon Complete" className={'mb-3 '} width="32px" height="32px" />
                                    <Card.Title className={'mb-3 '}><h5>Mobil Lengkap</h5></Card.Title>
                                    <Card.Text>
                                        Tersedia banyak sekali pilihan mobil, masih dalam kondisi baru, bersih dan terawat
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={'mb-3 '}>
                            <Card className={'p-0 ' + style.card}>
                                <Card.Body className={'p-4 '}>
                                    <img src={IconPrice} alt="Icon Complete" className={'mb-3 '} width="32px" height="32px" />
                                    <Card.Title className={'mb-3 '}><h5>Harga Murah</h5></Card.Title>
                                    <Card.Text>
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={'mb-3 '}>
                            <Card className={'p-0 ' + style.card}>
                                <Card.Body className={'p-4 '}>
                                    <img src={Icon24Hour} alt="Icon Complete" className={'mb-3 '} width="32px" height="32px" />
                                    <Card.Title className={'mb-3 '}><h5>Layanan 24 Jam</h5></Card.Title>
                                    <Card.Text>
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} className={'mb-3 '}>
                            <Card className={'p-0 ' + style.card}>
                                <Card.Body className={'p-4 '}>
                                    <img src={IconProfessional} alt="Icon Complete" className={'mb-3 '} width="32px" height="32px" />
                                    <Card.Title className={'mb-3 '}><h5>Sopir Professional</h5></Card.Title>
                                    <Card.Text>
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyUs