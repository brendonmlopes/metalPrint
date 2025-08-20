import '../App.css';
import 'animate.css';
import React from 'react';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import ToggleController from '../components/ToggleController';

export default function Settings(props) {
  return(
    <header className="App-header">
    <div className="container">
      <div className="row">
        <div className="col">
          <ToggleController title="All motors" fontSize={32} />
        </div>
        <div className="col">
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Vertical Motor 1" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Vertical Motor 2" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Vertical Motor 3" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Vertical Motor 4" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
        </div>
      </div>
      <div className="row">
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Horizontal Motor 1 (X)" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Horizontal Motor 2 (X)" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
          <ToggleController title="Horizontal Motor (Y)" />
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
        </div>
        <div className="col individualToggle border border-danger rounded-4 border-3">
        </div>
      </div>

        <div className="my-1">

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            onClick={console.log("Click")}
            startIcon={<CloudUploadIcon />}
          >
            GCode
            <input type="file" style={{display:'None'}}></input>
          </Button>

        </div>
    </div>
    </header>
  )
}
