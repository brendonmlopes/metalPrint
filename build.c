#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
  char *mode = argc > 1 ? argv[1] : "";
  if(strcmp(mode,"-v")==0){
    printf("______________________________\n");
    printf("Build script by Brendon Maia (https://github.com/brendonmlopes)\n");
    printf("Repository on github: https://github.com/brendonmlopes/metalPrint.git\n");
    printf("______________________________\n");
    printf("Compiling parser.c...\n");
  }
    char *command = "gcc parser.c -o parser";
    int result = system(command);

    if (result == -1) {
        perror("Error executing command");
        return EXIT_FAILURE;
    }

  if(strcmp(mode,"-v")==0){

      printf("Build completed successfully.\n");
      printf("Executing compiled binary...\n");
      printf("______________________________\n\n");
    }

  // Execute the compiled binary with the mode argument
  // Note: The mode argument is passed to the parser binary
 
  char str[256];
  strcpy(str, "./parser ");
  strcat(str, mode);
  system(str);

  if(strcmp(mode,"-v")==0){
      printf("\n\n______________________________\nExecution ended.\n");
    }
    return EXIT_SUCCESS;
}
