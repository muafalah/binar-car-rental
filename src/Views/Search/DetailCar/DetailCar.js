import React, { useEffect } from 'react'
import { Col, Container, Row, Button, Accordion, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import CardDetail from '../../../Components/Card/CardDetail/CardDetail'
import SearchDisable from '../../../Components/Search/SearchDisable/SearchDisable'
import { getAdminCarId } from '../../../Redux/features/adminCarSlice'
import Layout from '../../Layout'
import style from './DetailCar.module.css'

const DetailCar = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { isLoading, dataCarId } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminCarId({ id: id }))
    }, [dispatch])

    return (
        <Layout.Customer>
            <div className={style.blank}></div>
            <Container>
                <section id="SearchDisable-Search" className={'ms-lg-5 me-lg-5 mb-4 ' + style.search_box}>
                    <SearchDisable />
                </section>
                <section id="DetailCar-Result" className={'ms-lg-5 me-lg-5 mb-4 '}>
                    {isLoading ?
                        <div className={'text-center mt-5'}><Spinner animation="border" /></div>
                        :
                        (dataCarId ?
                            <Row>
                                <Col md={7} className={'mt-3 '}>
                                    <div className={'p-4 ' + style.detail_box}>
                                        <h5>Tentang Paket</h5>
                                        Include
                                        <ul style={{ color: "#8A8A8A" }}>
                                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                            <li>Sudah termasuk bensin selama 12 jam</li>
                                            <li>Sudah termasuk Tiket Wisata</li>
                                            <li>Sudah termasuk pajak</li>
                                        </ul>
                                        Exclude
                                        <ul style={{ color: "#8A8A8A" }}>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li >Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item className={style.item_accordion} eventKey="0">
                                                <Accordion.Header className={style.header_accordion}> <h5>Refund, Reschedule, Overtime</h5></Accordion.Header>
                                                <Accordion.Body className={style.body_accordion}>
                                                    <ul style={{ color: "#8A8A8A" }}>
                                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                        <li>Tidak termasuk akomodasi penginapan</li>
                                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                        <li>Tidak termasuk akomodasi penginapan</li>
                                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                        <li>Tidak termasuk akomodasi penginapan</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </Col>
                                <Col md={5} className={'mt-3 '}>
                                    <CardDetail data={dataCarId} />
                                </Col>
                                <Col md={12} className={'mt-5 d-flex justify-content-center '}>
                                    <Link to={"/checkout/" + id} ><Button variant="success">Lanjutkan Pembayaran</Button></Link>
                                </Col>
                            </Row>
                            : null
                        )
                    }
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default DetailCar