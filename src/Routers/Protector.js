import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRedirect = () => {
    if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user.email && user.role && user.token) {
            if (user.role === "admin") {
                return <Outlet />
            } else if (user.role === "Customer") {
                alert("Sorry, you don't have access to this page. Please, logout and login as Admin.")
                return <Navigate to="/search" />
            } else {
                localStorage.removeItem("user")
                return <Navigate to="/login/admin" />
            }
        } else {
            localStorage.removeItem("user")
            return <Navigate to="/login/admin" />
        }
    } else {
        return <Navigate to="/login/admin" />
    }
}

const CustomerRedirect = () => {
    if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user.email && user.role && user.token) {
            if (user.role === "Customer") {
                return <Outlet />
            } else if (user.role === "admin") {
                alert("Sorry, you don't have access to this page. Please, logout and login as Customer.")
                return <Navigate to="/admin/dashboard/dashboard" />
            } else {
                localStorage.removeItem("user")
                return <Navigate to="/login/customer" />
            }
        } else {
            localStorage.removeItem("user")
            return <Navigate to="/login/customer" />
        }
    } else {
        return <Navigate to="/login/customer" />
    }
}

const AdminAuth = () => {
    if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user.email && user.role && user.token) {
            if (user.role === "admin") {
                return <Navigate to="/admin/dashboard/dashboard" />
            } else if (user.role === "Customer") {
                alert("Sorry, you are login as Customer. Please, logout first to access this page.")
                return <Navigate to="/search" />
            } else {
                localStorage.removeItem("user")
                return <Outlet />
            }
        } else {
            localStorage.removeItem("user")
            return <Outlet />
        }
    } else {
        return <Outlet />
    }
}

const CustomerAuth = () => {
    if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user.email && user.role && user.token) {
            if (user.role === "Customer") {
                return <Navigate to="/search" />
            } else if (user.role === "admin") {
                alert("Sorry, you are login as Admin. Please, logout first to access this page.")
                return <Navigate to="/admin/dashboard/dashboard" />
            } else {
                localStorage.removeItem("user")
                return <Outlet />
            }
        } else {
            localStorage.removeItem("user")
            return <Outlet />
        }
    } else {
        return <Outlet />
    }
}

const Protector = {
    AdminRedirect,
    CustomerRedirect,
    AdminAuth,
    CustomerAuth,
}

export default Protector