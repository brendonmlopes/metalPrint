import '../App.css';
import 'animate.css';

import {useState} from 'react';
import {useEffect} from 'react';

import SpeedIcon from '@mui/icons-material/Speed';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import PowerRoundedIcon from '@mui/icons-material/PowerRounded';
import TempIcon from '@mui/icons-material/DeviceThermostatTwoTone';
import GamesIcon from '@mui/icons-material/Games';
import StopCircleIcon from '@mui/icons-material/StopCircle';

import Button from '../components/Button';
import ArrowController from '../components/ArrowController';
import LiveView from '../components/LiveView';

export default function Dashboard(props){

  let [state,setState] = useState({
    pos:{x:40,y:25,z:2,alpha:12,beta:5.75},
    temp:{value:211, unit:"ºC"},
    speed:{value:10, unit:"mm/s"},
    voltage:{value:14, unit:"V"},
    current:{value:100, unit:"A"},
    stopButton:{pressed:false,text:"Paused",color:"danger",action:()=>{console.log("Stop button pressed")}}
  })

  const paneWidth = 60

  return (
    <div className="App-header">
      <div className="my-5 d-flex justify-around">

        <div className="px-5 my-auto">
          <div><LiveView source={""}/> </div>
        </div>
        
        <div className="row">
          <div className="px-5">

            <div className="row mt-3 border border-primary rounded-top text-primary" style={{width:paneWidth+'rem'}}>
              <div className="col-2"> <p>X</p> </div>
              <div className="col-2"> <p>Y</p> </div>
              <div className="col-2"> <p>Z</p> </div>
              <div className="col-3"> <p>α</p> </div>
              <div className="col-3"> <p>β</p> </div>
            </div>

            <div className="row border-bottom rounded-bottom" style={{width:paneWidth+'rem'}}>

              <div className="col-2 border-start border-end">
                <p>{state['pos'].x ? state['pos'].x  + "mm" : "Error"}</p>
              </div>

              <div className="col-2 border-end">
                <p>{state['pos'].y ? state['pos'].y  + "mm" : "Error"}</p>
              </div>

              <div className="col-2 border-end">
                <p>{state['pos'].z ? state['pos'].z + "mm" : "Error"}</p>
              </div>

              <div className="col-3 border-end">
                <p>{state['pos'].alpha ? state['pos'].alpha + "º": "Error"}</p>
              </div>

              <div className="col-3 border-end">
                <p>{state['pos'].beta ? state['pos'].beta + "º" : "Error"}</p>
              </div>

            </div>

            <div className="row border rounded mt-3 border-top">

              <div className="col">
                <div className="border-bottom border-primary"><TempIcon color={"primary"}/></div>
                <div>{state['temp'].value + state['temp'].unit ? state['temp'].value + state['temp'].unit : "Error"}</div>
              </div>

              <div className="col">
                <div className="border-bottom border-primary"><SpeedIcon color={"primary"}/></div>
                <div>{state['speed'].value + state['speed'].unit ? state['speed'].value + state['speed'].unit : "Error"}</div>
              </div>

              <div className="col">
                <div className="border-bottom border-primary"><BoltRoundedIcon color={"primary"}/></div>
                <div>{state['voltage'].value + state['voltage'].unit ? state['voltage'].value + state['voltage'].unit : "Error"}</div>
              </div>

              <div className="col">
                <div className="border-bottom border-primary"><PowerRoundedIcon color={"primary"}/></div>
                <div>{state['current'].value + state['current'].unit ? state['current'].value + state['current'].unit : "Error"}</div>
              </div>

            </div>

            <div className="row border rounded my-3">

              <div className="row">
                <div className="col-4"><GamesIcon color="primary"/></div>
                <div className="col-4"></div>
                <div className="col-4"><StopCircleIcon color="primary"/></div>
              </div>

              <div className="row">
                <div className="col-4 border bg-primary rounded mb-3">
                  <ArrowController />
                </div>
                <div className="col-4"></div>
                <div className="col-4 my-auto"><Button color={state['stopButton'].color} text={state['stopButton'].text}/></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
