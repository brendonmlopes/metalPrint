import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Box from '@mui/material/Box';
import {useState} from 'react';

export default function BinaryBulb(props){
  let title = props.title
  let on = props.on
  let [state, setState] = useState(true)
  return(
    <>
      <Box sx={{backgroundColor:'#999999', borderRadius:1}}>
        <div className="mt-2">
          <span className="mt-1 h4">{title}</span>
          <LightbulbIcon color={"warning"}/>
        </div>
      </Box>
    </>
  )
}
