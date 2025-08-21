import '../App.css';
import 'animate.css';
import React from 'react';
import {useState} from 'react';

import Box from '@mui/material/Box';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import ToggleController from '../components/ToggleController';
import BinaryBulb from '../components/BinaryBulb';

export default function Settings(props) {

  let [state, setState] = useState({

    motorX1Connect:false,
    motorX2Connect:false,
    motorY1Connect:false,
    motorZ1Connect:false,
    motorZ2Connect:false,
    motorZ3Connect:false,
    motorZ4Connect:false,

    sensorX1Connect:false,
    sensorX2Connect:false,
    sensorY1Connect:false,
    sensorZ1Connect:false,
    sensorZ2Connect:false,
    sensorZ3Connect:false,
    sensorZ4Connect:false,

    energySourceConnect:false,
  }) 



  return(
    <header className="App-header">

      <div className="container container-fluid">
        <div className="row">
          <div className="col-2">
            <h2>Power motors</h2>
          </div>

            <div className="col-7">
            </div>

            <div className="col-3">
              <h2>Connections</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-2">
            <ToggleController title="All motors" control={[{title:'X'},{title:'Y 1'},{title:'Y 2'},{title:'Z 1'},{title:'Z 2'},{title:'Z 3'},{title:'Z 4'},]} fontSize={32} />
          </div>

          <div className="col-7">
          </div>
          <div className="col-1 p-1">
            <BinaryBulb on={state['motorX1Connect']} title={"M X 1"} />
            <BinaryBulb on={state['motorX2Connect']} title={"M X 2"} />
            <BinaryBulb on={state['motorY1Connect']} title={"M Y 1"} />
            <BinaryBulb on={state['motorZ1Connect']} title={"M Z 1"} />
            <BinaryBulb on={state['motorZ2Connect']} title={"M Z 2"} />
            <BinaryBulb on={state['motorZ3Connect']} title={"M Z 3"} />
            <BinaryBulb on={state['motorZ4Connect']} title={"M Z 4"} />
          </div>
          <div className="col-1 p-1">
            <BinaryBulb on={state['sensorX1Connect']} title={"S X 1"} />
            <BinaryBulb on={state['sensorX2Connect']} title={"S X 2"} />
            <BinaryBulb on={state['sensorY1Connect']} title={"S Y 1"} />
            <BinaryBulb on={state['sensorZ1Connect']} title={"S Z 1"} />
            <BinaryBulb on={state['sensorZ2Connect']} title={"S Z 2"} />
            <BinaryBulb on={state['sensorZ3Connect']} title={"S Z 3"} />
            <BinaryBulb on={state['sensorZ4Connect']} title={"S Z 4"} />
          </div>
          <div className="col-1 p-1">
            <BinaryBulb on={false} title={"Power"} />
          </div>
        </div>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-2">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={console.log("Click")}
              startIcon={<CloudUploadIcon />}
            >
              Upload GCode
              <input type="file" style={{display:'None'}}></input>
            </Button>
    </div>

          </div>
        </div>
    </header>
  )
}
