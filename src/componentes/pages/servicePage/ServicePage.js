import React from 'react'

import Cards from './Card1'
export default function ServicePage (){
    return(
        <section id='servicePage'>
            <div id='serviceTextContainer'>
                <h1 id='serviceTextPrimary' className='display-1 '><strong>SERVIÇOS</strong></h1>
                <h3 className='display-6 text-center' id='serviceTextSecundary'>ESCOLHA O QUE MAIS SE ENQUADRE NA SUA SITUAÇÃO!</h3>
            </div>
            <div id='serviceCardsContainer'>
                <div id='serviceCard1'>
                   <Cards/>
                </div>
            </div>
        </section>
    )
}