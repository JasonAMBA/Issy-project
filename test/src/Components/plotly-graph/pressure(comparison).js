import React from "react";
import Plot from "react-plotly.js";

function PressureComparison() {
    return(
        <div>
            <Plot
                data={[
                    {
                        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                        y: [1, 3, 6],
                        type: 'scatter'
                    }
                ]}
            />
        </div>
    )
}

export default PressureComparison;