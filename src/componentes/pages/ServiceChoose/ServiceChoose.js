import React, {useState} from 'react'
import ferroLol from '../../imgs/icones_elo_lol/ferroLol.png'
import bronzeLol from '../../imgs/icones_elo_lol/bronzeLol.png'
import prataLol from '../../imgs/icones_elo_lol/prataLol.png'
import ouroLol from '../../imgs/icones_elo_lol/ouroLol.png'
import platinaLol from '../../imgs/icones_elo_lol/platinaLol.png'
import diamanteLol from '../../imgs/icones_elo_lol/diamanteLol.png'
import mestreLol from '../../imgs/icones_elo_lol/mestreLol.png'
import cupomDesconto from '../../imgs/CupomDesconto.png'


export default function ServiceChoose(){

    const [imgEloAtual, setImg]=useState(prataLol)
    const [imgEloDesejado, setImgDesejado]=useState(diamanteLol)
   
    const focarMiniatura = (id) =>{
       
        if(id === 'ferroMini'){
            
           
            return ()=>setImg(ferroLol)
        }else if(id === 'bronzeMini'){
            return()=>setImg(bronzeLol)
        }    
    }   
    return(
        <>
        <section id='ServiceChooseMain'> 
            <div id="mainContent">
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
                <div className='div' id='serviceContent'>
                    <div id='eloAtual'>
                        <div className='txtServiceContent'>
                            <h1>ELO ATUAL</h1>
                        </div>
                        <div className='imgServiceContent'>
                            <img src={imgEloAtual} className='imgEloService'></img>
                            
                        </div>
                        <div className='divisionServiceContent'>
                            <div className='eloAtualSelect'>
                                <select id='selectElo' className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value ='1'selected>Ferro</option>
                                <option value="2">Bronze</option>
                                <option value="3">Prata</option>
                                <option value="4">Ouro</option>
                                <option value="5">Platina</option>
                                <option value="6">Diamante</option>
                                </select>
                            </div>
                            <div className='DivisionAtualSelect'>
                                <select id='selectElo' class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>I</option>
                                    <option value="1">II</option>
                                    <option value="2">III</option>
                                    <option value="3">IV</option>
                                </select>
                            </div>
                           
                        </div>
                    </div>
                    <div id='eloDesejado'>
                    <div className='txtServiceContent'>
                            <h1>ELO DESEJADO</h1>
                        </div>
                        <div className='imgServiceContent'>
                            <img src={imgEloDesejado} className='imgEloService'></img>
                        </div>
                        <div className='divisionServiceContent'>
                        <div className='eloAtualSelect'>
                                <select id='selectElo'  class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value='1'>Ferro</option>
                                <option value="2">Bronze</option>
                                <option value="3">Prata</option>
                                <option value="4">Ouro</option>
                                <option value="5">Platina</option>
                                <option value="6" selected>Diamante</option>
                                </select>
                            </div>
                            <div id='selectElo'  className='DivisionAtualSelect'>
                                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>I</option>
                                    <option value="1">II</option>
                                    <option value="2">III</option>
                                    <option value="3">IV</option>
                                </select>
                            </div>
                           
                            {/* <img src={mestreLol} className='imgEloDivision'></img> */}
                        </div>
                    </div>
                </div>
                <div className='div' id='footerService'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
            </div>  
            <div id="mainFinalizate">
                <div className='div item2' id='finalityService'>
                    <div id='txtFinality'>
                        <h2 id='txtServiços'>SERVIÇOS ADICIONAIS</h2>
                    </div>
                    <div id='adicionaisFinality'>
                        <div id='inputFinality'>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd' className="input-group-text" >
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Flash no D (GRÁTIS)</div>
                                </div>
                            </div>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd' className="input-group-text" >
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Flash no F (GRÁTIS)</div>
                                </div>
                            </div>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd'className="input-group-text" >
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Chat desligado (GRÁTIS)</div>
                                </div>
                            </div>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd' className="input-group-text" >
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Horário específico (+25%)</div>
                                </div>
                            </div>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd' className="input-group-text" >
                                    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Lane específica (+15%)</div>
                                </div>
                            </div>
                            <div id='inputFilityContainer'>
                                <div id='checkboxAdd'className="input-group-text" >
                                    <input className="form-check-input mt-0 disabled" type="checkbox" value="" aria-label="Checkbox for following text input"/><div id='textCheckbox'>Serviço prioritário (+20%)</div>
                                </div>
                            </div>
                        
        
                        </div>              
                    </div>
                    <div id='finalizarFinality'>
                        <h5 id='txtH5' className='text-decoration-line-through'>DE: R$200,00</h5>
                        <div id='finalPrice'>
                            <h4 id='txtH4'>POR:</h4>
                            <h4 id='txtH4' className='precoDesconto'>R$150,00</h4>
                        </div>
                        <div id='cupomFinal'>
                            <h4 id='txtH3'>20% de desconto com o cupom</h4>
                            <h3 id='txtH3' className='precoDesconto' id='cumpomDesconto'>
                                <img id='imgDesconto'src={cupomDesconto}></img>
                                 NOVASEASON
                                </h3>
                        </div>
                        <button className='btn btn-success btn-lg btn-finalizar'>FINALIZAR</button>
                    </div>
        
                </div>
            </div>
        </section>
        </>
    )
}