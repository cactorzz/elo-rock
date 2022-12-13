import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, displayName } from "firebase/auth";
import {app, firestore} from '../../services/firebaseConfig'
import { setDoc, getFirestore, doc } from "firebase/firestore"; 




export const Register = () =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')
    
    const validateUser  = () =>{

    }

    async function registerUser(){
        const auth = getAuth();
            if (registerPassword === registerPasswordConfirm){
                createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
                    .then(async (userCredential) => {
                        const user = userCredential.user;
                        const uid = userCredential.user.uid
               
                        await setDoc(doc(firestore, 'users', uid), {
                            name: firstName,
                            middle: lastName,
                            email: registerEmail,
                            password: registerPassword,
                            userLevel: 'user'
                        });
                  
                    alert('sucesso')
                    })
                    .catch((error) => {
                    if (error.code === 'auth/email-already-in-use'){
                        alert('EMAIL EM USO')
                    }else if (error.code === 'auth/weak-password'){
                        alert('senha muito fraca')
                    }else if (error.code === 'auth/internal-error'){
                        alert('Erro no servidor, se o erro persistir, informe o problema no nosso discord.')
                    }else if(error.code === 'auth/invalid-email'){
                        alert('digite um email válido')
                    }else{
                        alert(error.code)
                    }
            });
            }else{
                alert('as senhas nao sao iguais')
            }
            
    }
    return(
         <main id='mainRegister'>
            <div id='containerRegister'>
                <div id='imgRegister'>
                
                </div>
                <div id='formRegisterContainer'>
                    <div id='textRegisterForm'>
                        <h1 id='tituloRegister'>Crie sua conta!</h1>
                    </div>
                    <form id='formRegister'>
                        <div id='registerName' className='containerInput'>
                            <input type='text' id='inputFirstName' placeholder='Primeiro Nome' className='inputRegister'  required value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <input type='text' id='inputLastName' placeholder='Sobrenome' className='inputRegister' required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div  className='containerInput'>
                            <input type='email' id='inputEmailRegister' placeholder='Digite seu email...' className='inputRegister' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}/>
                            </div>
                        <div id='registerPassword' className='containerInput'>
                            <input type='password'  placeholder='Senha' className='inputRegister' id='inputPasswordRegister' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)}/>
                            <input type='password'  placeholder='Repita sua senha' className='inputRegister'  value={registerPasswordConfirm}
                            onChange={(e) => setRegisterPasswordConfirm(e.target.value)}/>
                        </div>
                    </form>
                    <div id='btnRegisterContainer'>
                        <button className='btn btn-primary' id='btnRegister' onClick={registerUser} >Registrar conta</button>
                        <hr/>
                    </div>
                    <div id='linksAdicionais'>
                        <div id='linksContainer'>
                            <Link to='/login'>Já tem uma conta? Faça login!</Link>
                            <Link to='/recover-password'>Esqueceu a senha?</Link>
                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                    
                    </div>
                </div>
            </div>
         </main>
        
    )
}