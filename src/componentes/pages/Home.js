import React from "react";
import akaliNeon from '../imgs/akaliNeon.png'
import nextImg from '../imgs/next.svg'
import Header from '../pages/Header'
export default function Home(){
    return(
        <>
        <main id="mainHome">
            <div><Header/></div>
            <nav id="navHomePage" className="text-center container-fluid">
                <div id="navHomePageContainer" className="row">
                    <div id="txtContainerHome" className="col-md-6">
                    <div className="txtHome">
                        <p className="textSecundary ">NÓS SOMOS A:</p>
                            <p className=''id="textPrimary">ROCK JOB</p>
                        <p className="textSecundary">VENHA CONHECER NOSSOS PRODUTOS</p>
                    </div>
                    </div>
                    <div id="imgAkaliContainer" className="col-md-6">
                        <img className='img-fluid container'src={akaliNeon} alt=""/>    
                    </div>
                </div>
                <div id="nextHomeContainer">
                    <img className='img-fluid'src={nextImg} alt="" id="imgNext"/>   
                </div>
        </nav>
   </main>
    
    
        </>
    )
}