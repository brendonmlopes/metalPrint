import '../App.css';
import 'animate.css';
import P5Wrapper from 'react-p5-wrapper';
import React from 'react';

export default function Simulator(props){
  return(
    <div className="simContainer App-header">
      <div className="title my-3">
        <h1>Simulator</h1>
      </div>
      <div className="simCanvas">
        <p>Sketch div</p>
        <script src="js/sketch.js"></script>
      </div>
    </div>
  )
}
