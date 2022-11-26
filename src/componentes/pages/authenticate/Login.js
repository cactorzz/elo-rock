import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../services/firebaseConfig'
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const btnLogin = document.getElementById('btnLogin')

export const Login = () => {
    const loginEmailPassword = () =>{
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                alert('logasdo com sucesso')
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                alert('erro')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <>
        <main id='mainLogin'>
            <nav id='containerLogin'>
                <div id='imgLogin'>

                </div>
                <div id='formLoginContainer'>
                    <div className='container-fluid' id='containerLoginForm'>
                        <h1>Bem-vindo de Volta!</h1>
                        <form id='formLogin'>
                            <input type='email' id='inputEmail' placeholder='Digite seu email...'/>
                            <input type='password' id='inputPassword' placeholder='**********.'/>
                            <div id='rememberMeContainer'>
                                <input type='checkbox' id='rememberMe'></input>
                                <label htmlFor='rememberMe' id='rememberMeLabel'>Lembrar senha</label>
                            </div>
                        </form>
                        <hr/>
                        <div id='btnLoginContainer'>
                            <button href="index.html" className="btn btn-primary" id="btnLogin" onClick={loginEmailPassword}>Login</button>
                        </div>
                        <hr/>
                        <div className='text-center'>
                            <a href='#'>Esqueceu a senha?</a>
                        </div>
                        <div className='text-center'>
                            <a href='#'>Criar uma conta</a>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
        </>
        
    )
}

export default Login
