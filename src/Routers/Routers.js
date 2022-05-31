import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListCar from '../Views/Admin/Cars/ListCar/ListCar'
import ListCarAdd from '../Views/Admin/Cars/ListCar/ListCarAdd/ListCarAdd'
import ListCarEdit from '../Views/Admin/Cars/ListCar/ListCarEdit/ListCarEdit'
import Dashboard from '../Views/Admin/Dashboard/Dashboard/Dashboard'
import LoginAdmin from '../Views/Auth/LoginAdmin/LoginAdmin'
import LoginCustomer from '../Views/Auth/LoginCustomer/LoginCustomer'
import RegisterAdmin from '../Views/Auth/RegisterAdmin/RegisterAdmin'
import RegisterCustomer from '../Views/Auth/RegisterCustomer/RegisterCustomer'
import Homepage from '../Views/Homepage/Homepage'
import Checkout from '../Views/Order/Checkout/Checkout'
import Invoice from '../Views/Order/Invoice/Invoice'
import Payment from '../Views/Order/Payment/Payment'
import DetailCar from '../Views/Search/DetailCar/DetailCar'
import ResultCar from '../Views/Search/ResultCar/ResultCar'
import SearchCar from '../Views/Search/SearchCar/SearchCar'
import Protector from './Protector'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            <Route element={<Protector.AdminAuth />}>
                <Route path="/register/admin" element={<RegisterAdmin />} />
                <Route path="/login/admin" element={<LoginAdmin />} />
            </Route>

            <Route element={<Protector.CustomerAuth />}>
                <Route path="/register/customer" element={<RegisterCustomer />} />
                <Route path="/login/customer" element={<LoginCustomer />} />
            </Route>

            <Route element={<Protector.AdminRedirect />}>
                <Route path="/admin/dashboard/dashboard" element={<Dashboard />} />
                <Route path="/admin/cars/list-car" element={<ListCar />} />
                <Route path="/admin/cars/list-car/add" element={<ListCarAdd />} />
                <Route path="/admin/cars/list-car/edit/:id" element={<ListCarEdit />} />
            </Route>

            <Route element={<Protector.CustomerRedirect />}>
                <Route path="/search" element={<SearchCar />} />
                <Route path="/result/driver=:driver&date=:date&time=:time&passenger=:passenger" element={<ResultCar />} />
                <Route path="/detail/:id" element={<DetailCar />} />
                <Route path="/checkout/:id" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/invoice" element={<Invoice />} />
            </Route>

        </Routes>
    )
}

export default Routers