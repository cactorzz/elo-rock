import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../componentes/pages/authenticate/Login.js'
import { Register } from '../componentes/pages/authenticate/Register.js'
import { Home } from '../componentes/pages/homepage/Home.js'
import {RecoverPassword} from '../componentes/pages/authenticate/RecoverPassword.js'
import Index from '../componentes/pages/index'
import Teste from '../componentes/pages/teste/Header/index'

export const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Teste/>}/> 
                <Route path="/login" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/recover-password' element={<RecoverPassword/>}/>
                
            </Routes>
        </BrowserRouter>
    )
} 

export default AppRoutes