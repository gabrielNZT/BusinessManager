import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Login, Register, ForgetPassword, ConfigPassword, HomePage, UserPage} from './pages'

export default function PagesRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={(<Login/>)} path={"/"}/>
                <Route element={(<ForgetPassword/>)} path={"/forget-password"} />
                <Route element={(<Register/>)} path={"/register-company"} />
                <Route element={(<ConfigPassword/>)} path={'/config-password'}  />
                <Route element={(<HomePage/>)} path={'/home'} />
                <Route element={(<UserPage/>)} path={'/user'} />
            </Routes>
        </Router>
    )
}