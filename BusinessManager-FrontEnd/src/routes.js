import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
    Login, Register, ForgetPassword, ConfigPassword, HomePage, UserPage,
    RegisterProduct, EditProduct, EditUser, ListUser, ListProduct
} from './pages'

export default function PagesRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={(<Login />)} path={"/"} />
                <Route element={(<ForgetPassword />)} path={"/forget-password"} />
                <Route element={(<Register />)} path={"/register-company"} />
                <Route element={(<ConfigPassword />)} path={'/config-password'} />
                <Route element={(<HomePage />)} path={'/home'} />
                <Route element={(<UserPage />)} path={'/user/register'} />
                <Route element={(<RegisterProduct />)} path={'/product/register'} />
                <Route element={(<EditProduct />)} path={'/product/edit'} />
                <Route element={(<EditUser />)} path={'/user/edit'} />
                <Route element={(<ListUser />)} path={'/user'} />
                <Route element={(<ListProduct />)} path={'/product'} />
            </Routes>
        </Router>
    )
}