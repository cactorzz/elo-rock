import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../componentes/pages/authenticate/Login.js'
import { ServicePage } from '../componentes/pages/servicePage/ServicePage'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="ServicePage" element={<ServicePage/>}/> 
            </Routes>
        </BrowserRouter>
    )
}