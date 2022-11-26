import React from 'react'

export const Login = () => {
    const singWithEmailAndPassword = () =>{

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
                                <label for='rememberMe' id='rememberMeLabel'>Lembrar senha</label>
                            </div>
                        </form>
                        <hr/>
                        <div id='btnLoginContainer'>
                            <button href="index.html" class="btn btn-primary" id="btnLogin">Login</button>
                        </div>
                        <hr/>
                        <div class='text-center'>
                            <a href='#'>Esqueceu a senha?</a>
                        </div>
                        <div class='text-center'>
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
