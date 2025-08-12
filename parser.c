#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  const char *commands[] = {
  "G0","G1", "G2", "G3", "G4", "G5", "G6"
  };

  FILE* file = fopen("tests/g1.gcode", "r");
  FILE* out = fopen("tests/g1.out", "w");
  if (file == NULL) {
    fprintf(stderr, "Error opening file\n");
    return 1;
  }
  if (out == NULL) {
    fprintf(stderr, "Error opening output file\n");
    fclose(file);
    return 1;
  }

  char line[256];

  while (fgets(line, sizeof(line), file)) {
    // Process the line
    if(line[0] != ';'){
      printf(line);
    }
    else{
      //printf("Comment found: %s", line);
      continue; // Skip  
    }
    //Because we used "continue" in comments, now we can assume that the line is commands only
    for (int i = 0; i < sizeof(commands) / sizeof(commands[0]); i++) {
      if (line[0] == 'G' && line[1] == commands[i][1]) {
        char buffer[64];
        const char *cmd;
        int x,y,z;
        strcpy(buffer, commands[i]);
        cmd = buffer;
        printf("Command found: %s\n", cmd);

        // For now we will assume that the values are integers, because they represent steps of the motors, instead of real coordinates. On time, we will add constants to convert them to real coordinates

        // The format is G0 X<value> Y<value> Z<value>
        if(cmd[1] == '0'){
          printf("Writing G0 command to output\n");
          sscanf(line, "G0 X%d Y%d Z%d", &x, &y, &z);
          fprintf(out, "moveTo,%d,%d,%d\n", x, y, z);
        }
        // The format is G1 X<value> Y<value> Z<value>
        if(cmd[1] == '1'){
          printf("Writing G1 command to output\n");
          sscanf(line, "G1 X%d Y%d Z%d", &x, &y, &z);
          fprintf(out, "weldTo,%d,%d,%d\n", x, y, z);
        }
        // The format is G2 X<value> Y<value> Z<value>
        //
          //TODO: study the circle functions G2 and G3 to parse them correctly
        if(cmd[1] == '2'){
          int i, j, r, s;
          int clockwise = 1; // 1 for clockwise, 0 for counterclockwise
          printf("Writing G2 command to output\n");
          sscanf(line, "G2 X%d Y%d R%d S&f", &x, &y, &r, &s);
          fprintf(out, "arcTo,%d,%d,%d,%d,%f\n", x, y, r, clockwise, s);
        }

        // The format is G3 X<value> Y<value> Z<value>
        if(cmd[1] == '3'){
          int i, j, r;
          int clockwise = 0; // 1 for clockwise, 0 for counterclockwise
          printf("Writing G2 command to output\n");
          sscanf(line, "G3 X%d Y%d R%d S&f", &x, &y, &r, &s);
          fprintf(out, "arcTo,%d,%d,%d,%d,%f\n", x, y, r, clockwise, s);
        }
      }
    }
  }
  fclose(file);
  return 0;
}
