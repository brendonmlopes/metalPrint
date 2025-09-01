import logo from '../assets/logo_red.png';
import '../App.css';
import 'animate.css';
import React from 'react';

export default function NavBar(props){

  let [state, setPage] = [props.state, props.setPage]

  let home = {page:'home',active:false}
  let settings = {page:'settings',active:false}
  let sensors = {page:'sensors',active:false}
  let dashboard = {page:'dashboard',active:false}
  let simulator = {page:'simulator',active:false}
  let pages = [home,settings,sensors,dashboard,simulator]
  for(let page of pages){
    if(state.page==page.page){
      page.active = true
    }else{
      page.active = false
    }
  }
  console.log(pages)

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" onClick={()=>setPage('home')} href="">
        <img className="animate__animated animate__bounceIn" style={{height:'10vh'}} src={logo}></img>
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto px-5 py-2 mb-2 mb-lg-0 bg-dark-subtle rounded-5">

        <li className="nav-item" >
          <a className="nav-link" style={{color:home.active ? 'black' : '#999999'}} onClick={()=>setPage('home')} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:settings.active ? 'black' : '#999999'}} aria-current="page" onClick={()=>setPage('settings')} href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:sensors.active ? 'black' : '#999999'}} aria-current="page" onClick={()=>setPage('sensors')} href="#">Sensors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:dashboard.active ? 'black' : '#999999'}} href="#" onClick={()=>setPage('dashboard')}>Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:simulator.active ? 'black' : '#999999'}} href="visualizer" onClick={()=>setPage('simulator')}>Simulator</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
