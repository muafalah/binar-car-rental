import moment from 'moment'
import Dropzone from 'react-dropzone-uploader';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Container, Button, Row, Col, InputGroup, FormControl, Tabs, Tab } from 'react-bootstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout'
import style from './Payment.module.css'
import LogoBCA from '../../../Assets/image/Order/img-bca.svg'
import LogoBNI from '../../../Assets/image/Order/img-bni.svg'
import LogoMandiri from '../../../Assets/image/Order/img-mandiri.svg'
import IconNumber1 from '../../../Assets/image/Order/icon-number-checked.svg'
import IconNumber2 from '../../../Assets/image/Order/icon-number-2-fill.svg'
import IconNumber3 from '../../../Assets/image/Order/icon-number-3-outline.svg'
import IconLine from '../../../Assets/image/Order/icon-line.svg'
import { postCustomerOrder } from '../../../Redux/features/customerOrderSlice';
import Countdown from 'react-countdown';

const Payment = () => {

    moment.updateLocale('id', require('moment/locale/id'))

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Timer, setTimer] = useState(moment(), "YYYY-MM-DD")
    const [DateNow, setDateNow] = useState(moment().add(1, 'days').format('LLLL'))
    const [Confirmation, setConfirmation] = useState(false)
    const [ButtonUpload, setButtonUpload] = useState(false)
    const [StatusUpload, setStatusUpload] = useState("Upload")
    const [NoRek, setNoRek] = useState({ BCA: "731 025 2527", BNI: "023 827 2088", Mandiri: "0700 000 899 992" })
    const { dataOrder } = useSelector(state => state.cartReducer)
    const { CustomerOrder, isSuccess } = useSelector(state => state.customerOrderReducer)

    useEffect(() => {
        if (!dataOrder) {
            navigate("/search", { replace: true })
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            if (CustomerOrder.id) {
                navigate("/invoice")
            }
        }
    }, [isSuccess, CustomerOrder, navigate])


    const getUploadParams = () => {
        return {
            url: 'https://httpbin.org/post'
        }
    }

    const handleChangeStatus = ({ meta, file }, status) => {
        setStatusUpload(status)
        if (status === "done") {
            setButtonUpload(true)
        }
    }

    const handlePayment = async () => {
        const user = JSON.parse(localStorage.getItem("user"))
        await dispatch(postCustomerOrder({ token: user.token, start_rent: dataOrder.start_rent, finish_rent: dataOrder.finish_rent, id: dataOrder.carId }))
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

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span style={{ color: "red" }}>Waktu Pembelian Habis</span>;
        } else {
            // Render a countdown
            return (
                <div className={'d-flex align-items-center'}>
                    <span className={style.countdown}>{hours}</span>
                    <b>:</b>
                    <span className={style.countdown}>{minutes}</span>
                    <b>:</b>
                    <span className={style.countdown}>{seconds}</span>
                </div>
            )
        }
    };

    console.log(DateNow)

    return (
        <Layout.Customer>
            <div className={style.blank}></div>
            <Container>
                <section id="Navigation-Payment" className={'ms-lg-5 me-lg-5 mb-4'}>
                    {dataOrder ?
                        <div className={'d-flex justify-content-between'}>
                            <Button variant="transparant" onClick={() => navigate(-1)}>
                                <FontAwesomeIcon icon={faArrowLeft} className={'me-3'} /> <b>{dataOrder.method} Transfer</b>
                            </Button>
                            <div className={'d-flex align-item-center pe-3 my-auto'}>
                                <span className={'d-flex align-item-center me-2'}><img src={IconNumber1} className={'me-2'} /><span>Pilih Metode</span></span>
                                <img src={IconLine} className={'me-2'} />
                                <span className={'d-flex align-item-center me-2'}><img src={IconNumber2} className={'me-2'} /><span>Bayar</span></span>
                                <img src={IconLine} className={'me-2'} />
                                <span className={'d-flex align-item-center me-2'}><img src={IconNumber3} className={'me-2'} /><span>Tiket</span></span>
                            </div>
                        </div>
                        : null}
                </section>
                <section id="Detail-Payment" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <Row>
                        <Col lg={7} md={6}>
                            {dataOrder ?
                                <div className={'d-grid gap-3'}>
                                    <div className={'p-4 ' + style.box}>
                                        <div className={'d-flex align-items-center justify-content-between'}>
                                            <div>
                                                <h5>Selesaikan Pembayaran Sebelum</h5>
                                                {DateNow} WIB
                                            </div>
                                            <div>
                                                <Countdown date={Timer + 86400000} renderer={renderer} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'p-4 d-grid gap-2 ' + style.box}>
                                        <h5>Lakukan Transfer Ke</h5>
                                        <div className={'d-flex align-items-center gap-3'}>
                                            <img src={dataOrder.method === "BCA" ? LogoBCA : (dataOrder.method === "BNI" ? LogoBNI : (dataOrder.method === "Mandiri" ? LogoMandiri : null))} height="30px" width="60px" />
                                            <span><b>{dataOrder.method} Transfer</b><div>a.n Binar Car Rental</div></span>
                                        </div>
                                        <div>
                                            Nomor Rekening
                                            <InputGroup className="mt-2 mb-2">
                                                <FormControl value={dataOrder.method === "BCA" ? NoRek.BCA : (dataOrder.method === "BNI" ? NoRek.BNI : (dataOrder.method === "Mandiri" ? NoRek.Mandiri : null))} readOnly />
                                                <CopyToClipboard text={dataOrder.method === "BCA" ? NoRek.BCA : (dataOrder.method === "BNI" ? NoRek.BNI : (dataOrder.method === "Mandiri" ? NoRek.Mandiri : null))}>
                                                    <Button variant="gray"><FontAwesomeIcon icon={faClone} /></Button>
                                                </CopyToClipboard>
                                            </InputGroup>
                                        </div>
                                        <div>
                                            Total Bayar
                                            <InputGroup className="mt-2 mb-2">
                                                <FormControl value={"Rp " + changePrice(dataOrder.total)} readOnly />
                                                <CopyToClipboard text={dataOrder.total}>
                                                    <Button variant="gray"><FontAwesomeIcon icon={faClone} /></Button>
                                                </CopyToClipboard>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className={'p-4 d-grid gap-2 ' + style.box}>
                                        <h5>Intruksi Pembayaran</h5>
                                        <Tabs defaultActiveKey={`ATM ${dataOrder.method}`} id="uncontrolled-tab-example" className="mb-3" fill>
                                            <Tab eventKey={`ATM ${dataOrder.method}`} title={`ATM ${dataOrder.method}`}>
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
                                            </Tab>
                                            <Tab eventKey={`M-${dataOrder.method}`} title={`M-${dataOrder.method}`}>
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
                                            </Tab>
                                            <Tab eventKey={`${dataOrder.method} Klik`} title={`${dataOrder.method} Klik`}>
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
                                            </Tab>
                                            <Tab eventKey="Internet Banking" title="Internet Banking">
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
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                                : null
                            }
                        </Col>
                        <Col lg={5} md={6} className={'mt-4 mt-md-0'}>
                            {Confirmation ?
                                <div className={'p-4 d-grid gap ' + style.box}>
                                    <h5>Konfirmasi Pembayaran</h5>
                                    <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                                    <b>Upload Bukti Pembayaran</b>
                                    <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                                    <div className={'mb-3'}>
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            accept="image/*,audio/*,video/*"
                                            previewImage={true}
                                        />
                                    </div>
                                    {ButtonUpload ? <Button variant="success" onClick={handlePayment}>Upload</Button> : <Button variant="success" disabled>{StatusUpload}</Button>}
                                </div>
                                :
                                <div className={'p-4 d-grid gap ' + style.box}>
                                    <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan.</p>
                                    <Button variant="success" onClick={() => setConfirmation(true)}>Konfirmasi Pembayaran</Button>
                                </div>
                            }
                        </Col>
                    </Row>
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default Payment