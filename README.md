# metalPrint

metalPrint is a project designed to provide tools, code, and resources for metal 3D printing using Arduino/RaspberryPi-based hardware control.
This project aims to simplify the process of controlling metal 3D printers by providing a modular and extensible codebase that can be adapted for various hardware configurations.

## Features

- Open-source code for controlling metal 3D printing hardware
- Arduino integration for hardware interfacing
- Modular design for expandability
- Example configurations and scripts for metal printing workflows

## Getting Started

### Prerequisites
To get started with metalPrint, you will need the following software and hardware:
- Arduino IDE (download from [arduino.cc](https://www.arduino.cc/en/software))
- Compatible Arduino board (such as Arduino Uno, Mega, Nano, etc.)
- Raspberry Pi (To come)
- USB cable for programming Arduino
- Basic electronics components (wires, breadboard, sensors, actuators as required for your setup)

### Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/brendonmlopes/metalPrint.git
cd metalPrint
gcc build.c -o build
./build
```

## Function Explanations

[![VIDEO](https://img.youtube.com/vi/N0WeOvSnrz4/0.jpg)](https://www.youtube.com/watch?v=N0WeOvSnrz4)
### `moveTo(xTarget, yTarget)`

Moves the stepper motors for the X and Y axes to the target positions specified by `xTarget` and `yTarget` (in steps). The function calculates the distance to move in each direction and steps each motor incrementally until the position is within a defined threshold of the target. It uses buffers to proportionally step each motor so both axes reach their targets at the same time, printing messages to the serial monitor when each axis is on target.

### `findPos(xTarget, yTarget, zTarget)`

Moves all three stepper motors (X, Y, and Z) to the specified target positions. First, it retracts the Z axis to its lowest position. Then, it moves the X and Y axes to their targets, printing the current position and difference from the target for each axis to the serial monitor. Finally, it moves the Z axis up to the specified target position and confirms when the Z axis is on target.

## Contributing

Contributions, issues, and feature requests are welcome.  
Check the [issues page](https://github.com/brendonmlopes/metalPrint/issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the [MIT License](LICENSE).  
See `LICENSE` for more information.

## Contact

- Author: [brendonmlopes](https://github.com/brendonmlopes)
- Project Link: [https://github.com/brendonmlopes/metalPrint](https://github.com/brendonmlopes/metalPrint)
