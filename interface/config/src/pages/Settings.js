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

      <div className="container">
        <div className="row">
          <div className="col-2">
            <ToggleController title="All motors" control={[{title:'Z 1'},{title:'Z 2'},{title:'Z 3'},{title:'Z 4'},{title:'Y 1'},{title:'Y 2'},{title:'X'}]} fontSize={32} />
          </div>

          <div className="col-2">
          </div>
          <div className="col-2 p-1">
            <BinaryBulb title={"Motor X 1 Connection"} />
            <BinaryBulb title={"Motor X 2 Connection"} />
            <BinaryBulb title={"Motor Y Connection"} />
            <BinaryBulb title={"Motor Z 1 Connection"} />
            <BinaryBulb title={"Motor Z 2 Connection"} />
            <BinaryBulb title={"Motor Z 3 Connection"} />
            <BinaryBulb title={"Motor Z 4 Connection"} />
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
