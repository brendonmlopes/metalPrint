import logo from '../assets/logo_red.png';
import '../App.css';
import 'animate.css';
import React from 'react';

export default function NavBar(props){

  let [state, setPage] = [props.state, props.setPage]

  return (
    <div className="NavBar" style={{backgroundColor:'red'}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" onClick={()=>setPage('home')} href="#">
        <img style={{maxHeight:'80px'}} src={logo}></img>
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setPage('home')} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setPage('settings')} href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setPage('sensors')} href="#">Sensors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={()=>setPage('dashboard')}>Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={()=>setPage('simulator')}>Simulator</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
