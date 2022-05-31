import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import style from './SearchDisable.module.css'

const SearchDisable = () => {
    return (
        <Form className={'p-4 ' + style.box}>
            <Row className={'gap-lg-0 '}>
                <h5>Pencarianmu</h5>
                <Col lg={3} md={6} className={'mt-2'}>
                    <Form.Group>
                        <Form.Label>Tipe Driver</Form.Label>
                        <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" disabled >
                            <option value="">Pilih Tipe Driver</option>
                            <option value="supir">Dengan Supir</option>
                            <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col lg={3} md={6} className={'mt-2'}>
                    <Form.Group>
                        <Form.Label>Tanggal</Form.Label>
                        <Form.Control type="date" placeholder="Pilih Tanggal" name="date" disabled />
                    </Form.Group>
                </Col>
                <Col lg={3} md={6} className={'mt-2'}>
                    <Form.Group>
                        <Form.Label>Waktu Jemput/Ambil</Form.Label>
                        <Form.Control type="time" placeholder="Pilih Waktu" name="time" disabled />
                    </Form.Group>
                </Col>
                <Col lg={3} md={6} className={'mt-2'}>
                    <Form.Group>
                        <Form.Label>Jumlah Penumpang</Form.Label>
                        <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger" disabled />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchDisable