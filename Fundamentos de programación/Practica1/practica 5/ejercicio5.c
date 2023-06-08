#include <stdio.h>
#include <ctype.h>

void convertirMayusculasMinusculas(char frase[]) {
    int i = 0;
    int nuevaPalabra = 1; // Bandera para indicar si es el inicio de una nueva palabra

    while (frase[i] != '\0') {
        if (nuevaPalabra && isalpha(frase[i])) {
            frase[i] = toupper(frase[i]); // Convertir la primera letra a mayúscula
            nuevaPalabra = 0;
        } else {
            frase[i] = tolower(frase[i]); // Convertir las demás letras a minúsculas
        }

        if (frase[i] == ' ') {
            nuevaPalabra = 1;
        }

        i++;
    }
}

int main() {
    char frase[100];

    printf("Introduce una frase: ");
    fgets(frase, sizeof(frase), stdin);

    convertirMayusculasMinusculas(frase);

    printf("Frase convertida: %s\n", frase);

    return 0;
}
