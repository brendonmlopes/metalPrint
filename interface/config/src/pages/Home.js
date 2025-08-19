import logo from '../assets/logo_red.png';
import {useState} from 'react';
import 'animate.css';
import React from 'react';

export default function Home(props) {

  let [state, setPage] = [props.state, props.setPage]

  return (
      <header className="App-header">
        <img src={logo} className="logo animate__animated animate__backInDown animate__delay-2s" alt="logo" />
          <h1 className="animate__animated animate__pulse animate__slower"> Configurações da Impressora </h1>
        <div className="animate__animated breathe animate__slower">
          <button className="my-5 btn btn-lg btn-danger" onClick={()=>setPage('settings')}>Começar</button>
        </div>
      </header>
  );
}

