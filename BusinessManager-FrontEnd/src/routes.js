import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ForgetPassword from './pages/forgetPassword'
import ConfigPassword from './pages/configPassword'
import Login from './pages/login'
import Register from './pages/register'

export default function PagesRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={(<Login/>)} path={"/"}/>
                <Route element={(<ForgetPassword/>)} path={"/forget-password"} />
                <Route element={(<Register/>)} path={"/register-company"} />
                <Route element={(<ConfigPassword/>)} path={'/config-password'}  />
            </Routes>
        </Router>
    )
}