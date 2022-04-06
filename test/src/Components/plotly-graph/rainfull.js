import React from "react";
import Plot from "react-plotly.js";
import './rainfull.css';

function Rainfull() {  
    return(
        <div>
            <Plot
                data={[
                    {
                        x: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul','Sep', 'Oct','Nov','Dec'],
                        y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
                        name: 'Reel',
                        type: 'bar',
                        opacity: 0.7
                    },
                    {
                        x: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul','Sep', 'Oct','Nov','Dec'],
                        y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
                        name: 'Attendu',
                        type: 'bar',
                        marker: {color: 'green'},
                        opacity: 0.7
                    }
                ]}
                layout={{barmode:'group'}}
            />
        </div>
    )
}

export default Rainfull