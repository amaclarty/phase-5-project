import { render } from "@testing-library/react";
import React from "react";
import {useState} from 'react'

const Hydra = require('hydra-synth')  
    const h = new Hydra({ makeGlobal: true, numOutputs: 4, detectAudio: false }).synth
    // :q to get out of git lol
    
    
    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
    
        let getMIDIMessage = function(midiMessage) {
            var arr = midiMessage.data    
            var index = arr[1]
            
            var val = (arr[2]+1)/128.0 
            cc[index]=val
        }
    
    function onMIDISuccess(midiAccess) {
        console.log(midiAccess);
        var inputs = midiAccess.inputs;
        var outputs = midiAccess.outputs;
        for (var input of midiAccess.inputs.values()){
            input.onmidimessage = getMIDIMessage;
        }
        
    }
    
    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }
    
    var cc=Array(128).fill(0.5)
    
    
    
    
    const synth = () => {
        return(
        h.shape(2.5, ()=>cc[0], 0.1, (()=>cc[2] / 2)).color((()=>cc[21]), (()=>cc[22]), (()=>cc[23])).diff(h.src(h.o0).rotate(()=>cc[16])).scale(0.9).hue(0.03).contrast(()=>cc[1] * 2).out(h.o0)
        )
    }
    const synthTwo = () => {
        return(
        h.shape(3, ()=>cc[0], 0.1, (()=>cc[2] / 2)).color((()=>cc[21]), (()=>cc[22]), (()=>cc[23])).rotate(()=>cc[17] * 3).diff(h.src(h.o1).rotate(()=>cc[16])).scale(0.9).hue(0.03).contrast(()=>cc[1] * 2).out(h.o0)
        )
    }
    const synthThree = () => {
        return(
        h.noise().modulate((h.osc(100).kaleid(()=>cc[4] * 100))).out()
        )
    }
    const synthFour = () => {
        return(
            h.shape(90).modulate(h.noise((()=>cc[0] * 10), (()=>cc[1]))).out()
        )
    }





function Testvideotwo() {
    const [preset, setPreset] =useState(synth())

    const changePreset = (e) => {
          console.log(e.keyCode)
        
      }

    return(
        <div id='vidya' onKeyDown={()=> changePreset()}>
        <span>
        <button onClick={() => (setPreset(synth()))}>preset</button>
        <button onClick={() => (setPreset(synthTwo()))}>preset</button>
        <button onClick={() => (setPreset(synthThree()))}>preset</button>
        <button onClick={() => (setPreset(synthFour()))}>preset</button>
        </span>
        {preset}
            
             {/* <Testvideo /> */}
        </div>
    )
}

export default Testvideotwo