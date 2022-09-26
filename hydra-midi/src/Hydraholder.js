import React from "react";
import { useState } from 'react'

const Hydra = require('hydra-synth')  
const h = new Hydra({ makeGlobal: true, detectAudio: false }).synth

function Hydraholder()  { 


    const osc1 = h.osc(10, 0.01, 1.4)
    .rotate(0, 0.1)
    .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
    .color(2.83, 0.91, 0.39)

    const osc2 = h.noise(10, 0.01, 1.4)
        .rotate(0, 0.1)
        .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
        .color(2.83, 0.91, 0.39)

    const [preset, setPreset] =useState(osc1)

    return(
        <div>
            {preset.out()}
            <div>
            <button onClick={() => {setPreset(osc1)}}>Osc 1</button>
            <button onClick={() => {setPreset(osc2)}}>Osc2</button>
            </div>
        </div>
    )
}
export default Hydraholder

