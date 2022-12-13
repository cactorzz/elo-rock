import React from "react";
import Header from "../header/Header.tsx";

export const Home = () =>{
    return(
        <main id='homePage'>
            <div id='header'>
                <Header/>
            </div>
            <div id='homeContent'>
                <div id='textHomeContainer' >
                    <h1 id='textPrimary' className="h1">ELOROCK</h1>
                    <h2 id='textSecundary'>SUBA DE ELO DE COM VELOCIDADE E SEGURANÇA CONOSCO!</h2>
                </div>
                <div id='homeButtonsContainer' className="container-fluid">
                    <button type='button' className="btn btnHome1">CONHEÇA MAIS SOBRE NÓS</button>
                    <button type='button' className="btn btnHome1">CONHEÇA NOSSOS SERVIÇOS</button>
                </div>
            </div>
        </main>
    )
}

export default Home