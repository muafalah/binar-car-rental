import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Container, Button, Form, Row, Col, ButtonGroup, ToggleButton, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addOrder } from '../../../Redux/features/cartSlice'
import { getAdminCarId } from '../../../Redux/features/adminCarSlice'
import Layout from '../../Layout'
import style from './Checkout.module.css'
import LogoBCA from '../../../Assets/image/Order/img-bca.svg'
import LogoBNI from '../../../Assets/image/Order/img-bni.svg'
import LogoMandiri from '../../../Assets/image/Order/img-mandiri.svg'
import IconNumber1 from '../../../Assets/image/Order/icon-number-1-fill.svg'
import IconNumber2 from '../../../Assets/image/Order/icon-number-2-outline.svg'
import IconNumber3 from '../../../Assets/image/Order/icon-number-3-outline.svg'
import IconLine from '../../../Assets/image/Order/icon-line.svg'
import IconPeople from '../../../Assets/image/Card/icon-people.svg'
import IconSetting from '../../../Assets/image/Card/icon-setting.svg'
import IconCalendar from '../../../Assets/image/Card/icon-calendar.svg'

const Checkout = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [InputDriver, setInputDriver] = useState("")
    const [InputStart, setInputStart] = useState("")
    const [InputFinish, setInputFinish] = useState("")
    const [InputTime, setInputTime] = useState("")
    const [Duration, setDuration] = useState(0)
    const [Total, setTotal] = useState(0)
    const { dataCarId } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminCarId({ id: id }))
    }, [dispatch])

    useEffect(() => {
        if (InputStart && InputFinish) {
            setDuration(moment.duration(moment(InputFinish, "YYYY-MM-DD").diff(InputStart)).asDays())
        }
        if (dataCarId) {
            setTotal(dataCarId.price * Duration)
        }
    }, [InputStart, InputFinish, dataCarId, Duration])

    const changeCategory = (value) => {
        if (value) {
            if (value === "small") {
                return "4"
            } else if (value === "medium") {
                return "6"
            } else if (value === "large") {
                return "9"
            }
        } else {
            return "0"
        }
    }

    const changeCreatedAt = (value) => {
        if (value) {
            return value.substring(0, 4)
        } else {
            return "Tidak diketahui"
        }
    }

    const changePrice = (value) => {
        if (value) {
            let separator
            let number_string = value.toString(),
                sisa = number_string.length % 3,
                rupiah = number_string.substr(0, sisa),
                ribuan = number_string.substr(sisa).match(/\d{3}/g);
            if (ribuan) {
                separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            return rupiah
        } else {
            return "0"
        }
    }

    const [radioValue, setRadioValue] = useState(null);

    const paymentMethod = [
        { name: 'BCA', value: 'BCA', image: LogoBCA },
        { name: 'BNI', value: 'BNI', image: LogoBNI },
        { name: 'Mandiri', value: 'Mandiri', image: LogoMandiri },
    ];

    const handleOrder = () => {
        const dataOrder = {
            carId: id,
            driver: InputDriver,
            start_rent: InputStart,
            finish_rent: InputFinish,
            time: InputTime,
            duration: Duration,
            total: Total,
            method: radioValue,
        }
        dispatch(addOrder(dataOrder))
        navigate("/payment")
    }

    return (
        <Layout.Customer>
            <div className={style.blank}></div>
            <Container>
                <section id="Navigation-Checkout" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <div className={'d-flex justify-content-between'}>
                        <Button variant="transparant" onClick={() => navigate(-1)}>
                            <FontAwesomeIcon icon={faArrowLeft} className={'me-3'} /> <b>Pembayaran</b>
                        </Button>
                        <div className={'d-flex align-item-center pe-3 my-auto'}>
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber1} className={'me-2'} /><span>Pilih Metode</span></span>
                            <img src={IconLine} className={'me-2'} />
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber2} className={'me-2'} /><span>Bayar</span></span>
                            <img src={IconLine} className={'me-2'} />
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber3} className={'me-2'} /><span>Tiket</span></span>
                        </div>
                    </div>
                </section>
                <section id="Form-Checkout" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <Form className={'p-4 ' + style.box}>
                        <h5>Detail Pesanan</h5>
                        <Row className={'gap-lg-0 '}>
                            <Col lg={3} md={6} className={'mt-2'}>
                                <Form.Group>
                                    <Form.Label>Tipe Driver</Form.Label>
                                    <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" onChange={(e) => setInputDriver(e.target.value)}>
                                        <option value="">Pilih Tipe Driver</option>
                                        <option value="supir">Dengan Supir</option>
                                        <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className={'mt-2'}>
                                <Form.Group>
                                    <Form.Label>Tanggal Penyewaan</Form.Label>
                                    <Form.Control type="date" placeholder="Pilih Tanggal" name="start_rent" onChange={(e) => setInputStart(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className={'mt-2'}>
                                <Form.Group>
                                    <Form.Label>Tanggal Pengembalian</Form.Label>
                                    <Form.Control type="date" placeholder="Pilih Tanggal" name="finish_rent" onChange={(e) => setInputFinish(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={6} className={'mt-2'}>
                                <Form.Group>
                                    <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                    <Form.Control type="time" placeholder="Pilih Waktu" name="time" onChange={(e) => setInputTime(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </section>
                <section id="Detail-Checkout" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <Row>
                        <Col lg={7} md={6}>
                            <div className={'p-4 ' + style.box}>
                                <h5>Pilih Bank Transfer</h5>
                                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking.</p>
                                <ButtonGroup className={'d-grid gap-1'}>
                                    {paymentMethod.map((value, index) => (
                                        <div className={'d-grid'} key={index}>
                                            <ToggleButton style={{ borderRadius: "3px", padding: "0px" }} id={`radio-${index}`} type="radio" variant="transparant" name="radio" value={value.value} checked={radioValue === value.value} onChange={(e) => setRadioValue(e.currentTarget.value)}>
                                                <div className={'d-flex align-items-center gap-3'}>
                                                    <img src={value.image} height="30px" width="60px" />
                                                    <span>{value.name} Transfer</span>
                                                    <Form.Check className={'ms-auto'} type="radio" checked={radioValue === value.value} readOnly />
                                                </div>
                                            </ToggleButton>
                                            <hr />
                                        </div>
                                    ))}
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col lg={5} md={6} className={'mt-4 mt-md-0'}>
                            {dataCarId ?
                                <Card className={'p-2 ' + style.box}>
                                    <Card.Body>
                                        <Card.Title className={'m-0 p-0 mb-2 '}><span className={style.card_name}>{dataCarId.name}</span></Card.Title>
                                        <Card.Text className={'d-flex justify-content-between '}>
                                            <span className={'me-3 ' + style.card_desc}><img src={IconPeople} width="16px" height="16px" className={'me-1 '} /> {changeCategory(dataCarId.category)} orang</span>
                                            <span className={'me-3 ' + style.card_desc}><img src={IconSetting} width="16px" height="16px" className={'me-1 '} /> Manual</span>
                                            <span className={'me-3 ' + style.card_desc}><img src={IconCalendar} width="16px" height="16px" className={'me-1 '} /> Tahun {changeCreatedAt(dataCarId.createdAt)}</span>
                                        </Card.Text>
                                        <Card.Text>
                                            <b>Harga</b>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>1 Mobil dengan sopir</li>
                                                <span>Rp {changePrice(dataCarId.price)}</span>
                                            </span>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>Durasi Penyewaan</li>
                                                <span>{Duration} / hari</span>
                                            </span>
                                        </Card.Text>
                                        <Card.Text>
                                            <b>Biaya Lainnya</b>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>Pajak</li>
                                                <span style={{ color: "#5CB85F" }}>Termasuk</span>
                                            </span>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>Biaya makan supir</li>
                                                <span style={{ color: "#5CB85F" }}>Termasuk</span>
                                            </span>
                                        </Card.Text>
                                        <Card.Text>
                                            <b>Belum Termasuk</b>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>Biaya bensin</li>
                                            </span>
                                            <span className={'d-flex justify-content-between ms-1'}>
                                                <li>Biaya tol dan parkir</li>
                                            </span>
                                        </Card.Text>
                                        <hr />
                                        <Row>
                                            <Col md={6}>
                                                <span style={{ fontSize: "14px", fontWeight: "700" }}>Total</span>
                                            </Col>
                                            <Col md={6}>
                                                <Card.Text className={'m-0 p-0 mb-1 text-end '}><span className={style.card_price}>Rp {changePrice(Total)}</span></Card.Text>
                                            </Col>
                                        </Row>
                                        <div className={'d-grid gap mt-3 '}>
                                            {InputDriver && InputStart && InputFinish && InputTime && Duration && Total && radioValue ?
                                                <Button variant="success" onClick={handleOrder}>Bayar Sekarang</Button>
                                                :
                                                <Button variant="success" disabled>Bayar Sekarang</Button>
                                            }
                                        </div>
                                    </Card.Body>
                                </Card>
                                : null
                            }
                        </Col>
                    </Row>
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default Checkout