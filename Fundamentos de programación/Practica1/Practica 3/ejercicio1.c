#include <stdio.h>

int main(){
    int number = 0;
    float suma = 0;
    int cant = 0;
    int par = 0;
    int impar = 0;
    float prom;
    printf("Para salir del programa coloca un numero negativo :)\n");
    printf("Introduce un numero positivo: \n");
    scanf("%d",&number);
    while(number>=0){
        cant ++;
        suma += number;
        if (number % 2 == 0){
          par++;  
        }else{
          impar++; 
        }
        if (cant > 0){
           prom = suma/cant;  
        }
        
        printf("----------------------------------------------");
        printf("\n La cantidad de numeros es: %d \n",cant);
        printf("Cantidad de pares: %d \n",par);
        printf("Cantidad de impares: %d \n",impar);
        printf("Suma de los numeros: %.2f \n",suma);
        printf("El promedio de los numeros es: %.2f \n",prom);
        printf("----------------------------------------------\n");

        
        printf("Introduce un numero positivo (coloca un negativo para salir): \n");
        scanf("%d",&number);
    } 
    return 0;
}
