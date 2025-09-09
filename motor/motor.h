#include <Stepper.h>

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


// track current position in *steps*
long xPos = 0;
long yPos = 0;
long zPos = 0;

void moveTo(int, int, float, float);
void arcTo(int, int, int, bool, float, float);

//Handles the energy source for the electric arc to start the weld
void startWeld(float wireFeedSpeed){
  //logic to start weld
  Serial.println("Starting weld at:");
  Serial.println(wireFeedSpeed);
}

//Handles the energy source for the electric arc to cease the weld
void endWeld(){
  //Logic to end weld
  Serial.println("Stopping weld");
}

//Uses moveTo() with wireFeedSpeed > 0
void weldTo(int xTarget, int yTarget, float dt, float wireFeedSpeed){
  Serial.println("Welding...");
  if(weldTo <=0){
    Serial.println("WELD FLOW = 0");
  }
  moveTo(xTarget, yTarget, dt, wireFeedSpeed);
  delay(1000);
  Serial.println("Weld complete.");
}

//Moves the head without concern for path. Easy, fast, cheap computations
void findPos(int xTarget , int yTarget, int zTarget) {
  Serial.println("z Rectract");
  //Move up to the top
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

//Goes to target on a pseudo-straight path
void moveTo(int xTarget, int yTarget, float dt, float wireFeedSpeed = 0.0) {
  const int distX = abs(xTarget-xPos);
  const int distY = abs(yTarget-yPos);
  double bufferX = 0;
  double bufferY = 0;
  if(wireFeedSpeed>0.0){
    startWeld(wireFeedSpeed);
  }
  // Each motor in X and Y have a buffer, which charges by distK/maxK, for each motor on the K axis
  // When the buffer goes over 1, the all the motors on the K axis take a step
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

//Separate the arc movement function into multiple moveTo segments to handle circular movements
void arcTo( int xTarget, int yTarget, int radius, bool clockwise, float dt, float wireFeedSpeed = 0.0){
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

    moveTo((int)x+dx, (int)y+dy, dt, wireFeedSpeed);
    x = x+dx
    y = y+dy
  }
  delay(1000);
  Serial.println("Arc move complete.");
}
