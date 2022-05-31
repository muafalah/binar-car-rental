import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import style from './SearchEdit.module.css'

const SearchEdit = ({ driver, date, time, passenger }) => {

    const navigate = useNavigate()
    const [InputDriver, setInputDriver] = useState(driver)
    const [InputDate, setInputDate] = useState(date)
    const [InputTime, setInputTime] = useState(time)
    const [InputPassenger, setInputPassenger] = useState(passenger)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (InputDriver === "" || InputDate === "" || InputTime === "") {
            alert("Harap Lengkapi kolom pencarian")
        } else if (InputPassenger > 9) {
            alert("Maksimal Jumlah Penumpang adalah 9")
        } else {
            InputPassenger === "" ? navigate("/result/driver=" + InputDriver + "&date=" + InputDate + "&time=" + InputTime + "&passenger=" + 0) : navigate("/result/driver=" + InputDriver + "&date=" + InputDate + "&time=" + InputTime + "&passenger=" + InputPassenger)
        }
    }

    return (
        <Form className={'p-4 ' + style.box} onSubmit={handleSubmit}>
            <Row className={'gap-lg-0 gap-3'}>
                <h5>Pencarianmu</h5>
                <Col lg={11} md={12}>
                    <Row>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Tipe Driver</Form.Label>
                                <Form.Select type="dropdown" placeholder="Pilih Tipe Driver" name="driver" value={InputDriver} onChange={(e) => setInputDriver(e.target.value)}>
                                    <option value="">Pilih Tipe Driver</option>
                                    <option value="supir">Dengan Supir</option>
                                    <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Tanggal</Form.Label>
                                <Form.Control type="date" placeholder="Pilih Tanggal" name="date" value={InputDate} onChange={(e) => setInputDate(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                <Form.Control type="time" placeholder="Pilih Waktu" name="time" value={InputTime} onChange={(e) => setInputTime(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col lg={3} md={6} className={'mt-2'}>
                            <Form.Group>
                                <Form.Label>Jumlah Penumpang(optional)</Form.Label>
                                <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger" value={InputPassenger} onChange={(e) => setInputPassenger(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1} md={12} className={'mt-auto d-grid gap-2 '}>
                    <Button variant="outline-primary" type="submit">
                        Edit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchEdit