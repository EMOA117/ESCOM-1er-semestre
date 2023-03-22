#include <stdio.h>

int main(){
    //variables
    float medida;
    float yardas,pulgadas,cm,m;
    //lógica
    printf("\nBienvenido, porfavor ingrese su medida en pies: ");
    scanf("%f",&medida);
    yardas=medida/3;
    pulgadas=medida*12;
    cm=medida*30.48;
    m=cm/100;
    printf("\nMedida en yardas: %f",yardas);
    printf("\nMedida en pies: %f",medida);
    printf("\nMedida en pulgadas: %f",pulgadas);
    printf("\nMedida en centimetros: %f",cm);
    printf("\nMedida en metros: %f",m);
    return 0;
}
