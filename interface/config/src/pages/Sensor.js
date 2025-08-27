import {useState} from 'react'; 
import BinaryBulb from '../components/BinaryBulb';

export default function Sensor(props){
  let [state, setState] = useState({
    //0 : turned off( no signal at all )
    //1 : turned on( no signal from the sensors )
    //2 : turned on( signal + from the sensor )
    //3 : turned on( signal - from the sensor )
    motorX1Connect:0,
    motorX2Connect:2,
    motorY1Connect:3,
    motorZ1Connect:2,
    motorZ2Connect:1,
    motorZ3Connect:3,
    motorZ4Connect:3,

    Ssensor1X1Connect:2,
    Ssensor2X1Connect:1,
    Ssensor1X2Connect:3,
    Ssensor2X2Connect:2,
    Ssensor1Y1Connect:1,
    Ssensor2Y1Connect:3,

    Ssensor1Z1Connect:1,
    Ssensor2Z1Connect:0,
    Ssensor1Z2Connect:0,
    Ssensor2Z2Connect:3,
    Ssensor1Z3Connect:3,
    Ssensor2Z3Connect:2,
    Ssensor1Z4Connect:0,
    Ssensor2Z4Connect:1,

    //Numbers, measuring distance.
    //-1 means no connection
    LsensorZ1Connect:10.23,
    LsensorZ2Connect:10.21,
    LsensorZ3Connect:-1,
    LsensorZ4Connect:11.37,

    energySourceConnect:false,
  })


  return (
    <div className="App-header">
      <div className="App-header container container-lg py-1">
        <h1 className="animate__animated animate__bounce"> Sensors dashboard </h1>
          <div className="m-3">

            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
                <BinaryBulb data={state['motorY1Connect']} title={"MY 1"} />
              </div>
              <div className="col-4">

              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1Y1Connect']} title={"SSY 1"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2Y1Connect']} title={"SSY 2"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['LsensorZ1Connect']} title={"LSZ 1"} />
              </div>
            </div>


            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
                <BinaryBulb data={state['motorX1Connect']} title={"MX 1"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['motorX2Connect']} title={"MX 2"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1X1Connect']} title={"SSX 1"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2X1Connect']} title={"SSX 2"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['LsensorZ2Connect']} title={"LSZ 2"} />
              </div>
            </div>

            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
                <BinaryBulb data={state['motorZ1Connect']} title={"MZ 1"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['motorZ2Connect']} title={"MZ 2"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1X2Connect']} title={"SSX 3"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2X2Connect']} title={"SSX 4"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['LsensorZ3Connect']} title={"LSZ 3"} />
              </div>
            </div>


            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
                <BinaryBulb data={state['motorZ3Connect']} title={"MZ 3"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['motorZ4Connect']} title={"MZ 4"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1Z1Connect']} title={"SSZ 1"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2Z1Connect']} title={"SSZ 2"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['LsensorZ4Connect']} title={"LSZ 4"} />
              </div>
            </div>

            <div className="row flex-nowrap justify-content-center">
              
              <div className="col-4">
              </div>

              <div className="col-4">
                <BinaryBulb data={state['Ssensor1Z2Connect']} title={"SSZ 3"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2Z2Connect']} title={"SSZ 4"} />
              </div>
            </div>


            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1Z3Connect']} title={"SSZ 5"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2Z3Connect']} title={"SSZ 6"} />
              </div>
            </div>


            <div className="row flex-nowrap justify-content-center">
              <div className="col-4">
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor1Z4Connect']} title={"SSZ 7"} />
              </div>
              <div className="col-4">
                <BinaryBulb data={state['Ssensor2Z4Connect']} title={"SSZ 8"} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
