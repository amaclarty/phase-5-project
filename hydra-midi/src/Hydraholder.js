import { render } from "@testing-library/react";
import React from "react";
import { useState } from 'react'

// osc (frequency, sync, offset)
// noise(scale, offset)
// shape(sides, radius, smoothing
// solid(r, g, b, a )
// voronoi( scale, speed, blending
// gradient(speed )
// Outputs

const Hydra = require('hydra-synth')  
const h = new Hydra({ makeGlobal: true, detectAudio: false }).synth

function Hydraholder()  { 


    const osc1 = h.osc(10, 0.01, 1.4)
    .rotate(0, 0.1)
    .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
    .color(2.83, 0.91, 0.39)
    

    const osc2 = h.osc()
        .rotate(0, 0.1)
        .colorama()
        .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
        .color(2.83, 0.91, 0.39)
        .modulate(osc1)
        .colorama()
        

    const osc3 =h.voronoi(400, 0, 0)
        .diff(h.voronoi(100, 2, 1))
        .blend(h.osc(.83, 0.91, 0.39))
        .mask(h.shape(300, .2))
        .rotate(10, .1)
        .diff(h.shape(420, .7))
        .rotate(-8, 1)
        .diff(h.shape(640.2, .5))
        .diff(h.gradient())
        .modulate(osc2)
    
    // const osc4 = osc1.mult(h.noise())
        

    const [preset, setPreset] =useState(osc1)

    return(
        <div>
            {preset.out()}
            <div>
            <button onClick={() => {setPreset(osc1)}}>Osc 1</button>
            <button onClick={() => {setPreset(osc2)}}>Osc2</button>
            <button onClick={() => {setPreset(osc3)}}>Osc3</button>
            {/* <button onClick={() => {setPreset(osc4)}}>Osc4</button> */}
            </div>
        </div>
    )
}
export default Hydraholder

