import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

export default function ArrowController(){
  return(
    <div className="container bg-dark p-5">
      <div className="row">

        <div className="col-4">
        </div>

        <div className="col-4 bg-black border rounded-top d-flex justify-content-center align-items-center">
          <Button> 
            <ArrowUpwardIcon onClick={()=>console.log("+Y")}/>
          </Button>
        </div>

        <div className="col-4">
        
        </div>
      </div>
      <div className="row">
        <div className="col-4 bg-black border rounded-start d-flex justify-content-center align-items-center">
          <Button >
            <ArrowUpwardIcon sx={{transform:'rotate(-90deg)'}} onClick={()=>console.log("-X")}/>
          </Button>
        </div>
        <div className="col-4 bg-black d-flex justify-content-center align-items-center">
          <Button>
            <HomeIcon onClick={()=>console.log("Home...")}/>
          </Button>
        </div>
        <div className="col-4 bg-black border rounded-end d-flex justify-content-center align-items-center">
          <Button>       
            <ArrowUpwardIcon sx={{transform:'rotate(90deg)'}} onClick={()=>console.log("+X")}/>
          </Button>
        </div>
      
      </div>
      <div className="row">

        <div className="col-4">
        </div>

        <div className="col-4 bg-black border rounded-bottom d-flex justify-content-center align-items-center">

          <Button>       
            <ArrowUpwardIcon sx={{transform:'rotate(180deg)'}} onClick={()=>console.log("-Y")}/>
          </Button>

        </div>
    
        <div className="col-4">
        </div>
      </div>

      <div className="row">
        <div className="col" style={{height:'10px'}}>
        </div>
      </div>

      <div className="row">
        <div className="col-4 bg-black border rounded d-flex justify-content-center align-items-center">
          <Button>       
            <ArrowUpwardIcon onClick={()=>console.log("+Z")}/>
          </Button>
        </div>
        <div className="col-4">
        </div>
        <div className="col-4 bg-black border rounded d-flex justify-content-center align-items-center">
          <Button>       
            <ArrowUpwardIcon sx={{transform:'rotate(180deg)'}} onClick={()=>{console.log("-Z")}}/>
          </Button>
        </div>
      </div>
    </div>
  )
}
