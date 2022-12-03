import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {firestore} from '../../services/firebaseConfig'
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore"; 

export const Register = () =>{

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('')
    
    async function registerWithPasswordAndEmail() {
        await setDoc(doc(firebase, 'users', 'userTeste'),{
            name: firstName,
            middle: lastName,
            email: registerEmail
        })
        .then(()=>{
            alert('cadastrado com sucesso')
        })
        .catch(()=>)
                
    
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
                            <input type='text' id='inputFirstName' placeholder='Primeiro Nome' className='inputRegister' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <input type='text' id='inputLastName' placeholder='Sobrenome' className='inputRegister' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
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
                        <button className='btn btn-primary' id='btnRegister' onClick={registerWithPasswordAndEmail} >Registrar conta</button>
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