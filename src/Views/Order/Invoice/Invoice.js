import Layout from '../../Layout'
import { Viewer, Worker } from '@react-pdf-viewer/core'
import InvoicePDF from '../../../Assets/document/Invoice.pdf'
import { faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './invoice.module.css'
import IconNumber1 from '../../../Assets/image/Order/icon-number-checked.svg'
import IconNumber2 from '../../../Assets/image/Order/icon-number-checked.svg'
import IconNumber3 from '../../../Assets/image/Order/icon-number-3-fill.svg'
import IconLine from '../../../Assets/image/Order/icon-line.svg'
import IconSuccess from '../../../Assets/image/Order/icon-success.svg'

const Invoice = () => {

    const navigate = useNavigate()
    const { CustomerOrder } = useSelector(state => state.customerOrderReducer)

    useEffect(() => {
        if (!CustomerOrder) {
            navigate("/search", { replace: true })
        }
    }, [])

    return (
        <Layout.Customer>
            <div className={style.blank}></div>
            <Container>
                <section id="Navigation-Invoice" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <div className={'d-flex justify-content-between'}>
                        <div>
                            {CustomerOrder ?
                                <Button variant="transparant" className={'d-flex align-item-center gap-3'} onClick={() => navigate("/search")}>
                                    <div><FontAwesomeIcon icon={faArrowLeft} className={'me-3'} /></div>
                                    <div className={'d-grid text-start'}>
                                        <b>Tiket</b>
                                        <span style={{ fontSize: "12px", color: "#8A8A8A" }}>Order ID : {CustomerOrder.id}</span>
                                    </div>
                                </Button>
                                : null
                            }
                        </div>
                        <div className={'d-flex align-item-center pe-3 my-auto'}>
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber1} className={'me-2'} /><span>Pilih Metode</span></span>
                            <img src={IconLine} className={'me-2'} />
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber2} className={'me-2'} /><span>Bayar</span></span>
                            <img src={IconLine} className={'me-2'} />
                            <span className={'d-flex align-item-center me-2'}><img src={IconNumber3} className={'me-2'} /><span>Tiket</span></span>
                        </div>
                    </div>
                </section>
                <section id="PaymentSuccess-Invoice" className={'ms-lg-5 me-lg-5 mb-4'}>
                    <div className={'text-center pt-3 pb-3'}>
                        <img src={IconSuccess} alt="Payment Success" className={'mb-4'} />
                        <h5>Pembayaran Berhasil!</h5>
                        <p style={{ color: "##8A8A8A" }}>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                    </div>
                    <div className={'d-grid justify-content-center'}>
                        <div className={'d-grid gap-2 p-4 ' + style.box_pdf}>
                            <div className={'d-flex align-items-center justify-content-between'}>
                                <div>
                                    <h5>Inovice</h5>
                                    <span style={{ fontSize: "12px" }}>INV-1523976238</span>
                                </div>
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faFloppyDisk} className={'me-2'} />Unduh</Button>
                            </div>
                            <div className={'mt-2'}>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                                    <Viewer fileUrl={InvoicePDF} />
                                </Worker>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout.Customer>
    )
}

export default Invoice