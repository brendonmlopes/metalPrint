#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main(int argc, char *argv[])
{
  const char *commands[] = {
  "G0","G1", "G2", "G3", "G4", "G5", "G6"
  };

  FILE* file = fopen("tests/g1.gcode", "r");
  FILE* out = fopen("motor/motor.ino", "w");

  if (file == NULL) {
    fprintf(stderr, "Error opening file\n");
    return 1;
  }

  if (out == NULL) {
    fprintf(stderr, "Error opening output file\n");
    fclose(file);
    return 1;
  }

  fprintf(out, "#include <stdio.h>\n");
  fprintf(out, "#include <stdlib.h>\n");
  fprintf(out, "#include \"motor.h\"\n");

  fprintf(out, "void setup(){\n");

  char *mode = argc > 1 ? argv[1] : "";
  int lineIdx = 0;
  int commentCount = 0;
  char line[512];
  float weldFlow = 0.0;
  if(strcmp(mode,"-v")==0){
    printf("G-code Parser\n");
  } 
  while ( fgets(line, sizeof(line), file) ) {
    if( lineIdx == 0 ){
      // Skip the first line
      if(strcmp(mode,"-v")==0){
        printf("Reading header: %s", line);
      }
      for(int i=0 ; i < sizeof(line) / sizeof(line[0]); i++){
        if(line[i] == 'W'){
          //atof converts the string to a float
          weldFlow = atof(&line[i+1]);
        }
      }
      lineIdx++;
      continue;
    }

    // Process the line
    if(line[0] != ';' && strcmp(mode,"-v")==0){
      printf(line);
    }

    //Found a comment
    else if(line[0] == ';'){
      commentCount++;
      fprintf(out, "//%s", &line[1]);
      continue; // Skip  
    }

    //Because we used "continue" in comments, now we can assume that the line is commands only
    for (int i = 0; i < sizeof(commands) / sizeof(commands[0]); i++) {
      if (line[0] == 'G' && line[1] == commands[i][1]) {
        char buffer[128];
        const char *cmd;
        int x,y,z;

        strcpy(buffer, commands[i]);
        cmd = buffer;
        if(strcmp(mode,"-v")==0){
          printf("Command found: %s\n", cmd);
        }
        fprintf(out, "\t");

        // For now we will assume that the values are integers, because they represent steps of the motors, instead of real coordinates. On time, we will add constants to convert them to real coordinates

        // The format is G0 X<value> Y<value> Z<value>
        if(cmd[1] == '0'){
          sscanf(line, "G0 X%d Y%d Z%d", &x, &y, &z);
          fprintf(out, "moveTo(%d,%d,%d,%f);\n", x, y, z, weldFlow);
        }

        // The format is G1 X<value> Y<value> Z<value>
        if(cmd[1] == '1'){
          sscanf(line, "G1 X%d Y%d Z%d", &x, &y, &z);
          fprintf(out, "weldTo(%d,%d,%d,%f);\n", x, y, z, weldFlow);
        }

        // The format is G2 X<value> Y<value> R<value>
        if(cmd[1] == '2'){
          int r;
          int clockwise = 1; // 1 for clockwise, 0 for counterclockwise
          sscanf(line, "G2 X%d Y%d R%d", &x, &y, &r);
          fprintf(out, "arcTo(%d,%d,%d,%d,%f);\n", x, y, r, clockwise, weldFlow);
        }

        // The format is G3 X<value> Y<value> R<value>
        if(cmd[1] == '3'){
          int r;
          int clockwise = 0; // 1 for clockwise, 0 for counterclockwise
          sscanf(line, "G3 X%d Y%d R%d", &x, &y, &r);
          fprintf(out, "arcTo(%d,%d,%d,%d,%f);\n", x, y, r, clockwise, weldFlow);
        }
        if(strcmp(mode,"-v")==0){
            printf("Writing G%d command to output\n", cmd);
          }
      }
    }
    lineIdx++;
  }

  if(strcmp(mode,"-v")==0){
    printf("End of file reached\n");
    printf("________________________________________\n");
    printf("Lines processed:\t\t%d\n", lineIdx+1);
    printf("Commands found:\t\t\t%d\n", lineIdx-commentCount);
    printf("Weld flow rate:\t\t\t%f\n", weldFlow);
    printf("________________________________________\n");
    printf("Output written to motor/motor.ino\n");
  }

  fprintf(out, "}\n");
  fprintf(out, "void loop(){};");
  fclose(out);
  fclose(file);
  return 0;
}

