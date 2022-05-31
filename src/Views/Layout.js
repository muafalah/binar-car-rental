import React from 'react'
import FooterCustomer from '../Components/Footer/FooterCustomer/FooterCustomer'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import NavbarAdmin from '../Components/Navbar/NavbarAdmin/NavbarAdmin'
import NavbarCustomer from '../Components/Navbar/NavbarCustomer/NavbarCustomer'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import Sidebar from '../Components/Sidebar/Sidebar/Sidebar'

const Default = ({ children }) => {
    return (
        <>
            <header>
                <NavbarDefault />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <FooterDefault />
            </footer>
        </>
    )
}

const Admin = ({ children, menu }) => {
    return (
        <>
            <Sidebar>
                <NavbarAdmin menu={menu}>
                    {children}
                </NavbarAdmin>
            </Sidebar>
        </>
    )
}

const Customer = ({ children }) => {
    return (
        <>
            <header>
                <NavbarCustomer />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <FooterCustomer />
            </footer>
        </>
    )
}

const Layout = {
    Default,
    Admin,
    Customer,
}

export default Layout