#include <Stepper.h>
#include <string.h>

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

void setup() {
  stepperX.setSpeed(rpm);
  stepperY.setSpeed(rpm);
  stepperZ.setSpeed(rpm);
  Serial.begin(9600);

  moveTo(100,200,0);
  moveTo(0,0,0);
  moveTo(100,200,5);
}

void moveTo(int xTarget, int yTarget, float dt){
  const int distX = abs(xTarget-xPos);
  const int distY = abs(yTarget-yPos);
  double bufferX = 0; 
  double bufferY = 0;

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
