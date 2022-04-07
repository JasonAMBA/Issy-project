import './Body.css';
import React from 'react';
import Temperature from '../plotly-graph/temperature';
import TemperatureComparison from '../plotly-graph/temperature(comparison)';
import Rainfull from '../plotly-graph/rainfull';
import RainfullComparison from '../plotly-graph/rainfull(comparison)';
import Wind from '../plotly-graph/wind';
import WindComparison from '../plotly-graph/wind(comparison)';
import Pressure from '../plotly-graph/pressure';
import PressureComparison from '../plotly-graph/pressure(comparison)';
import Humidity from '../plotly-graph/humidity';
import HumidityComparison from '../plotly-graph/humidity(comparison)';
import Sunshine from '../plotly-graph/sunshine';
import SunshineComparison from '../plotly-graph/sunshine(comparison)';

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
            <div>
                <p>Suivi pluviométrie :</p>
                <p>Année en cours (dernières 24 heures) :</p>
                <Rainfull/>
                <p>Données du jour :</p>
                <p>Pas de pluie depuis :</p>
                <p>Type de précipitations :</p>
                <p>Valeur la plus haute :</p>
                <p>Valeur la plus basse :</p>
                <p>Select date : </p>
                <input type="date" name="" id=""/>
                <p>Comparaison autres années :</p>
                <RainfullComparison/>
            </div>
            <hr />
            <div className='colorTitle'>
                <h2>Vent</h2>
            </div>
            <div className='cropping'>
                <div>
                    <p>Suivi du vent :</p>
                    <p>Année en cours (dernières 24 heures) :</p>
                    <Wind/>
                    <p>Valeur la plus haute :</p>
                    <p>Valeur la plus basse :</p>
                </div>
                <div>
                    <p>Select date :</p>
                    <input type="date" name="" id=""/>
                    <p>Comparaison autres années :</p>
                    <WindComparison/>
                </div>
            </div>
            <hr />
            <div className='colorTitle'>
                <h2>Pression et humidité</h2>
            </div>
            <div className='cropping'>
                <div>
                    <p>Suivi de la pression :</p>
                    <p>Année en cours (dernières 24 heures) :</p>
                    <Pressure/>
                    <p>Valeur la plus haute :</p>
                    <p>Valeur la plus basse :</p>
                    <p>Suivi de l'humidité :</p>
                    <p>Année en cours (dernières 24 heures) :</p>
                    <Humidity/>
                </div>
                <div>
                    <p>Select date :</p>
                    <input type="date" name="" id=""/>
                    <p>Comparaison autres années :</p>
                    <PressureComparison/>
                    <p>Select date :</p>
                    <input type="date" name="" id=""/>
                    <p>Comparaison autres années :</p>
                    <HumidityComparison/>
                </div>
            </div>
            <hr />
            <div className='colorTitle'>
                <h2>Ensoleillement</h2>
            </div>
            <div className='cropping'>
                <div>
                    <p>Suivi de l'ensoleillement</p>
                    <p>Année en cours (dernières 24 heures) :</p>
                    <Sunshine/>
                    <p>Valeur la plus haute :</p>
                    <p>Valeur la plus basse :</p>
                </div>
                <div>
                    <p>Select date :</p>
                    <input type="date" name="" id=""/>
                    <p>Comparaison autres années :</p>
                    <SunshineComparison/>
                </div>
            </div>
        </div>
    );
}

export default Body;