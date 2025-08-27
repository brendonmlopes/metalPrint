import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
import Box from '@mui/material/Box';

export default function BinaryBulb(props){
  let title = props.title
  let data = props.data

  let color;
  let colorPlus;
  let colorMinus;
  let component;

  //For motor sensors or stopper sensors
  if(title.startsWith("M") || title.startsWith("SS")){
    if (data===0) {
      color = "#ff2222"
      colorPlus = "#808688"
      colorMinus = "#808688"
    } else if(data===1){
      color = "#38ad14"
      colorPlus = "#808688"
      colorMinus = "#808688"
    } else if(data===2){
      color = "#38ad14"
      colorPlus = "#38ad14"
      colorMinus = "#808688"
    } else if(data===3){
      color = "#38ad14"
      colorPlus = "#808688"
      colorMinus = "#38ad14"
    }
    component = <LightbulbIcon sx={{color:"#ffad14"}}/>
  //For levelling sensors
  } else if (title.startsWith("LS")){
    if(data<=0){
      color = "#ff2222"
      data = "Error"
    }else{
      color = "#38ad14"
    }
  } else if(title==="Power"){
      color = "#ff2222"
  } else {
    throw new Error("The bulb type isn't M, L, S or Power")
  }

  function Signal(params){
    if(title.startsWith("M") || title.startsWith("S")){
      return(
            <div>
              <Box sx={{borderTop:1,backgroundColor:params.colors.colorPlus}}>
                <span>+</span>
              </Box>
              <Box sx={{roundedBottom:1, backgroundColor:params.colors.colorMinus}}>
                <span>-</span>
              </Box>
            </div>
      )
    } else if (title.startsWith("L")){
      return(
        <div>
          <Box sx={{borderTop:1,backgroundColor:"#222222", borderRadius:1}}>
            <span>{data}</span>
          </Box>
        </div>
      )
  } else if(title==="Power"){
      color = "#ff2222"
      return(
          <LightbulbIcon sx={{color:"#ffad14"}}/>
      )
  } else {
      throw new Error("The bulb type isn't M, L, S or Power")
    }
  }


  return(
    <>
      <Box sx={{backgroundColor:color, borderRadius:1}}>
        <div className="mt-2">
          <span className="mt-1 h4">{title}</span>
          {component}
        </div>
        <Signal colors={{colorPlus:colorPlus, colorMinus:colorMinus}} />
      </Box>
    </>
  )
}
