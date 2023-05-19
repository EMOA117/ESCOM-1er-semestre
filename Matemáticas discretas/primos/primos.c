
/*
  Alumno: Montes de Oca Arellano Edgar
  1BV1
  Programa para calcular primos
  Matematicas discretas
*/

//importamos librerías
#include <gmp.h>
#include <stdbool.h>
#include <stdio.h>
#include <time.h>

//Método para calcular primos
bool is_prime(mpz_t n) {
    //validamos si es un número menor o igual a 1, no es primo
    if (mpz_cmp_ui(n, 1) <= 0) {
        return false;
    }
    //validamos si el numero es 2, es un numero primo
    if (mpz_cmp_ui(n, 2) == 0) {
        return true;
    }
    //validamos si el numero es par, no es primo
    if (mpz_even_p(n)) {
        return false;
    }
    //inicializamos nuestro indice i, calculamos la raiz y creamos una variable
    mpz_t i;
    mpz_init(i);
    mpz_set_ui(i, 3);
    mpz_t raiz;
    mpz_init(raiz);
    mpz_sqrt(raiz, n);
    //ciclo while para dividir el numero en rango de 3 hasta raiz de n
    while (mpz_cmp(i, raiz) <= 0) {
        if (mpz_divisible_p(n, i)) {
            mpz_clear(i);
            mpz_clear(raiz);
            return false;
        }
        mpz_add_ui(i, i, 2);
    }
    mpz_clear(i);
    mpz_clear(raiz);
    return true;
}

//metodo main para la ejecucion del programa 
int main() {
    mpz_t num;
    mpz_init(num);
    gmp_printf("Ingresa un numero entero no mayor a 20 digitos para comprobar si es primo: ");
    gmp_scanf("%Zd", num);
    //iniciamos el reloj para el tiempo
    clock_t in = clock();

    //llamar al metodo
    if (is_prime(num)) {
        gmp_printf("Es un numero primo.\n");
    } else {
        gmp_printf("No es un numero primo.\n");
    }
    //apagamos el reloj y mostramos el tiempo
    clock_t fin = clock();
    double tiempo_transcurrido = (double)(fin - in) / CLOCKS_PER_SEC;
    printf("%f\n", tiempo_transcurrido);

    mpz_clear(num);

    return 0;
}
