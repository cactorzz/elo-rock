import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../componentes/pages/authenticate/Login.js'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="ServicePage" element={<ServicePage/>}/> */}
                <Route path="/" element={<Login/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}