import { render } from "@testing-library/react";
import React from "react";
import {useState} from 'react'
import Hydraholder from './Hydraholder'
// osc (frequency, sync, offset)
// noise(scale, offset)
// shape(sides, radius, smoothing
// solid(r, g, b, a )
// voronoi( scale, speed, blending
// gradient(speed )
// Outputs



function App() {
  

    // const Hydra = require('hydra-synth')   

    // const h = new Hydra({ makeGlobal: true, detectAudio: false }).synth

    // const osc1 = h.osc(10, 0.01, 1.4)
    //     .rotate(0, 0.1)
    //     .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
    //     .color(2.83, 0.91, 0.39)
    //     // .out()

    // const osc2 = h.noise(10, 0.01, 1.4)
    //     .rotate(0, 0.1)
    //     .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
    //     .color(2.83, 0.91, 0.39)

    // const [oscillator, setOscillator] =useState(osc1)

    return(
        <div id='vidya'>
             <Hydraholder />

            
        </div>
    )
}

export default App;
