import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import TableListCar from '../../../../Components/Table/TableListCar/TableListCar'
import TableListOrder from '../../../../Components/Table/TableListOrder/TableListOrder'
import { getAdminCar } from '../../../../Redux/features/adminCarSlice'
import { getAdminOrder } from '../../../../Redux/features/adminOrderSlice'
import Layout from '../../../Layout'
import style from './Dashboard.module.css'

const Dashboard = () => {

    const dispatch = useDispatch()
    const { dataOrder } = useSelector(state => state.adminOrderReducer)
    const { dataCar } = useSelector(state => state.adminCarReducer)

    useEffect(() => {
        dispatch(getAdminOrder())
        dispatch(getAdminCar())
    }, [dispatch])

    return (
        <Layout.Admin menu="dashboard">
            <Row className={'gap-4 m-0 p-3'}>
                <Col md={12}>
                    <span><b>Dashboard</b><FontAwesomeIcon icon={faAngleRight} className={'mt-1 ms-2 me-2'} /><a className={style.link_breadcrumb} href="/admin/cars/list-car">Dashboard</a></span>
                </Col>
                <Col md={12}>
                    <h2>Dashboard</h2>
                </Col>
                <Col md={12} className={'d-grid gap-3'}>
                    <div className={style.title}>List Order</div>
                    <div>{dataOrder ? <TableListOrder value={dataOrder} /> : null}</div>
                </Col>
                <Col md={12} className={'d-grid gap-3'}>
                    <div className={style.title}>List Car</div>
                    <div>{dataCar ? <TableListCar value={dataCar} /> : null}</div>
                </Col>
            </Row>
        </Layout.Admin>
    )
}

export default Dashboard