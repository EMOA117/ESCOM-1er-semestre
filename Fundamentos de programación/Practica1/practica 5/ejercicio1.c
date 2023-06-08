#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void invertirArreglo(float arreglo[], int tamano) {
    int i;
    float temp;    
    for (i = 0; i < tamano / 2; i++) {
        temp = arreglo[i];
        arreglo[i] = arreglo[tamano - 1 - i];
        arreglo[tamano - 1 - i] = temp;
    }
}

int main() {
    srand(time(NULL)); // Inicializar la semilla del generador de números aleatorios
    float arreglo[10];
    int i;
    // Llenar el arreglo con números aleatorios entre 0 y 100
    for (i = 0; i < 10; i++) {
        float low = 0.0;
        float high = 100.0;
        arreglo[i] = low + rand() * (high - low) / RAND_MAX;
    }
    printf("Arreglo original:\n");
    for (i = 0; i < 10; i++){
        printf("%.2f ", arreglo[i]);
    }
    invertirArreglo(arreglo, 10); 
    printf("\nArreglo invertido:\n");
    for (i = 0; i < 10; i++) {
        printf("%.2f ", arreglo[i]);
    }
    printf("\n");
    return 0;
}
