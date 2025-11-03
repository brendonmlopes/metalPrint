#include <stdio.h>
#include <stdlib.h>
#include <Arduino.h>
#include <cJSON.h>

const int S0PIN A0;
const int S1PIN A1;
const int S2PIN A2;

void initializeSensors(){
  pinMode(S0PIN, INPUT);
  pinMode(S1PIN, INPUT);
  pinMode(S2PIN, INPUT);
}

void writeSensor(){

  int s0val = analogRead(S0PIN);

  int s1val = analogRead(S1PIN);

  int s2val = analogRead(S2PIN);

  Serial.println(s0val);
  Serial.println(s1val);
  Serial.println(s2val);
  
  //Creating JSON object
  cJSON *root = cJSON_CreateObject();
  cJSON_AddNumberToObject(root, "sensor0", s0val);
  cJSON_AddNumberToObject(root, "sensor1", s1val);
  cJSON_AddNumberToObject(root, "sensor2", s2val);
  char *jsonString = cJSON_Print(root);

  //Outputing to a file
  FILE *file = fopen("../sensor_data.json", "w");
  if (file != NULL) {
    fputs(jsonString, file);
    fclose(file);
  } else {
    Serial.println("Error opening file for writing");
  }
  cJSON_Delete(root);
  free(jsonString);
}
