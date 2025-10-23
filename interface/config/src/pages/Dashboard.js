import '../App.css';
import 'animate.css';

import {useState} from 'react';
import {useEffect} from 'react';

import Grid from '../components/Grid';
import LiveView from '../components/LiveView';
import ArrowController from '../components/ArrowController';

export default function Dashboard(props){

  //Dummy for visualization:
  let pos = {x:40,y:25,z:2}
  let temp= {value:211, unit:"ºC"}
  let speed= {value:10, unit:"mm/s"}
  let voltage = {value:14, unit:"V"}
  let current = {value:1.2, unit:"A"}
  let paneWidth = 50

  return (
    <div className="App-header">

      <div className="my-5 d-flex justify-around">
        <div className="px-5 my-auto">
          <div><LiveView source={""}/> </div>
        </div>
        
        <div className="row">
          <div className="px-5">

            <div className="row mt-3 border rounded-top" style={{width:paneWidth+'rem'}}>
              <div className="col-4"> <p>X</p> </div>
              <div className="col-4"> <p>Y</p> </div>
              <div className="col-4"> <p>Z</p> </div>
            </div>

            <div className="row border-bottom rounded-bottom" style={{width:paneWidth+'rem'}}>
              <div className="col-4 border-start border-end">
                <p>{pos.x}</p>
              </div>
              <div className="col-4 border-end">
                <p>{pos.y}</p>
              </div>
              <div className="col-4 border-end">
                <p>{pos.z}</p>
              </div>
            </div>

            <div className="row border rounded mt-3 border-top">
              <div className="col">
                <div className="border- border-bottom">🌡️</div>
                <div>{temp.value + temp.unit}</div>
              </div>
              <div className="col">
                <div className="border-bottom"><img width="auto" height="40" alt="" src="/speedometer.png"></img></div>
                <div>{speed.value + speed.unit}</div>
              </div>
              <div className="col">
                <div className="border-bottom">✴️</div>
                <div>{voltage.value + voltage.unit}</div>
              </div>
              <div className="col">
                <div className="border-bottom">🔌</div>
                <div>{current.value + current.unit}</div>
              </div>
            </div>
            <div className="row border rounded my-3">

              <div className="row">
                <div className="col">
                  Controller
                </div>
              </div>

              <div className="row">
                <div className="col-4"></div>
                <div className="col-4 border bg-primary rounded mb-3">
                  <ArrowController />
                </div>
                <div className="col-4"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
