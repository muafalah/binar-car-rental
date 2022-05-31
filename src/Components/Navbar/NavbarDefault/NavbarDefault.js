import React from 'react'
import { Container, Navbar, Offcanvas, Nav, Button } from 'react-bootstrap'
import style from './NavbarDefault.module.css'
import LogoPrimary from '../../../Assets/image/Navbar/img-logo-primary.png'

const NavbarDefault = () => {
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
                            <Nav.Link href="/register/customer"><Button variant="success">Register</Button></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavbarDefault