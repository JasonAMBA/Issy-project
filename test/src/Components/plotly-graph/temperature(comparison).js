import React from "react";
import Plot from "react-plotly.js";

function TemperatureComparison() {
    return(
        <div>
            <Plot
                data={[
                    {
                        x: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul','Sep', 'Oct','Nov','Dec'],
                        y: [25, 19, 21 ,16, 18, 22, 19, 15, 12, 16, 14, 17],
                        type: 'bar',
                        marker: {color: 'gold'}
                    }
                ]}
            />
        </div>
    )
}

export default TemperatureComparison;