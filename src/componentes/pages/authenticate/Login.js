import {React, useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../services/firebaseConfig'
import { Link } from 'react-router-dom';



export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginEmailPassword = () =>{
        const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                alert('logado')
                const user = userCredential.user;
                // ...
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
                        <div id='h1LoginTXTContainer'>
                            <h1>Bem-vindo de volta!</h1>
                            <p>Faça login abaixo</p>
                        </div>
                        <form id='formLogin'>
                            <input type='email' id='inputEmail' placeholder='Digite seu email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type='password' id='inputPassword' placeholder='**********.'value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div id='rememberMeContainer'>
                                <input type='checkbox' id='rememberMe'></input>
                                <label htmlFor='rememberMe' id='rememberMeLabel'>Lembrar senha</label>
                            </div>
                        </form>
                       
                        <div id='btnLoginContainer'>
                            <button href="index.html" className="btn btn-primary" id="btnLogin" onClick={loginEmailPassword}>Login</button>
                        </div>
                        <div id='addLinksLogin'>
                            <a className='text-center addLinksLogin'><Link to='/recover-password'>Esqueceu a senha?</Link></a>
                            
                            <a className='text-center addLinksLogin'><Link to='/register'>Criar uma conta</Link></a> 
                        </div>
                    </div>
                </div>
            </nav>
        </main>
        </>
        
    )
}

export default Login
