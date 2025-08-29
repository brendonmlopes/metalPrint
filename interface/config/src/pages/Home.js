import logo from '../assets/logo_red.png';
import {useState} from 'react';
import 'animate.css';
import Button from '@mui/material/Button';
import React from 'react';

export default function Home(props) {

  let [state, setPage] = [props.state, props.setPage]

  return (
      <header className="App-header">
        <img src={logo} className="logo animate__animated animate__backInDown" alt="logo" />
          <h1 className="animate__animated animate__pulse animate__slower"> Printer Central </h1>
        <div className="animate__animated animate__slower">
          <Button className="animate__animated  breathe my-5 mx-3" onClick={()=>setPage('settings')} variant="contained"> Settings 
          </Button>
          <Button className="animate__animated  breathe my-5 mx-3" onClick={()=>setPage('sensors')} variant="contained"> Sensors 
          </Button>
          <Button className="animate__animated  breathe my-5 mx-3" onClick={()=>setPage('dashboard')} variant="contained"> Dashboard 
          </Button>
          <Button className="animate__animated  breathe my-5 mx-3" onClick={()=>setPage('simulator')} variant="contained"> Simulator 
          </Button>
        </div>
        <div>
        </div>
      </header>
  );
}

