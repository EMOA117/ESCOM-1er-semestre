#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define INF 0.0
#define SUP 20000.0
#define MESES 12

// Función para imprimir el contenido del arreglo
void mostrarVentas(double ventas[], int size) {
    for(int i = 0; i < size; i++) {
        printf("Ventas del mes %d: %.2f\n", i+1, ventas[i]);
    }
}

// Función para calcular el total de ventas
double calcularTotal(double ventas[], int size) {
    double total = 0.0;
    for(int i = 0; i < size; i++) {
        total += ventas[i];
    }
    return total;
}

// Función para calcular el promedio de ventas
double calcularPromedio(double ventas[], int size) {
    double total = calcularTotal(ventas, size);
    return total / size;
}

// Función para encontrar el mes con mayor venta
int mesMayorVenta(double ventas[], int size) {
    int mes = 0;
    for(int i = 1; i < size; i++) {
        if(ventas[i] > ventas[mes]) {
            mes = i;
        }
    }
    return mes + 1;
}

int main() {
    double ventas[MESES];
    srand(time(NULL)); // Semilla para la generación de números aleatorios

    // Generar las ventas
    for(int i = 0; i < MESES; i++) {
        ventas[i] = INF + rand()*(SUP-INF)/RAND_MAX;
    }

    // Mostrar las ventas
    mostrarVentas(ventas, MESES);

    // Calcular y mostrar el total de ventas
    double total = calcularTotal(ventas, MESES);
    printf("El total de ventas del ano: %.2f\n", total);

    // Calcular y mostrar el promedio de ventas por mes
    double promedio = calcularPromedio(ventas, MESES);
    printf("El promedio de ventas por mes: %.2f\n", promedio);

    // Encontrar y mostrar el mes con mayor venta
    int mes = mesMayorVenta(ventas, MESES);
    printf("El mes con mayor venta fue: %d con una venta de %.2f\n", mes, ventas[mes - 1]);

    return 0;
}