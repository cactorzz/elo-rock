import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../componentes/pages/authenticate/Login.js'
import { Register } from '../componentes/pages/authenticate/Register.js'
import { Home } from '../componentes/pages/Home.js'
import {RecoverPassword} from '../componentes/pages/authenticate/RecoverPassword.js'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/recover-password' element={<RecoverPassword/>}/>
                
            </Routes>
        </BrowserRouter>
    )
} 