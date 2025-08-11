#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
  const char *commands[] = {
  "G0","G1", "G2", "G3", "G4", "G5", "G6"
  };

  FILE* file = fopen("tests/g1.gcode", "r");
  if (file == NULL) {
    fprintf(stderr, "Error opening file\n");
    return 1;
  }
  char line[256];

  printf("Reading commands in the file\n");
  while (fgets(line, sizeof(line), file)) {
    // Process the line
    printf("%s", line);
    // Check for specific commands
    for (int i = 0; i < sizeof(commands) / sizeof(commands[0]); i++) {
      if (line[0] == 'G' && line[1] == commands[i][1]) {
        printf("Found command: %s\n", commands[i]);
      }
    }
  }

  fclose(file);
  return 0;
}
