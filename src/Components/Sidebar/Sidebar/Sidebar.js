import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import style from './Sidebar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import LogoSidebar from '../../../Assets/image/Sidebar/img-logo-sidebar.png'
import IconDashboard from '../../../Assets/image/Sidebar/icon-dashboard.svg'
import IconCars from '../../../Assets/image/Sidebar/icon-cars.svg'

const Sidebar = ({ children }) => {

    return (
        <Container fluid>
            <div className={'d-flex ' + style.box}>
                <div className={'text-center gap-3 ' + style.sidebar}>
                    <div className={'m-3'}>
                        <img src={LogoSidebar} width="34px" height="34px" />
                    </div>
                    <a href="/admin/dashboard/dashboard" className={'d-grid gap-2 pt-2 pb-2 mb-2 ' + style.sidebar_menu}>
                        <div><img src={IconDashboard} width="24px" height="24px" /></div>
                        <div className={style.sidebar_text}><b>Dashboard</b></div>
                    </a>
                    <a href="/admin/cars/list-car" className={'d-grid gap-2 pt-2 pb-2 mb-2 ' + style.sidebar_menu}>
                        <div><img src={IconCars} width="24px" height="24px" /></div>
                        <div className={style.sidebar_text}><b>Cars</b></div>
                    </a>
                </div>
                <div className={style.children}>{children}</div>
            </div>
        </Container>
    )
}

export default Sidebar