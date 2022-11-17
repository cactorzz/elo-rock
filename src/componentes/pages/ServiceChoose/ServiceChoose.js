import React from 'react'
import ferroLol from '../../imgs/icones_elo_lol/ferroLol.png'
import bronzeLol from '../../imgs/icones_elo_lol/bronzeLol.png'
import prataLol from '../../imgs/icones_elo_lol/prataLol.png'
import ouroLol from '../../imgs/icones_elo_lol/ouroLol.png'
import platinaLol from '../../imgs/icones_elo_lol/platinaLol.png'
import diamanteLol from '../../imgs/icones_elo_lol/diamanteLol.png'
import mestreLol from '../../imgs/icones_elo_lol/mestreLol.png'



export default function ServiceChoose(){
    return(
        <>
        <section id='ServiceChooseMain'>   
            <div className='div' id='headerService'>
                <div className='container-fluid' id='headerChoose'>
                    <select id='selectService' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example'>
                        <option selected>Selecione seu serviço</option>
                        <option value="1">ELOJOB</option>
                        <option value="2">DUOBOOST</option>
                        <option value="3">COACH</option>
                    </select>
                </div>
            </div>
            <div className='div item2' id='finalityService'>teste2</div>
            <div className='div' id='serviceContent'>
                <div id='eloAtual'>
                    <div className='txtServiceContent'>
                        <h1>ELO ATUAL</h1>
                    </div>
                    <div className='imgServiceContent'>
                        <img src={prataLol} className='imgEloService'></img>
                    </div>
                    <div className='divsionServiceContent'>
                        <img src={ferroLol} className='imgEloDivision'></img>
                        <img src={bronzeLol} className='imgEloDivision'></img>
                        <img src={prataLol} className='imgEloDivision'></img>
                        <img src={ouroLol} className='imgEloDivision'></img>
                        <img src={platinaLol} className='imgEloDivision'></img>
                        <img src={diamanteLol} className='imgEloDivision'></img>
                        {/* <img src={mestreLol} className='imgEloDivision'></img> */}
                    </div>
                </div>
                <div id='eloDesejado'>
                <div className='txtServiceContent'>
                        <h1>ELO ATUAL</h1>
                    </div>
                    <div className='imgServiceContent'>
                        <img src={diamanteLol} className='imgEloService'></img>
                    </div>
                    <div className='divsionServiceContent'>
                        <img src={ferroLol} className='imgEloDivision'></img>
                        <img src={bronzeLol} className='imgEloDivision'></img>
                        <img src={prataLol} className='imgEloDivision'></img>
                        <img src={ouroLol} className='imgEloDivision'></img>
                        <img src={platinaLol} className='imgEloDivision'></img>
                        <img src={diamanteLol} className='imgEloDivision'></img>
                        {/* <img src={mestreLol} className='imgEloDivision'></img> */}
                    </div>
                </div>
            </div>
            <div className='div' id='footerService'>
                
            </div>

        </section>
        </>
    )
}