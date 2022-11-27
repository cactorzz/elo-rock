import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../componentes/pages/authenticate/Login.js'
import { Home } from '../componentes/pages/Home.js'import { ServicePage } from '../componentes/pages/servicePage/ServicePage'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/login" element={<Login/>}/>
                
                
            </Routes>
        </BrowserRouter>
    )
} 