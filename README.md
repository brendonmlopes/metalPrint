# metalPrint

**metalPrint** is an software suite for controlling stepper motors and a torch (current, voltage, etc.) for a metal 3D printer. It includes CLI tools, sensor data parsing, visualization, and a non-technical user interface.

---

## Project Structure Overview

### `interface/`
Contains user interface, visualization tools, and configuration management utilities. These components allow users to interact with the printer, monitor print progress, and adjust hardware settings.

#### `interface/config/visualizer`
A specialized module for rendering parsed configuration and live sensor data. It provides interactive or static visualizations of hardware states and print progress, making system status intuitive for users.

### `parser.c`
The parser.c file is responsible for reading and interpreting G-code files, the standard for 3D printing instructions. It translates G-code into commands and data structures that describe motor movements and printing actions.

- **G-code Parsing:** Reads G-code commands and converts them into actionable instructions.
- **Translation Layer:** Maps parsed instructions to hardware operations executed by the Arduino logic.

### `motor.ino` and `motor.h`
`motor.ino` is the Arduino sketch that directly controls the stepper motors and torch hardware. It receives commands from the parsed G-code (via parser.c), and uses functions defined in `motor.h` for hardware abstraction.

---

## Data Flow
![Data Flow Diagram](./images/data_flow.png)
1. **G-code Input:** User provides G-code file with printing instructions.
2. **Parsing:** `parser.c` reads G-code, translates it into motor movement commands.
3. **Execution:** `motor.ino` receives movement instructions, calls functions from `motor.h` to move hardware.
4. **User Interface:** `interface` modules allow the user to monitor and control the process, visualize status, and adjust configurations.

---

## Getting Started

### Prerequisites
- **Arduino IDE** ([Download](https://www.arduino.cc/en/software))
- **Arduino Board or Raspberry Pi (Recommended)**
- **USB Cable** for uploading firmware
- **Basic Electronics** (wires, breadboard, sensors, actuators)

### Installation
1. Clone the repository:
```sh
git clone https://github.com/brendonmlopes/metalPrint.git
   ```
2. Compile and run the builder
```sh
gcc build.c -o build
./build
```

3. Go to the interface directory and run the frontend interface
```zsh
cd interface/config
npm install
npm start
```
4. On **another terminal**, go to the server directory and run the backend server
```zsh
cd interface/server
npm install
npm run dev
```

5. On **another terminal or machine(preferrably)**, run a DB with the apropriate credentials. In this case, we run a PostgreSQL instance with the following command:
```zsh
docker run --name metalprint-db -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password -e POSTGRES_DB=metalprint -p 5432:5432 -d postgres
```

6. Run the prisma client
```zsh
cd interface/server
npm install @prisma/client
# Configure your database connection in the .env file
npx prisma init
# Configure your schema in prisma/schema.prisma
npx prisma generate
npx prisma dev
```

---

## Contributing

Contributions, issues, and feature requests are welcome!  
See the [issues page](https://github.com/brendonmlopes/metalPrint/issues).

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a pull request

---

## Contact

- **Authors:** 
[brendonmlopes](https://github.com/brendonmlopes)
[NycFenix](https://github.com/NycFenix)

- **Project URL:** [https://github.com/brendonmlopes/metalPrint](https://github.com/brendonmlopes/metalPrint)
