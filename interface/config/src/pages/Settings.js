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
import Input from '@mui/material/Input';


export default function Settings(props) {

  return(
    <header className="App-header">

      <div className="container container-fluid">
        <div className="row">
          <div className="col-2">
            <h2 className="animate__animated animate__bounce">Power motors</h2>
          </div>

            <div className="col-3">
            </div>

            <div className="col-2">
              <h2>Motor speed</h2>
              <div className="bg-white rounded">
                <Input />
              </div>
            </div>

            <div className="col-2">
            </div>

            <div className="col-3">
              <h2 className="animate__animated animate__bounce mx-5">Connections</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-2">
            <ToggleController title="All motors" control={[{title:'X'},{title:'Y 1'},{title:'Y 2'},{title:'Z 1'},{title:'Z 2'},{title:'Z 3'},{title:'Z 4'},]} fontSize={32} />
          </div>

          <div className="col-8">
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
