import React from 'react'
import { Container, Navbar, Offcanvas, Nav, Dropdown } from 'react-bootstrap'
import style from './NavbarCustomer.module.css'
import LogoPrimary from '../../../Assets/image/Navbar/img-logo-primary.png'
import UserProfile from '../../../Assets/image/Navbar/icon-user-profile.svg'
import { useNavigate } from 'react-router-dom'

const NavbarCustomer = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login/customer", { replace: true })
        window.location.reload()
    }

    return (
        <Navbar key="sm" expand="sm" className={style.navbar}>
            <Container>
                <Navbar.Brand href="/"><img src={LogoPrimary} alt="Binar Car Rental" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
                <Navbar.Offcanvas id="offcanvasNavbar-expand-sm" aria-labelledby="offcanvasNavbarLabel-expand-sm" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                            <b>BCR</b>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className={'ms-auto gap-2 gap-lg-4 '}>
                            <Nav.Link href="/#OurService-Homepage" className={'my-auto ' + style.nav_link}>Our Service</Nav.Link>
                            <Nav.Link href="/#WhyUs-Homepage" className={'my-auto ' + style.nav_link}>Why Us</Nav.Link>
                            <Nav.Link href="/#Testimonial-Homepage" className={'my-auto ' + style.nav_link}>Testimonial</Nav.Link>
                            <Nav.Link href="/#FAQ-Homepage" className={'my-auto ' + style.nav_link}>FAQ</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparant" id="dropdown-basic">
                                    <img src={UserProfile} width="38px" height="38px" />
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
    )
}

export default NavbarCustomer