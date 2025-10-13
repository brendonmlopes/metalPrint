import {execute} from '../Execute.js';
import Button from '@mui/material/Button';
export default function ExecuteButton(props){
	let color = "primary"
	function changeColor(){
		if(color==="primary"){
			color="secondary"
		}else{
			color="primary"
		}
	}
	return(
		<div onClick={()=>{execute('parser');changeColor();}} className="col-2">
			<Button
				component="label"
				role={undefined}
				variant="contained"
				color={color}
				tabIndex={-1}
				id="parseButton"
			>
				Parse
			</Button>
		</div>
	)
}
