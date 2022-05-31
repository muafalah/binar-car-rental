import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import style from './CardAdmin.module.css'
import IconKey from '../../../Assets/image/Card/icon-key.svg'
import IconClock from '../../../Assets/image/Card/icon-clock.svg'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import ModalDelete from '../../Modal/ModalDelete/ModalDelete'

const CardAdmin = ({ data }) => {

    moment.updateLocale('id', require('moment/locale/id'))
    const [modalShow, setModalShow] = useState(false);

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
            return 0
        }
    }

    const changeDate = (value, rent) => {
        if (value) {

        } else {
            return rent + " rent"
        }
    }

    const changeUpdate = (value) => {
        if (value) {
            return moment(value.substring(0, 10) + " " + value.substring(11, 19)).format('Do MMMM YYYY, hh:mm')
        } else {
            return "-"
        }
    }

    return (
        <Col lg={4} md={6} className={'pt-2 pb-2 '}>
            <ModalDelete show={modalShow} onHide={() => setModalShow(false)} id={data.id} />
            <Card className={'p-2 ' + style.card}>
                <Card.Body>
                    <Card.Img variant="top" src={data.image} height="170vh" />
                </Card.Body>
                <Card.Body>
                    <Card.Title className={'m-0 p-0 mb-2 '}><span className={style.card_name}>{data.name}</span></Card.Title>
                    <Card.Text className={'m-0 p-0 mb-2 '}><span className={style.card_price}>Rp {changePrice(data.price)} / hari</span></Card.Text>
                    <Card.Text className={'m-0 p-0 mb-2 '}><span className={'d-flex align-item-center ' + style.card_desc}><img src={IconKey} width="20px" height="20px" className={'me-2'} />{changeDate(data.start_rent_at, "Start")} - {changeDate(data.finish_rent_at, "Finish")}</span></Card.Text>
                    <Card.Text className={'m-0 p-0 mb-2 '}><span className={'d-flex align-item-center ' + style.card_desc}><img src={IconClock} width="20px" height="20px" className={'me-2'} />Updated at {changeUpdate(data.updatedAt)} WIB</span></Card.Text>
                    <Row className={'pt-2 gap'}>
                        <Col md={6} className={'d-grid gap '}>
                            <Button variant="outline-danger" onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faTrashCan} /> Delete</Button>
                        </Col>
                        <Col md={6}>
                            <Link className={'d-grid gap '} to={"/admin/cars/list-car/edit/" + data.id} style={{ color: "#FFFFFF", textDecoration: "none" }}><Button variant="success"><FontAwesomeIcon icon={faEdit} /> Edit</Button></Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardAdmin