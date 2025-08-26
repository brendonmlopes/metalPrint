import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import Box from '@mui/material/Box';
import {useState} from 'react';

export default function BinaryBulb(props){
  let title = props.title
  let data = props.data
  let [state, setState] = useState({plus:false,minus:false})
  let color;
  let colorPlus;
  let colorMinus;
  let component;

  //For motor sensors or stopper sensors
  if(title.startsWith("M") || title.startsWith("S")){
    if (data==0) {
      color = "#808688"
      colorPlus = "#808688"
      colorMinus = "#808688"
    } else if(data==1){
      color = "#38ad14"
      colorPlus = "#808688"
      colorMinus = "#808688"
    } else if(data==2){
      color = "#38ad14"
      colorPlus = "#38ad14"
      colorMinus = "#808688"
    } else if(data==3){
      color = "#38ad14"
      colorPlus = "#808688"
      colorMinus = "#38ad14"
    }
    component = <LightbulbIcon sx={{color:"#ffad14"}}/>
  //For levelling sensors
  } else if (title.startsWith("L")){
    if(data<=0){
      color = "#38ad14"
    }
  } else{
    throw new Error("The bulb type isn't M, L or S")
  }
  return(
    <>
      <Box sx={{backgroundColor:'#38ad14'}}>
        <div className="mt-2">
          <span className="mt-1 h4">{title}</span>
          {component}
          <div>
            <Box sx={{backgroundColor:colorPlus}}>
              <span>+</span>
            </Box>
            <Box sx={{backgroundColor:colorMinus}}>
              <span>-</span>
            </Box>
          </div>
        </div>
      </Box>
    </>
  )
}
