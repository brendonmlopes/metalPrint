import '../App.css';
import 'animate.css';

import {useState} from 'react';
import {useEffect} from 'react';

import Grid from '../components/Grid';

export default function Dashboard(props){

  //let pos = fetch(api_address)

  //Dummy for visualization:
  let pos = {x:40,y:25,z:2}
  let paneWidth = 40

  return (
    <div className="App-header">
      <div className="animate__animated animate__bounce mb-5">
        <h1>Dashboard</h1>
      </div>
      
      <div>
        <Grid pos={{row:pos.y,col:pos.x}} />
      </div>

      <div className="border rounded px-3">
        <div className="row" style={{width:paneWidth+'rem'}}>

          <div className="col-4">
            <p>X</p>
          </div>
          <div className="col-4">
            <p>Y</p>
          </div>
          <div className="col-4">
            <p>Z</p>
          </div>
        </div>

        <div className="row" style={{width:paneWidth+'rem'}}>
          <div className="col-4 border-end border-top">
            <p>{pos.x}</p>
          </div>
          <div className="col-4 border-end border-top">
            <p>{pos.y}</p>
          </div>
          <div className="col-4 border-top">
            <p>{pos.z}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
