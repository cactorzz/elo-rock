import {React, useState} from 'react'

export const Register = () =>{
    return(
        <>
         <main id='mainRegister'>
            <div id='containerRegister'>
                <div id='imgRegister'>
                
                </div>
                <div id='formRegisterContainer'>
                    <h1>Crie uma conta!</h1>
                    <form id='formRegister'>
                        <div id='registerName' class='containerInput'>
                            <input type='text' id='inputFirstName' placeholder='Primeiro Nome' className='inputRegister'/>
                            <input type='text' id='inputLastName' placeholder='Sobrenome' className='inputRegister'/>
                        </div>
                        <div  class='containerInput'>
                            <input type='email' id='inputEmailRegister' placeholder='Digite seu email...' className='inputRegister'/>
                            </div>
                        <div id='registerPassword' class='containerInput'>
                            <input type='password' id='inputFirstName' placeholder='Senha' className='inputRegister'/>
                            <input type='password' id='inputFirstName' placeholder='Repita sua senha' className='inputRegister'/>
                        </div>
                    </form>
                    <div id='btnRegisterContainer'>
                        <button className='btn btn-primary' id='btnRegister'>Registrar conta</button>
                    </div>
                    <hr/>
                    <div id='btnRegisterGoogleContainer'>
                        <button className='btn btn-danger' id='btnRegisterGoogle'>Registre-se com o Google</button>
                        </div>
                    <hr/>
                    <div id='linksAdicionais'>
                        <a>Esqueceu a senha?</a>
                        <a>Já tem uma conta? Faça login!</a>
                    </div>
                </div>
            </div>
         </main>
        </>
    )
}