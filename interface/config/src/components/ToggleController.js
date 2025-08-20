import React from 'react';
import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ToggleController(props) {
  let check = false;
  let fontSize = 16;

  let [state, setState] = useState(false);

  if(props.checked){
    check = true;
  }
  if(props.fontSize){
    fontSize = props.fontSize;
  }

  return(
    <div className="mt-2">
      <div className="my-1 mx-5 d-flex" style={{alignItems:"center", justifyContent:"space-around"}}>
        <p style={{fontSize:fontSize}}> {props.title} </p>
        <FormControlLabel  sx={{ m: 0, justifyContent: 'space-around', width: '100%' }} control={<Switch onChange={()=>setState(!state)} check/>} label={state ? "On" : "Off"}/>
      </div>
    </div>
  );
}
