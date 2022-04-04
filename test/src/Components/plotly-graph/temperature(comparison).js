import React from "react";
import Plot from "react-plotly.js";

function TemperatureComparison() {
    return(
        <div>
            <Plot
                data={[
                    {
                        x: ['Janvier', 'février', 'mars'],
                        y: [25, 19, 21],
                        type: 'bar',
                        marker: {color: 'gold'}
                    }
                ]}
            />
        </div>
    )
}

export default TemperatureComparison;