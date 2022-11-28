import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../services/firebaseConfig'

export const Register = () =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')

    const registerWithPasswordAndEmail = () =>{

        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        console.log(`${firstName}
        ${lastName}
        ${registerEmail}
        ${registerPassword}
        ${registerPasswordConfirm}`)
    }

    return(
        <>
         <main id='mainRegister'>
            <div id='containerRegister'>
                <div id='imgRegister'>
                
                </div>
                <div id='formRegisterContainer'>
                    <h1 id='tituloRegister'>Crie uma conta!</h1>
                    <form id='formRegister'>
                        <div id='registerName' className='containerInput'>
                            <input type='text' id='inputFirstName' placeholder='Primeiro Nome' className='inputRegister' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <input type='text' id='inputLastName' placeholder='Sobrenome' className='inputRegister' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div  className='containerInput'>
                            <input type='email' id='inputEmailRegister' placeholder='Digite seu email...' className='inputRegister' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
                            </div>
                        <div id='registerPassword' className='containerInput'>
                            <input type='password'  placeholder='Senha' className='inputRegister' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}/>
                            <input type='password'  placeholder='Repita sua senha' className='inputRegister' value={registerPasswordConfirm}
                            onChange={(e) => setRegisterPasswordConfirm(e.target.value)}/>
                        </div>
                    </form>
                    <div id='btnRegisterContainer'>
                        <button className='btn btn-primary' id='btnRegister' onClick={registerWithPasswordAndEmail} >Registrar conta</button>
                        <hr/>
                    </div>
                    <div id='btnRegisterGoogleContainer'>
                        <i className="bi bi-google"></i>
                        <button className='btn btn-danger' id='btnRegisterGoogle'>Registre-se com o Google</button>
                        </div>
                        
                    <div id='linksAdicionais'>
                        <hr/>
                        <a>Esqueceu a senha?</a>
                        <a><Link to='/login'>Já tem uma conta? Faça login!</Link></a>
                    </div>
                </div>
            </div>
         </main>
        </>
    )
}