import logo from '../assets/logo_red.png';
import {useState} from 'react';
import React from 'react';

export default function Home(props) {

  let [state, setPage] = [props.state, props.setPage]

  return (
      <header className="App-header">
        <img src={logo} className="logo animate__animated animate__backInDown animate__delay-1s" alt="logo" />
          <h1> Configurações da Impressora </h1>
        <div>
          <button className="my-5 btn btn-lg btn-danger" onClick={()=>setPage('settings')}>Começar</button>
        </div>
      </header>
  );
}

