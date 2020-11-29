//PANTALA PARA DEJAR LISTO EL FORMATO EN QUE SE MUESTRA
import React, { useEffect, useState } from 'react';

const CardPrueba = () => {

    return (
        
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6"></img>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                </div>
                <div class="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>
        
    )
}

export default CardPrueba;