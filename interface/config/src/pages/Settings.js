"use client";

import '../App.css';
import 'animate.css';

import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {getData} from '../getData.js'
import {execute} from '../Execute.js'

import Box from '@mui/material/Box';
import SensorsIcon from '@mui/icons-material/Sensors';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ToggleController from '../components/ToggleController';
import BinaryBulb from '../components/BinaryBulb';
import ArrowController from '../components/ArrowController';
import ExecuteButton from '../components/ExecuteButton.js';

export default function Settings(props) {

  return(
    <header className="App-header">

      <div className="container container-fluid">
        <div className="row">
          <div className="col-1">
          </div>
          <div className="col-2 rounded-top border d-flex justify-content-center">
            <h2 className="animate__animated animate__bounceIn my-auto">Power motors</h2>
          </div>

            <div className="col-1">
            </div>

            <div className="col-3 border rounded-top d-flex justify-content-center">
              <h2 className="animate__animated animate__bounceIn my-auto">Movement</h2>
            </div>

            <div className="col-1">
            </div>

            <div className="col-3 d-flex rounded-top border justify-content-center">
              <h2 className="animate__animated animate__bounceIn mx-5 my-auto">Connections 
                <Box>
                  <Button variant="text"> <SensorsIcon /> </Button>
                </Box>
              </h2>

            </div>
        </div>
        <div className="row">
          <div className="col-1">
          </div>
          <div className="col-2 border rounded-bottom">
            <ToggleController title="All motors" control={[{title:'X'},{title:'Y 1'},{title:'Y 2'},{title:'Z 1'},{title:'Z 2'},{title:'Z 3'},{title:'Z 4'},]} fontSize={32} />
          </div>

          <div className="col-1">
          </div>

          <div className="col-3 pt-1 border rounded-bottom bg-dark">
            <div className="bg-secondary rounded mx-5">
              <Box sx={{backgroundColor:"#dddddd", borderRadius:1}}>
                <Input color="secondary" type="number" placeholder="Movement speed (rpm)" sx={{ textAlign:'center'}}/>
              </Box>
              <ArrowController />
            </div>
          </div>

          <div className="col-1">
          </div>

          <div className="col-3 px-5 bg-dark border rounded-bottom">
            <BinaryBulb data={true} title={"Power"} />
            </div>
        </div>
      </div>

      <div className="container">

        <div className="row">
          <div className="col-5">
          </div>

          <div className="col-2">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload GCode
              <input type="file" style={{display:'None'}}></input>
            </Button>
          </div>

	<ExecuteButton command="parse" text="Parse"/>

          <div className="col-5">
          </div>
        </div>
      </div>
    </header>
  )
}
