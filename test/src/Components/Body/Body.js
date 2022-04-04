import './Body.css';
import React from 'react';
import Plot from 'react-plotly.js';
import Temperature from '../plotly-graph/temperature';
import TemperatureComparison from '../plotly-graph/temperature(comparison)';

function Body() {
    return(
        <div className='body'>
            <div className='colorTitle'>
                <h2>Température</h2>
            </div>
            <div className='cropping'>
                <div>
                    <p>Suivi climatique :</p>
                    <p>Année en cours (dernières 24 heures) :</p>
                    <Temperature/>
                    <p>Données temps réel température sous abri :</p>
                    <p>Données temps réel ressentie :</p>
                    <p>Prévision +-H :</p>
                    <p>Valeur la plus haute :</p>
                    <p>Valeur la plus basse :</p>
                </div>
                <div>
                    <p>Select date :</p>
                    <input type="date" name="" id=""/>
                    <p>Comparaison autres années :</p>
                    <TemperatureComparison/>
                </div>
            </div>
            <hr />
            <div className='colorTitle'>
                <h2>Pluviométrie</h2>
            </div>
        </div>
    );
}

export default Body;