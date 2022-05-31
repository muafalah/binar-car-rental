import React, { useState } from 'react'
import { Form, FormControl, Navbar, Offcanvas, Button, Container, Dropdown, Nav } from 'react-bootstrap';
import Submenu from '../../Sidebar/Submenu/Submenu'
import style from './NavbarAdmin.module.css'
import { useNavigate } from 'react-router-dom';
import UserProfile from '../../../Assets/image/Navbar/icon-user-profile.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarAdmin = ({ children, menu }) => {

    const navigate = useNavigate()
    const [Open, setOpen] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login/admin", { replace: true })
        window.location.reload()
    }

    return (
        <Submenu menu={menu} status={Open}>
            <Navbar key="sm" expand="sm" className={style.navbar}>
                <Container fluid>
                    <Button variant="transparant" onClick={() => setOpen(!Open)} aria-controls="example-collapse-text" aria-expanded={Open}><FontAwesomeIcon icon={faBars} /></Button>
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                    <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                                <b>BCR</b>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={'ms-auto align-items-center gap-2 gap-lg-4 '}>
                                <div>
                                    <Form className="d-flex">
                                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                        <Button className={'button-outline-primary'} variant="outline-primary">Search</Button>
                                    </Form>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="transparant" id="dropdown-basic">
                                        <img src={UserProfile} width="36px" height="36px" />
                                        <span className={'ms-2 me-2'}>{user.email.split('@')[0]}</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                {children}
            </div>
        </Submenu>
    )
}

export default NavbarAdmin