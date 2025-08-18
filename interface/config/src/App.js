import logo from './assets/logo_white.png';
import './App.css';
import 'animate.css';
import {NavBar} from './components/NavBar.js';
import {useState} from 'react';

function App() {
  let [state, setState] = useState({
    Page:'Home',
  });

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="logo animate__animated animate__backInDown animate__delay-1s" alt="logo" />
          <h1> Configurações da Impressora </h1>
        <div>
        <a href="">
          <button className="btn btn-lg btn-danger">Começar</button>
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
