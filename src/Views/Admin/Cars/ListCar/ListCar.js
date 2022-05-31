import React, { useEffect, useState } from 'react'
import { Col, Row, Button, ToggleButtonGroup, ToggleButton, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Layout from '../../../Layout'
import style from './ListCar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminCar } from '../../../../Redux/features/adminCarSlice'
import CardAdmin from '../../../../Components/Card/CardAdmin/CardAdmin'
import ModalMessage from '../../../../Components/Modal/ModalMessage/ModalMessage'

const ListCar = () => {

    const dispatch = useDispatch()
    const [Label, setLabel] = useState("all")
    const [modalShow, setModalShow] = useState({ status: false, text: "", bg: "" });
    const { isLoading, isSuccess, dataCar, actCarId } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminCar())
    }, [dispatch])

    useEffect(() => {
        if (actCarId) {
            if (actCarId.name === "Delete Success") {
                setModalShow({ status: true, text: "Data Berhasil Dihapus", bg: "#000000" })
                dispatch(getAdminCar())
                setTimeout(() => {
                    setModalShow({ status: false, text: "", bg: "" })
                }, 1200)
            } else {
                setModalShow({ status: true, text: "Data Berhasil Disimpan", bg: "#73CA5C" })
                dispatch(getAdminCar())
                window.location.reload()
                setTimeout(() => {
                    setModalShow({ status: false, text: "", bg: "" })
                }, 1200)
            }
        }
    }, [actCarId])

    return (
        <Layout.Admin menu="cars">
            <ModalMessage show={modalShow.status} onHide={() => setModalShow(false)} text={modalShow.text} bg={modalShow.bg} />
            <Row className={'gap-4 m-0 p-3'}>
                <Col md={12}>
                    <span><b>Cars</b><FontAwesomeIcon icon={faAngleRight} className={'mt-1 ms-2 me-2'} /><a className={style.link_breadcrumb} to="/admin/cars/list-car">List Car</a></span>
                </Col>
                <Col md={12}>
                    <div className={'d-flex justify-content-between'}>
                        <div><h2>List Car</h2></div>
                        <Link to="/admin/cars/list-car/add"><Button variant="primary"><FontAwesomeIcon icon={faPlus} className={'me-2'} />Add New Car</Button></Link>
                    </div>
                </Col>
                <Col md={12}>
                    <ToggleButtonGroup type="radio" name="options" className={'gap-3'} value={Label} onChange={(e) => setLabel(e)}>
                        <ToggleButton variant="outline-primary" id="tbg-btn-1" value={"all"}>
                            All
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-2" value={"small"}>
                            Small
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-3" value={"medium"}>
                            Medium
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-btn-4" value={"large"}>
                            Large
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col md={12}>
                    <Row>
                        {isLoading ?
                            <div className={'text-center mt-5'}><Spinner animation="border" /></div>
                            :
                            (dataCar ?
                                dataCar?.map((value, index) => {
                                    if (Label === "all") {
                                        return <CardAdmin key={index} data={value} />
                                    } else if (Label === "small") {
                                        if (value.category === "small") {
                                            return <CardAdmin key={index} data={value} />
                                        }
                                    } else if (Label === "medium") {
                                        if (value.category === "medium") {
                                            return <CardAdmin key={index} data={value} />
                                        }
                                    } else if (Label === "large") {
                                        if (value.category === "large") {
                                            return <CardAdmin key={index} data={value} />
                                        }
                                    }
                                })
                                : null
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Layout.Admin>
    )
}

export default ListCar