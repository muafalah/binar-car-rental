import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import ModalImage from 'react-modal-image'
import { Link } from 'react-router-dom'
import style from './CardDetail.module.css'
import IconPeople from '../../../Assets/image/Card/icon-people.svg'
import IconSetting from '../../../Assets/image/Card/icon-setting.svg'
import IconCalendar from '../../../Assets/image/Card/icon-calendar.svg'

const CardDetail = ({ data }) => {
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

    const changeCategory = (value) => {
        if (value) {
            if (value === "small") {
                return 4
            } else if (value === "medium") {
                return 6
            } else if (value === "large") {
                return 9
            }
        } else {
            return 0
        }
    }

    const changeCreatedAt = (value) => {
        if (value) {
            return value.substring(0, 4)
        } else {
            return "-"
        }
    }

    return (
        <Card className={'p-2 ' + style.card}>
            <Card.Body>
                <ModalImage small={data.image} large={data.image} alt={data.name} className={style.card_image} />
            </Card.Body>
            <Card.Body>
                <Card.Title className={'m-0 p-0 mb-3 '}><span className={style.card_name}>{data.name}</span></Card.Title>
                <Card.Text className={'d-flex justify-content-between '}>
                    <span className={'d-flex align-items-center ' + style.card_desc}><img src={IconPeople} width="20px" height="20px" className={'me-2 '} /> {changeCategory(data.category)} orang</span>
                    <span className={'d-flex align-items-center ' + style.card_desc}><img src={IconSetting} width="20px" height="20px" className={'me-2 '} /> Manual</span>
                    <span className={'d-flex align-items-center ' + style.card_desc}><img src={IconCalendar} width="20px" height="20px" className={'me-2 '} />Tahun {changeCreatedAt(data.createdAt)}</span>
                </Card.Text>
                <hr />
                <Row>
                    <Col md={6}>
                        <span style={{ fontSize: "16px" }}>Total</span>
                    </Col>
                    <Col md={6}>
                        <Card.Text className={'m-0 p-0 mb-1 text-end '}><span className={style.card_price}>Rp {changePrice(data.price)} / hari</span></Card.Text>
                    </Col>
                </Row>
                <Link to={"/checkout/" + data.id} className={'d-grid gap mt-3 ' + style.card_button}><Button variant="success"> Lanjutkan Pembayaran</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default CardDetail