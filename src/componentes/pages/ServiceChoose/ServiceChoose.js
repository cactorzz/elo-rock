import React from 'react'
import PlatinaImg from '../../imgs/platinaImg.png'
import ChallangerImg from '../../imgs/ChallangerImg.png'

export default function ServiceChoose(){
    return(
        <>
        <section id='ServiceChooseMain'>   
            <div className='container-fluid' id='headerChoose'>
                <select id='selectService' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example'>
                <option selected>Selecione seu serviço</option>
                <option value="1">ELOJOB</option>
                <option value="2">DUOBOOST</option>
                <option value="3">COACH</option>
            </select>
            </div>
            <div id='eloChoose'>
                <div id='eloAtual'>
                    {/* <h1 className='h1Txt'>ELO ATUAL</h1>
                    <img id='PlatinaImg' className='eloImg' src={PlatinaImg}></img>
                    <div id='selectYourEloContainer'>
                        <div id='containerSelectYourElo'>
                            <select id='SelectAtualElo' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example selectYourElo'>
                                <option selected value="1">Ferro</option>
                                <option value="2">Bronze</option>
                                <option value="3">Prata</option>
                                <option value="4">Ouro</option>
                                <option value="5">Platina</option>
                                <option value="6">Diamante</option>
                                <option value="7">Mestre</option>
                            </select>
                        </div>
                        <div>
                            <select id='SelectAtualElo' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example selectYourElo'>
                                <option selected value="1">I</option>
                                <option value="2">II</option>
                                <option value="3">III</option>
                                <option value="4">IV</option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div id='eloDesejado'>
                    {/* <h1 className='h1Txt'>ELO DESEJADO</h1>
                        <img id='PlatinaImg'className='eloImg'src={ChallangerImg}></img>
                        <div id='selectRequireEloContainer'>
                            <div id='containerSelectRequireElo'>
                                <select id='SelectRequireElo' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example selectYourElo'>
                                    <option selected value="1">Ferro</option>
                                    <option value="2">Bronze</option>
                                    <option value="3">Prata</option>
                                    <option value="4">Ouro</option>
                                    <option value="5">Platina</option>
                                    <option value="6">Diamante</option>
                                    <option value="7">Mestre</option>
                                </select>
                            </div>
                            <div id='selectDivison'>
                                <select id='SelectRequireDivison' className='form-select form-select-lg mb-3" aria-label=".form-select-lg example selectYourElo'>
                                    <option selected value="1">I</option>
                                    <option value="2">II</option>
                                    <option value="3">III</option>
                                    <option value="4">IV</option>
                                </select>
                            </div>
                        </div> */}
                </div>
            </div>
            <div id='footerChoose'>
                <div id='addServices'>
                    <h4>SERVIÇOS ADICIONAIS</h4>
                    <div id='SelectAdd'>
                        <label for="active" title='Change to true' class='css-1utmwx4'>
                            <input type='checkbox' id='control-active'></input>
                            </label>
                            <span>ON</span>
                            <span>OFF</span>
                    </div>
                </div>
                <div id='fullValue'>
                    <h3>VALOR TOTAL</h3>
                    <h4>R$200,00</h4>
                    <button type="button" class="btn btn-success btn-lg btnBuy ">COMPRAR</button>
                </div>
            </div>
        </section>
        </>
    )
}