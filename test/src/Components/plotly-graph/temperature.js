import React from "react";
import Plot from "react-plotly.js";

function Temperature() {
    return(
        <div>
            <Plot
                data={[
                    {
                        x: ['Janvier', 'février', 'mars'],
                        y: [20, 14, 23],
                        type: 'bar',
                        marker: {color: 'blue'}
                    }
                ]}
            />
        </div>
    )
}

export default Temperature;