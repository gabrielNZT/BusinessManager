import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ForgetPassword from './pages/forgetPassword'
import Login from './pages/login'

export default function PagesRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={(<Login/>)} path={"/"}/>
                <Route element={(<ForgetPassword/>)} path={"/forget-password"} />
            </Routes>
        </Router>
    )
}