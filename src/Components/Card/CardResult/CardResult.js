import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './CardResult.module.css'
import IconPeople from '../../../Assets/image/Card/icon-people.svg'
import IconSetting from '../../../Assets/image/Card/icon-setting.svg'
import IconCalendar from '../../../Assets/image/Card/icon-calendar.svg'

const CardResult = ({ data }) => {

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
        <Col lg={4} md={6} className={'pt-2 pb-2 '}>
            <Card className={'p-2 ' + style.card}>
                <Card.Body>
                    <Card.Img variant="top" src={data.image} height="170vh" />
                </Card.Body>
                <Card.Body>
                    <Card.Title className={'m-0 p-0 mb-1 '}><span className={style.card_name}>{data.name}</span></Card.Title>
                    <Card.Text className={'m-0 p-0 mb-1 '}><span className={style.card_price}>Rp {changePrice(data.price)} / hari</span></Card.Text>
                    <Card.Text className={'m-0 p-0 mb-2 '}><span className={style.card_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></Card.Text>
                    <span className={'d-flex align-items-center mb-2 ' + style.card_desc}><img src={IconPeople} width="20px" height="20px" className={'me-2 '} /> {changeCategory(data.category)} orang</span>
                    <span className={'d-flex align-items-center mb-2 ' + style.card_desc}><img src={IconSetting} width="20px" height="20px" className={'me-2 '} /> Manual</span>
                    <span className={'d-flex align-items-center mb-2 ' + style.card_desc}><img src={IconCalendar} width="20px" height="20px" className={'me-2 '} /> Tahun {changeCreatedAt(data.createdAt)}</span>
                    <Link to={"/detail/" + data.id} className={'d-grid gap mt-3 ' + style.card_button}><Button variant="success">Pilih Mobil</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardResult