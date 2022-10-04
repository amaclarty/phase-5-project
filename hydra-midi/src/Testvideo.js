// import { render } from "@testing-library/react";
// import React, { useEffect } from "react";
// import { useState } from 'react'
// import {useRef} from 'react'

// const Hydra = require('hydra-synth')  
// const h = new Hydra({ makeGlobal: true, numOutputs: 4, detectAudio: false }).synth

// function Testvideo() {
//     const lfo = h.noise(4, 1.5, 10)
//     const osc1 = h.noise(10, 0.01, 9.4)
//     .modulate(lfo)
//     .mult(h.osc((10, 0.1)).modulate(h.osc(20).rotate(0, -0.01), 0.1))
//     .color(2.83, 0.91, 0.39)
//     .scrollX(0.5, -0.1)
//     .rotate(0.1, 0.1)
//     .kaleid(4)
//     .posterize()
//     let osc2 = h.osc(80, 0).hue(1).colorama(2).contrast(2).kaleid(1).repeat(1).kaleid(200)
//     .out(h.o1)

//     let osc3 = h.osc().modulate((h.o1)).diff((h.o1)).mult(h.shape(3, 5).repeat(2).rotate(-1,.2).kaleid(6)).colorama().diff(h.o1)

//     let osc4 = h.osc().color( ()=>cc[16], ()=>cc[17], ()=>cc[18] ).out())

//     const mod2 = () => {
//         osc3 = osc3.modulate(h.noise()).scrollX(0.5, 0.05).kaleid(10).rotate(.5, .4)
//     }

//     mod2()
   
    

//     return(
//         <div>          
//         {/* <input type='range' min='-0.5' max='0.5' step='0.01' id='slideryo' onInput={() => setFreq(document.getElementById('slideryo').value)}></input>  */}
//         {/* <input type='range' min='-10' max='10' step='1' id='slider2yo'onInput={() => setFreq2(document.getElementById('slider2yo').value)} ></input> 
//         {osc2.out()}   */}
//         {osc4.out()}

//         {/* onInput={() => setFreq2(document.getElementById('slider2yo').value)}></input>  */}
//         </div>
//     )
// }

// export default Testvideo