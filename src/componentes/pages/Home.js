import React from "react";
import akaliNeon from '../imgs/akaliNeon.png'
import nextImg from '../imgs/next.svg'
import estrelaNeon from '../imgs/estrelaNeon.svg'
export default function Home(){
    return(
        <>
        <main id='mainHome' className='container-fluid flex-w'>
            <div id="mainContainer">
                <div id='textHome' >
                    <h3 className="secundaryTxtHome">NÓS SOMOS A:</h3>
                    <h1 id='primaryTxtHome'>ROCK JOB</h1>
                    <h3 className="secundaryTxtHome">VENHA CONHECER NOSSOS SERVIÇOS</h3>
                </div>
                <div id='imgNextHome'>
                    <img id='imgNext'src={nextImg}/>
                </div>
                <div id='imgsHome'>
                    <img className='img-fluid' id='akaliImg' src={akaliNeon}/>
                </div>
            </div>
        </main>
        </>
    )
}