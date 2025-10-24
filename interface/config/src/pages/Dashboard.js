import '../App.css';
import 'animate.css';

import {useState} from 'react';
import {useEffect} from 'react';

import LiveView from '../components/LiveView';
import ArrowController from '../components/ArrowController';
import SpeedIcon from '@mui/icons-material/Speed';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import TempIcon from '@mui/icons-material/DeviceThermostatTwoTone';

export default function Dashboard(props){

  //Dummy for visualization:
  let [state,setState] = useState({
    pos:{x:40,y:25,z:2},
    temp:{value:211, unit:"ºC"},
    speed:{value:10, unit:"mm/s"},
    voltage:{value:14, unit:"V"},
    current:{value:1.2, unit:"A"}
  })

  const paneWidth = 50

  return (
    <div className="App-header">

      <div className="my-5 d-flex justify-around">
        <div className="px-5 my-auto">
          <div><LiveView source={""}/> </div>
        </div>
        
        <div className="row">
          <div className="px-5">

            <div className="row mt-3 border rounded-top text-primary" style={{width:paneWidth+'rem'}}>
              <div className="col-4"> <p>X</p> </div>
              <div className="col-4"> <p>Y</p> </div>
              <div className="col-4"> <p>Z</p> </div>
            </div>

            <div className="row border-bottom rounded-bottom" style={{width:paneWidth+'rem'}}>
              <div className="col-4 border-start border-end">
                <p>{state['pos'].x ? state['pos'].x : "Error"}</p>
              </div>
              <div className="col-4 border-end">
                <p>{state['pos'].y ? state['pos'].y : "Error"}</p>
              </div>
              <div className="col-4 border-end">
                <p>{state['pos'].z ? state['pos'].z : "Error"}</p>
              </div>
            </div>

            <div className="row border rounded mt-3 border-top">
              <div className="col">
                <div className="border- border-bottom"><TempIcon color={"primary"}/></div>
          
                <div>{state['temp'].value + state['temp'].unit ? state['temp'].value + state['temp'].unit : "Error"}</div>
              </div>
              <div className="col">
                <div className="border-bottom"><SpeedIcon color={"primary"}/></div>
                <div>{state['speed'].value + state['speed'].unit ? state['speed'].value + state['speed'].unit : "Error"}</div>
              </div>
              <div className="col">
                <div className="border-bottom"><BoltRoundedIcon color={"primary"}/></div>
                <div>{state['voltage'].value + state['voltage'].unit ? state['voltage'].value + state['voltage'].unit : "Error"}</div>
              </div>
              <div className="col">
                <div className="border-bottom"><PowerRoundedIcon color={"primary"}/></div>
                <div>{state['current'].value + state['current'].unit ? state['current'].value + state['current'].unit : "Error"}</div>
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
