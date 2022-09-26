import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login'

export default function PagesRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={(<Login/>)} path={"/"}/>
            </Routes>
        </Router>
    )
}