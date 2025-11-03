"use client";
import {useState} from 'react';
export default function Button(props){
  let [color, setColor] = useState(props.color ? props.color : "danger");
  let [text, setText] = useState(props.text ? props.text : "Continue");
  return (
    <button 
      className={"btn btn-" + color + " m-5 py-4 px-3 fs-5 rounded-5"} 
      onClick={props.onClick ? props.onClick : ()=>{setColor(color === "danger" ? "secondary" : "danger"); setText(text === "Resume" ? "Paused" : "Resume")}}
      disabled={props.disabled ? props.disabled : false}
    >
      {text ? text : "Button"}
    </button>
  )
}
