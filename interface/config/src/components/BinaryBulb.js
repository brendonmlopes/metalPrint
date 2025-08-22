import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import Box from '@mui/material/Box';
import {useState} from 'react';

export default function BinaryBulb(props){
  let title = props.title
  let on = !!props.on
  let [state, setState] = useState(!!on)
  let component = on ? <LightbulbIcon color={"warning"} /> : <LightbulbOutlineIcon color={"warning"}/>
  return(
    <>
      <Box sx={{backgroundColor:on ? '#38ad14' : '#cc1111', borderRadius:1}}>
        <div className="mt-2">
          <span className="mt-1 h4">{title}</span>
            {component}
        </div>
      </Box>
    </>
  )
}
