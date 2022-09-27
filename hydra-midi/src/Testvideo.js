import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from 'react'
import {useRef} from 'react'

const Hydra = require('hydra-synth')  
const h = new Hydra({ makeGlobal: true, detectAudio: false }).synth

function Testvideo() {
    const [rotate1, setRotate1] =useState(1)
    const osc1 = h.osc(10, 0.01, 1.4)
    .rotate(rotate1)
    .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
    .color(2.83, 0.91, 0.39)

    return(
        <div>     
        {osc1.out()}             
        <button onClick={() => {setRotate1(rotate1 + 10)}}>button</button>
        </div>
    )
}

export default Testvideo