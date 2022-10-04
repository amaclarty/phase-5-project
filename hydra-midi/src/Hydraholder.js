// import { render } from "@testing-library/react";
// import React, { useEffect } from "react";
// import { useState } from 'react'
// import {useRef} from 'react'

// // osc (frequency, sync, offset)
// // noise(scale, offset)
// // shape(sides, radius, smoothing
// // solid(r, g, b, a )
// // voronoi( scale, speed, blending
// // gradient(speed )
// // Outputs

// const Hydra = require('hydra-synth')  
// const h = new Hydra({ makeGlobal: true, detectAudio: false }).synth

// function Hydraholder()  { 

//     const osc1 = h.osc(10, 0.01, 1.4)
//     .rotate(0, 0.1)
//     .mult(h.osc(10, 0.1).modulate(h.osc(20).rotate(0, -0.01), 0.1))
//     .color(2.83, 0.91, 0.39)

//     const lfo = h.osc(1, 2.5, 1).kaleid(600)
    

//     const osc2 = h.osc(7, 0.03)
//         .rotate(0, 0.1)
//         // .contrast(slider1Value)
//         .mult(h.osc(1, 0.1).modulate(h.osc(0.5).rotate(0, -0.01), 0.1))
//         .color(2.83, 0.91, 0.39)
//         // .modulate(lfo)
//         .colorama()
//         .kaleid(8)
//         // .diff(h.noise().colorama())
        

//     const osc3 =h.voronoi(400, 0, 0)
//         .diff(h.voronoi(100, 2, 1))
//         .blend(h.osc(.83, 0.91, 0.39))
//         .mask(h.shape(300, .2))
//         .rotate(10, .1)
//         .diff(h.shape(420, .7))
//         .rotate(-8, 1)
//         .diff(h.shape(640.2, .5))
//         .diff(h.gradient())
        

    
    

//     const osc4 =h.osc(100)
//         .diff(h.noise())
//         .colorama()
//         .diff(h.shape(200, 100))
        
        

//     const [preset, setPreset] =useState(osc1)
//     // const [slider1Value, setSlider1Value] =useState(1.00)
//     // const [slider2Value, setSlider2Value] =useState(9)
//     // const [slider3Value, setSlider3Value] =useState(0.01)
//     // const [slider4Value, setSlider4Value] =useState(0.01)
   
   
//     return(
//         <div id='video-holder'>
//             {preset
//             .out()}
//             <input type="range" min="2.00" max="100.00"  id="slider1" step='1.00'
//             onChange={() => setSlider1Value(document.getElementById("slider1").value)}></input>
//             {slider1Value}
//             {/* <input type="range" min="1" max="90"  id="slider2" step='1'
//             onInput={() => setSlider2Value(document.getElementById("slider2").value)}></input>
//             {slider2Value}
//             <input type="range" min="0.001" max="0.100"  id="slider3" step='0.001'
//             onInput={() => setSlider3Value(document.getElementById("slider3").value)}></input>
//             {slider3Value} */} 
           
            
//             <div id='buttons'>
//             <button onClick={() => {setPreset(osc1)}}>Osc 1</button>
//             <button onClick={() => {setPreset(osc2)}}>Osc2</button>
//             <button onClick={() => {setPreset(osc3)}}>Osc3</button>
//             <button onClick={() => {setPreset(osc4)}}>Osc4</button>
//             </div>
       
//         </div>
//     )
// }
// export default Hydraholder

