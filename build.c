#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    printf("______________________________\n");
    printf("Build script by Brendon Maia (https://github.com/brendonmlopes)\n");
    printf("Repository on github: https://github.com/brendonmlopes/metalPrint.git\n");
    printf("______________________________\n");
    printf("______________________________\n");
    printf("Compiling parser.c...\n");
    char *command = "gcc parser.c -o parser";
    int result = system(command);

    if (result == -1) {
        perror("Error executing command");
        return EXIT_FAILURE;
    }

    printf("Build completed successfully.\n");
    printf("Executing compiled binary...\n");
    printf("______________________________\n\n");
    system("./parser");
    printf("\n\n______________________________\nExecution ended.\n");
    return EXIT_SUCCESS;
}
