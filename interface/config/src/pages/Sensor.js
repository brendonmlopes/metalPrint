import {useState} from 'react'; 
import BinaryBulb from '../components/BinaryBulb';

export default function Sensor(props){
  let [state, setState] = useState({
    motorX1Connect:false,
    motorX2Connect:true,
    motorY1Connect:false,
    motorZ1Connect:false,
    motorZ2Connect:false,
    motorZ3Connect:true,
    motorZ4Connect:false,

    Ssensor1X1Connect:false,
    Ssensor2X1Connect:false,
    Ssensor1X2Connect:true,
    Ssensor2X2Connect:false,
    Ssensor1Y1Connect:false,
    Ssensor2Y1Connect:false,

    Ssensor1Z1Connect:true,
    Ssensor2Z1Connect:false,
    Ssensor1Z2Connect:false,
    Ssensor2Z2Connect:true,
    Ssensor1Z3Connect:false,
    Ssensor2Z3Connect:true,
    Ssensor1Z4Connect:true,
    Ssensor2Z4Connect:false,

    LsensorZ1Connect:true,
    LsensorZ2Connect:false,
    LsensorZ3Connect:false,
    LsensorZ4Connect:true,

    energySourceConnect:false,
  })


  return (
    <div className="App-header">
      <div className="App-header container container-lg py-1">
        <h1 className="animate__animated animate__bounce"> Sensors dashboard </h1>
          <div className="m-4">
            <div className="row flex-nowrap justify-content-center">

              <div className="col-2 p-2">
                <h4>Motors</h4>
              </div>

              <div className="col-4 p-2"></div>

              <div className="col-2 p-2">
                <h4>Stopper</h4>
              </div>

              <div className="col-3 py-2"></div>

              <div className="col-2 p-2">
                <h4>Leveling</h4>
              </div>

            </div>

            <div className="row flex-nowrap justify-content-center">

              <div className="col-4 p-2">
                <BinaryBulb on={state['motorX1Connect']} title={"MX 1"} />
                <BinaryBulb on={state['motorX2Connect']} title={"MX 2"} />
                <BinaryBulb on={state['motorY1Connect']} title={"MY 1"} />
                <BinaryBulb on={state['motorZ1Connect']} title={"MZ 1"} />
                <BinaryBulb on={state['motorZ2Connect']} title={"MZ 2"} />
                <BinaryBulb on={state['motorZ3Connect']} title={"MZ 3"} />
                <BinaryBulb on={state['motorZ4Connect']} title={"MZ 4"} />
              </div>

              <div className="col-1 p-2">
              </div>

              <div className="col-3 p-2">
                <BinaryBulb on={state['Ssensor1X1Connect']} title={"SSX 1"} />
                <BinaryBulb on={state['Ssensor2X1Connect']} title={"SSX 2"} />
                <BinaryBulb on={state['Ssensor1X2Connect']} title={"SSX 3"} />
                <BinaryBulb on={state['Ssensor2X2Connect']} title={"SSX 4"} />
                <BinaryBulb on={state['Ssensor1Y1Connect']} title={"SSY 1"} />
                <BinaryBulb on={state['Ssensor2Y1Connect']} title={"SSY 2"} />
              </div>

              <div className="col-3 p-2">
                <BinaryBulb on={state['Ssensor1Z1Connect']} title={"SSZ 1"} />
                <BinaryBulb on={state['Ssensor2Z1Connect']} title={"SSZ 2"} />
                <BinaryBulb on={state['Ssensor1Z2Connect']} title={"SSZ 3"} />
                <BinaryBulb on={state['Ssensor2Z2Connect']} title={"SSZ 4"} />
                <BinaryBulb on={state['Ssensor1Z3Connect']} title={"SSZ 5"} />
                <BinaryBulb on={state['Ssensor2Z3Connect']} title={"SSZ 6"} />
                <BinaryBulb on={state['Ssensor1Z4Connect']} title={"SSZ 7"} />
                <BinaryBulb on={state['Ssensor2Z4Connect']} title={"SSZ 8"} />
              </div>

              <div className="col-1 p-2">
              </div>

              <div className="col-3 p-2">
                <BinaryBulb on={state['LsensorZ1Connect']} title={"LSZ 1"} />
                <BinaryBulb on={state['LsensorZ2Connect']} title={"LSZ 2"} />
                <BinaryBulb on={state['LsensorZ3Connect']} title={"LSZ 3"} />
                <BinaryBulb on={state['LsensorZ4Connect']} title={"LSZ 4"} />
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
