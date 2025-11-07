import {execute} from '../Execute.js';
import Button from '@mui/material/Button';
import {useState} from 'react';

export default function ExecuteButton(props){
  let command = props.command
  let text = props.text
  let [ color, setColor ] = useState("primary");

	function changeColor(){
		if(color==="primary"){
      setColor("secondary")
      setTimeout(()=>{
        setColor("primary")
      },2000)
		}else{
        setColor("primary")
		}
	}

	return(
		<div onClick={()=>{execute(command);changeColor();}} className="col-2">
			<Button
				component="label"
				role={undefined}
				variant="contained"
				color={color}
				tabIndex={-1}
				id={{command}+"ExecuteButton"}
			>
			  {text}
			</Button>
		</div>
	)
}
