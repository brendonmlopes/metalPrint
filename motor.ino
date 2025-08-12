#include <Stepper.h>
#include <string.h>

#define TWOPI 6.28318530718
#define PI 3.14159265359
#define HALF_PI 1.57079632679
#define QUARTER_PI 0.78539816339
#define EPSILON 0.00001
#define RAD_TO_DEG 57.2957795131
#define DEG_TO_RAD 0.01745329252
#define SQRT2 1.41421356237
#define EULER 2.71828182846

// Define the number of steps per revolution for the stepper motors

const int stepsPerRev = 200;
const int rpm          =60;
const float maxX = 1000.;
const float maxY = 1000.;
const int maxZ = 500;
const int threshold = 1;

Stepper stepperX(stepsPerRev, 8, 9, 10, 11);
Stepper stepperY(stepsPerRev, 2, 3, 4, 5);
Stepper stepperZ(stepsPerRev, 6, 7, 12, 13);

void moveTo(int, int, float, float);
void arcTo(int, int, int, bool, float, float);

// track current position in *steps*
long xPos = 0;
long yPos = 0;
long zPos = 0;

void setup() {
  stepperX.setSpeed(rpm);
  stepperY.setSpeed(rpm);
  stepperZ.setSpeed(rpm);
  Serial.begin(9600);
  arcTo(100, 200, 50, true, 1.0, 0.5);
  // moveTo(100,200,1,1);
}

void startWeld(float weldFlow){
  //logic to start weld
  Serial.println("Starting weld at:");
  Serial.println(weldFlow);
}

void endWeld(){
  //Logic to end weld
  Serial.println("Stopping weld");
}

void weldTo(int xTarget, int yTarget, float dt, float weldFlow){
  Serial.println("Welding...");
  if(weldTo <=0){
    Serial.println("WELD FLOW = 0");
  }
  moveTo(xTarget, yTarget, dt, weldFlow);
  delay(1000);
  Serial.println("Weld complete.");
}

void arcTo( int xTarget, int yTarget, int radius, bool clockwise, float dt, float weldFlow = 0.0){
  Serial.println("Arc move...");

  int xStart = xPos;
  int yStart = yPos;

  if(xTarget < 0 || xTarget > maxX || yTarget < 0 || yTarget > maxY){
    Serial.println("Target out of bounds.");
    return;
  }
  if(radius <= 0){
    Serial.println("Invalid radius.");
    return;
  }
  if(clockwise){
    Serial.println("Clockwise arc.");
  } else {
    Serial.println("Counter-clockwise arc.");
  }

  int x = xStart;
  int y = yStart;
  for(int i = 0; i < TWOPI; i+= 0.001){
    // dy/dx = tan(i);
    // dy/dx = -x/sqrt(radius*radius - x*x);
    float dx = radius * cos(i);
    float dy = radius * sin(i);

    moveTo((int)x+dx, (int)y+dy, dt, weldFlow);
  }
  delay(1000);
  Serial.println("Arc move complete.");
}

void moveTo(int xTarget, int yTarget, float dt, float weldFlow = 0.0) {
  const int distX = abs(xTarget-xPos);
  const int distY = abs(yTarget-yPos);
  double bufferX = 0;
  double bufferY = 0;
  if(weldFlow>0){
    startWeld(weldFlow);
  }
  while(abs(xPos-xTarget)>=threshold | abs(yPos-yTarget)>=threshold){
    bufferX+= distX/maxX ;
    bufferY+= distY/maxY ;
    delay(dt);

    if(bufferX>=1){
      bufferX-=1;
      if(xPos-xTarget>0){
        stepperX.step(-1);
        xPos = xPos - 1;
        // Serial.println("Step -x");
      }
      if(xPos-xTarget<0){
        stepperX.step(1);
        xPos = xPos + 1;
        // Serial.println("Step +x");
      }
    }

    if(xPos - xTarget == 0 ){
      Serial.println("x on target");
    }
    if(bufferY>=1){
      bufferY-=1;
      if(yPos-yTarget>0){
        stepperY.step(-1);
        yPos = yPos - 1;
      }
      if(yPos-yTarget<0){
        stepperY.step(1);
        yPos = yPos + 1;
      }
    }

    if(yPos - yTarget == 0 ){
      Serial.println("y on target");
    }
    // Serial.println("______________");
  }
  Serial.println("xTarget");
  Serial.println(xTarget);

  Serial.println("yTarget");
  Serial.println(yTarget);
  endWeld();
}

void findPos(int xTarget , int yTarget, int zTarget) {
  Serial.println("z Rectract");
  for(int i = 0 ; i < maxZ ; i++){
    if(zPos<=0){
      break;
    }
    stepperZ.step(-1);
    zPos = zPos - 1;
  }

  while(abs(xPos-xTarget)>=threshold | abs(yPos-yTarget)>=threshold){
    if(xPos-xTarget>0){
      stepperX.step(-1);
      xPos = xPos - 1;
    }
    if(xPos-xTarget<0){
      stepperX.step(1);
      xPos = xPos + 1;
    }
    if(xPos - xTarget == 0 ){
      Serial.println("x on target");
    }

    if(yPos-yTarget>0){
      stepperY.step(-1);
      yPos = yPos - 1;
    }
    if(yPos-yTarget<0){
      stepperY.step(1);
      yPos = yPos + 1;
    }
    if(yPos - yTarget == 0 ){
      Serial.println("y on target");
    }
  }
  while(abs(zPos-zTarget)>=threshold){
    stepperZ.step(1);
    zPos = zPos + 1;
  }
  Serial.println("z on target");

  delay(1000);
}

void loop(){
  String cmd = Serial.readStringUntil('\n');
  if(cmd=="home"){
    moveTo(103,114,0);
  }
  if(cmd=="zero"){
    moveTo(0,0,0);
  }
  if(cmd=="random"){
    const int x = (int) random(200);
    const int y = (int) random(200);
    moveTo(x,y,0);
    delay(1000);
  }
}
