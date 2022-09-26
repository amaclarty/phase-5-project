import { render } from "@testing-library/react";
import React from "react";
import {useState} from 'react'

function App() {

    const Hydra = require('hydra-synth')   

    const h = new Hydra({ makeGlobal: false, detectAudio: false }).synth
    h.osc(10, 0.01, 1.4)
        .rotate(0, 0.1)
        .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
        .color(2.83, 0.91, 0.39)
    .out(0).requestFullscreen()

   
    return(
        <div id='vidya'>
            {/* <button>booootun</button>
            <button>booootun</button>
            <button>booootun</button>
            <button>booootun</button> */}
        </div>
    )
}

export default App;
