import { render } from "@testing-library/react";
import React from "react";
import {useState} from 'react'






function Testvideo() {
  
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
    
    
    
    
    h.shape(3, ()=>cc[0], 0.1, (()=>cc[2] / 2)).color((()=>cc[21]), (()=>cc[22]), (()=>cc[23])).diff(h.src(h.o1).rotate(()=>cc[16])).scale(0.9).hue(0.03).contrast(()=>cc[1] * 2).out(h.o1)
    h.src(h.o1).rotate(0.5, 1).colorama(0.5).add(h.src(h.o0).saturate(1)).rotate(()=>cc[17] * 3).contrast(()=>cc[7] * 4).modulate(h.src(h.o1)).luma().invert().scale(()=>cc[6] * 2).out(h.o0)
    

 

    return(
        <div id='vidya'>
            
             {/* <Testvideo /> */}
        </div>
    )
}

export default Testvideo