import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getAdminCarId, updateAdminCarId } from '../../../../../Redux/features/adminCarSlice'
import Layout from '../../../../Layout'
import style from './ListCarEdit.module.css'

const ListCarEdit = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [InputName, setInputName] = useState("")
    const [InputCategory, setInputCategory] = useState("")
    const [InputPrice, setInputPrice] = useState("")
    const [InputStatus, setInputStatus] = useState("")
    const [InputImage, setInputImage] = useState("")
    const { isLoading, dataCarId } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminCarId({ id: id }))
    }, [dispatch])

    useEffect(() => {
        if (dataCarId) {
            setInputName(dataCarId.name)
            setInputCategory(dataCarId.category)
            setInputPrice(dataCarId.price)
            setInputStatus(dataCarId.status)
        }
    }, [dataCarId])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(updateAdminCarId({ id: id, name: InputName, category: InputCategory, price: InputPrice, status: InputStatus, image: InputImage }))
        navigate("/admin/cars/list-car")
    }

    const handleCancel = () => {
        navigate("/admin/cars/list-car")
        window.location.reload()
    }

    return (
        <Layout.Admin menu="cars">
            <Row className={'gap-4 m-0 p-3'}>
                <Col md={12}>
                    <span><b>Cars</b><FontAwesomeIcon icon={faAngleRight} className={'mt-1 ms-2 me-2'} /><Link className={style.link_breadcrumb} to="/admin/cars/list-car"><b>List Car</b></Link><FontAwesomeIcon icon={faAngleRight} className={'mt-1 ms-2 me-2'} /><Link className={style.link_breadcrumb} to={"/admin/cars/list-car/edit/" + id}>Edit Car</Link></span>
                </Col>
                <Col md={12}>
                    <h2>Edit Car</h2>
                </Col>
                <Col md={12} >
                    <div className={'p-4'} style={{ backgroundColor: "#FFFFFF" }}>
                        {dataCarId ?
                            <Form className={'d-grid gap-2 ' + style.form} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Name<span style={{ color: "red" }}>*</span></Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control type="text" placeholder="Placeholder" name="name" value={InputName} onChange={(e) => { setInputName(e.target.value) }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Category<span style={{ color: "red" }}>*</span></Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Select type="dropdown" placeholder="Placeholder" name="category" value={InputCategory} onChange={(e) => { setInputCategory(e.target.value) }}>
                                                <option value="">Placeholder</option>
                                                <option value="small">Small (1-4 orang)</option>
                                                <option value="medium">Medium (4-6 orang)</option>
                                                <option value="large">Large (6-9 orang)</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Price<span style={{ color: "red" }}>*</span></Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control type="number" placeholder="Placeholder" name="price" value={InputPrice} onChange={(e) => { setInputPrice(e.target.value) }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Status<span style={{ color: "red" }}>*</span></Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Select type="dropdown" placeholder="Placeholder" name="status" value={InputStatus} onChange={(e) => { setInputStatus(e.target.value) }}>
                                                <option value="">Placeholder</option>
                                                <option value="false">false</option>
                                                <option value="true">true</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Image<span style={{ color: "red" }}>*</span></Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control type="file" placeholder="Placeholder" name="image" onChange={(e) => { setInputImage(e.target.files[0]) }} />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Created at</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control plaintext readOnly defaultValue="-" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row className={'d-flex align-items-center'}>
                                        <Col md={3}>
                                            <Form.Label>Updated at</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control plaintext readOnly defaultValue="-" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <div className={'d-flex justify-content-end gap-3'}>
                                    <Button className={'mt-3 '} variant="outline-primary" onClick={handleCancel}>Cancel</Button>
                                    {isLoading ?
                                        <Button className={'mt-3 '} variant="primary" type="submit" disabled>Loading...</Button>
                                        :
                                        <Button className={'mt-3 '} variant="primary" type="submit">Save</Button>
                                    }
                                </div>
                            </Form>
                            : null
                        }
                    </div>
                </Col>
            </Row>
        </Layout.Admin>
    )
}

export default ListCarEdit