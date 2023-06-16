#include <stdio.h>
#include <string.h>

#define MAX_LENGTH 50
#define NUM_WORDS 10

void ordenarPalabras(char palabras[NUM_WORDS][MAX_LENGTH]) {
    int i, j;
    char temp[MAX_LENGTH];

    for (i = 0; i < NUM_WORDS - 1; i++) {
        for (j = i + 1; j < NUM_WORDS; j++) {
            if (strcmp(palabras[i], palabras[j]) > 0) {
                strcpy(temp, palabras[i]);
                strcpy(palabras[i], palabras[j]);
                strcpy(palabras[j], temp);
            }
        }
    }
}

int main() {
    char palabras[NUM_WORDS][MAX_LENGTH];

    printf("Introduce %d palabras:\n", NUM_WORDS);

    for (int i = 0; i < NUM_WORDS; i++) {
        printf("Palabra %d: ", i + 1);
        scanf("%s", palabras[i]);
    }

    ordenarPalabras(palabras);

    printf("\nPalabras ordenadas:\n");
    for (int i = 0; i < NUM_WORDS; i++) {
        printf("%s\n", palabras[i]);
    }

    return 0;
}