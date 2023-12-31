import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";
export const RecoverPassword = () => {

    const [email, setEmail] = useState('')
    
    const sendEmail = () =>{
     
        
        
    }
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
                                <input type='email' id='inputEmailRecover' placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div id='buttonRecoverPassword'>
                                <button className='btn btn-primary' id='btnRecoverPassword' onClick={sendEmail}>Recuperar Senha</button>
                            </div>
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
