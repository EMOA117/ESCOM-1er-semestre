#include <stdio.h>
#include <stdlib.h>
#include <time.h>

//difinimos constantes para llenar el arreglo y generar los numeros
#define NUM_TIENDAS 30
#define MAX_CHOCOLATES 100

void generarVentas(int ventas[]){
    srand(time(NULL));
    for(int i = 0; i < NUM_TIENDAS; i++){
        ventas[i] = rand() % (MAX_CHOCOLATES);
    }
}

float calcularPromedio(int ventas[]){
    int totalChocolatesVendidos = 0;
    for(int i = 0; i < NUM_TIENDAS; i++){
        totalChocolatesVendidos += ventas[i];
    }
    float prom = totalChocolatesVendidos / NUM_TIENDAS;
    return prom;
}

void mostrarVentas(int ventas[]) {
    for (int i = 0; i < NUM_TIENDAS; i++) {
        if(ventas[i]>=0 && ventas[i]<=39){
            printf("Tienda %d:   %d de 100 chocolates      SURTIR EN 2 SEMANAS\n", i + 1, ventas[i]);
        }else{
            printf("Tienda %d:   %d de 100 chocolates      SURTIR PRONTO\n", i + 1, ventas[i]);
        }
        
        
    }
}

void tiendaConChocolatesNoVendidos(int ventas[], int *tienda, int *chocolatesNoVendidos) {
    *chocolatesNoVendidos = 100;
    for (int i = 0; i < NUM_TIENDAS; i++) {
        if (ventas[i] < *chocolatesNoVendidos) {
            *chocolatesNoVendidos = ventas[i];
            *tienda = i + 1;
        }
    }

}

int main() {
    int ventas[NUM_TIENDAS];
    generarVentas(ventas);

    printf("Ventas por tienda:\n");
    mostrarVentas(ventas);

    float promedio = calcularPromedio(ventas);
    printf("\nPromedio de chocolates vendidos: %.2f\n", promedio);

    int tiendaMaxChocolates, maxChocolatesNoVendidos;
    tiendaConChocolatesNoVendidos(ventas, &tiendaMaxChocolates, &maxChocolatesNoVendidos);
    printf("\nTienda con mas chocolates no vendidos: Tienda %d\n", tiendaMaxChocolates);
    printf("Chocolates no vendidos: %d\n", MAX_CHOCOLATES-maxChocolatesNoVendidos);


    return 0;
}
