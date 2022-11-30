import React from 'react'
import { Link } from 'react-router-dom'

export const RecoverPassword = () => {
    return (
            <main id='MainRecoverPassword'>
                <div id='RecoverPasswordContainer'>
                    <div id='imgRecoverPassword'>
                    </div>
                    <div id='containerFormRecoverPassword'>
                        <div id='formRecoverPassword'>
                            <div id='recoverPasswordTittle'>
                                <h1 id='h1RecoverTittle'>Esqueceu sua senha?</h1>
                                <h4 id='h4RecoverTittle'>Fique tranquilo! Digite seu email abaixo que enviaremos um link para redefinir sua senha!</h4>
                            </div>
                            
                            <div id='emailRecoverPassword'>
                                <input type='email' id='inputEmailRecover' placeholder='Digite seu email...'/>
                            </div>
                            <div id='buttonRecoverPassword'>
                                <button className='btn btn-primary' id='btnRecoverPassword'>Recuperar Senha</button>
                            </div>
                            <hr/>
                            <div id='linksAdicionais'>
                                <a><Link to='/login'>Já tem uma conta? Faça login!</Link></a>
                                <a><Link to='/register'>Criar uma conta!</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
      
    )
}
