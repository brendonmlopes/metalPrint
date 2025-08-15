#include <stdio.h>
#include <stdlib.h>
#include "motor.h"
void setup(){
	moveTo(10,10,10,2.000000);
	moveTo(10,10,0,2.000000);
//This is a comment
	weldTo(0,0,0,2.000000);
	arcTo(10,0,10,1,2.000000);
//This is another comment
	moveTo(0,0,0,2.000000);
	arcTo(10,0,5,0,2.000000);
	moveTo(5,5,-5,2.000000);
}
void loop(){};