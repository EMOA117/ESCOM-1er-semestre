#include <stdio.h>
#include <string.h>
#include <stdlib.h>
 
char esAcento(char letra) {
    if (letra == -61) {
        return 1;
    }
    return 0;
}
 
char sinAcento(char palabra[], int i) {
    char letra1 = palabra[i];
    if (!esAcento(letra1)) {
        return letra1;
    }
    letra1 = palabra[i + 1];
    if (letra1 == -95) {
        return 'a';
    } else if (letra1 == -87) {
        return 'e';
    } else if (letra1 == -83) {
        return 'i';
    } else if (letra1 == -77) {
        return 'o';
    } else if (letra1 == -70) {
        return 'u';
    } else if (letra1 == -79) {
        return 'n';
    }
    return letra1;
}
 
int comparar(char palabra1[], char palabra2[]) {
    int largo1, largo2, largo;
    char letra1, letra2;
    largo1 = strlen(palabra1);
    largo2 = strlen(palabra2);
    if (largo1 >= largo2)
        largo = largo2;
    else
        largo = largo1;
    int i;
    for (i = 0; i < largo; i++) {
        letra1 = sinAcento(palabra1, i);
        letra2 = sinAcento(palabra2, i);
        if (letra1 != letra2) {
            return letra1 - letra2;
        }
    }
 
    if (largo1 != largo2) {
        return largo1 - largo2;
    }
 
    return 0;
}
 
int main() {
    char palabra[10][100];
    char input[10];
    char guardar[100];
    int n, i, bien, j;
    printf("Este programa acinida oir kkas ketras \n");
    do {
        printf("Introduce el numero de palabras que quieres ordenar: ");
        fgets(input, sizeof(input), stdin);
        n = atoi(input);
 
        if (n <= 0) {
            printf("debe introducir un valor entero positivo para el numero de palabras.\n");
        } else {
            bien = 1;
        }
    } while (bien != 1);
    for (i = 0; i < n; i++) {
        printf("INtroduzca una palabra: ");
        fgets(palabra[i], sizeof(palabra[i]), stdin);
        palabra[i][strlen(palabra[i]) - 1] = '\0';
    }
 
 
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (comparar(palabra[j], palabra[j + 1]) > 0) {
                strcpy(guardar, palabra[j]);
                strcpy(palabra[j], palabra[j + 1]);
                strcpy(palabra[j + 1], guardar);
            }
        }
    }
 
 
    printf("Palabras ya con el orden correcto :\n");
    for (i = 0; i < n; i++) {
        printf("%s\n", palabra[i]);
    }
 
    return 0;
}