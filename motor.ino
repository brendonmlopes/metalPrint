#include <Stepper.h>

const int stepsPerRev = 200;
const int rpm          = 15;
const int height = 500;
const int threshold = 1;
const int k_threshold = 5;

const int quickStep = 4;
const int slowStep = 1;
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

void moveTo(int xTarget, int yTarget){
  const int a = abs(xTarget-xPos);
  const int b = abs(yTarget-yPos); 
  float prop = (float)min(a,b)/(float)max(a,b);
//Find the irreductible fraction for prop and use denom in x or y and numerator in y or x
  while(abs(xPos-xTarget)>=threshold | abs(yPos-yTarget)>=threshold){
    if(xPos-xTarget>0){
      if(abs(xPos-xTarget)<k_threshold*threshold){
        if(round(prop*slowStep)==0){
          stepperX.step(-1);
          xPos = xPos - 1;
        }else{
          stepperX.step(-round(prop*slowStep));
          xPos = xPos - round(prop*slowStep);
        }
        Serial.println("Slow step on -x");
        // Serial.println(round(prop*slowStep));
      }else{
        stepperX.step(-round(prop*quickStep));
        xPos = xPos - round(prop*quickStep);
        Serial.println("Quick step on -x");
        // Serial.println(prop*quickStep);
      }
    }
    if(xPos-xTarget<0){
      if(abs(xPos-xTarget)<k_threshold*threshold){
        if(round(prop*slowStep)==0){
          stepperX.step(1);
          xPos = xPos + 1;
        }else{
          stepperX.step(round(prop*slowStep));
          xPos = xPos + round(prop*slowStep);
        }
        Serial.println("Slow step on +x");
        // Serial.println(prop*slowStep);
      }else{
        stepperX.step(round(prop*quickStep));
        xPos = xPos + round(prop*quickStep);
        Serial.println("Quick step on +x");
        // Serial.println(round(prop*quickStep));
      }
    }
    if(xPos - xTarget == 0 ){
      Serial.println("x on target");
    }
  
    if(yPos-yTarget>0){
      if(abs(yPos-yTarget)<k_threshold*threshold){
        stepperY.step(-slowStep);
        yPos = yPos - slowStep;
        // Serial.println("Slow step on y");
        // Serial.println(prop*slowStep);
      }else{
        stepperY.step(-quickStep);
        yPos = yPos - quickStep;
        // Serial.println("Quick step on y");
        // Serial.println(prop*quickStep);
      }
    }
    if(yPos-yTarget<0){
      if(abs(yPos-yTarget)<k_threshold*threshold){
        stepperY.step(slowStep);
        yPos = yPos + slowStep;
        // Serial.println("Slow step on y");
        // Serial.println(prop*slowStep);
      }else{
        stepperY.step(quickStep);
        yPos = yPos + quickStep;
        // Serial.println("Quick step on y");
        // Serial.println(prop*quickStep);
      }
    }
    if(yPos - yTarget == 0 ){
      // Serial.println("y on target");
    }
    // Serial.println("______________");
  }
}

void findPos(int xTarget , int yTarget, int zTarget) {
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

void loop(){
  String cmd = Serial.readStringUntil('\n');
  if(cmd=="home"){
    moveTo(100,100);
  }
  if(cmd=="zero"){
    moveTo(0,0);
  }
  if(cmd=="random"){
    const int x = (int) random(200);
    const int y = (int) random(200);
    Serial.println(x);
    Serial.println(y);
    Serial.println("_____");
    moveTo(x,y);
  }
}
