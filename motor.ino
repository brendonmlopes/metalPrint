#include <Stepper.h>
const int stepsPerRev = 200;
const int rpm          = 15;
const int height = 500;
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
}

void moveTo(int xTarget , int yTarget, int zTarget) {
  Serial.println("z Rectract");
  for(int i = 0 ; i < height ; i++){
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
    Serial.println("____________");
    Serial.println("x");
    Serial.println(xPos);
    Serial.println(xPos-xTarget);
  
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
    Serial.println("____________");
    Serial.println(("y"));
    Serial.println(yPos);
    Serial.println(yPos-yTarget);
  }
  while(abs(zPos-zTarget)>=threshold){
    stepperZ.step(1);
    zPos = zPos + 1;
  }
  Serial.println("z on target");

  delay(1000);
}

void loop(){}
