import React from 'react'
import { Collapse } from 'react-bootstrap'
import style from './Submenu.module.css'
import LogoSecondary from '../../../Assets/image/Navbar/img-logo-secondary.png'
import { Link } from 'react-router-dom'

const Submenu = ({ children, menu, status }) => {

    const Dashboard = () => {
        return (
            <div className={'d-flex ' + style.box}>
                <Collapse in={status} dimension="width" className={style.bg_submenu} open>
                    <div id="example-collapse-text">
                        <div className={style.submenu}>
                            <div className={'d-grid gap-2 '}>
                                <div className={'p-3 text-center ' + style.logo}><img src={LogoSecondary} alt="Binar Car Rental" /></div>
                                <div className={'p-3 '} style={{ color: "#8A8A8A" }}><b>DASHBOARD</b></div>
                                <div className={'d-grid '}>
                                    <Link to="/admin/dashboard/dashboard" className={'p-3 ' + style.menu}><b>Dashboard</b></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <div className={'flex-grow-1 '}>
                    {children}
                </div>
            </div>
        )
    }

    const Cars = () => {
        return (
            <div className={'d-flex ' + style.box}>
                <Collapse in={status} dimension="width" className={style.bg_submenu} open>
                    <div id="example-collapse-text">
                        <div className={style.submenu}>
                            <div className={'d-grid gap-2 '}>
                                <div className={'p-3 text-center ' + style.logo}><img src={LogoSecondary} alt="Binar Car Rental" /></div>
                                <div className={'p-3 '} style={{ color: "#8A8A8A" }}><b>CARS</b></div>
                                <div className={'d-grid '}>
                                    <Link to="/admin/cars/list-car" className={'p-3 ' + style.menu}><b>List Car</b></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Collapse>
                <div className={'flex-grow-1 '}>
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>{menu === "dashboard" ? Dashboard() : null}</div>
            <div>{menu === "cars" ? Cars() : null}</div>
        </div>
    )
}

export default Submenu