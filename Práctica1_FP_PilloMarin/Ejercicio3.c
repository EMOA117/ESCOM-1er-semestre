#include <stdio.h>

int main(){
    //variables
    int clave;
    float ene,feb,mar,abr,mayo,jun;
    float total,prm;

    printf("\nBienvenido, porfavor ingrese su clave de empleado: ");
    scanf("%d",&clave);
    printf("\nIngrese su sueldo del mes de Enero: ");
    scanf("%f",&ene);
    printf("\nIngrese su sueldo del mes de Febrero: ");
    scanf("%f",&feb);
    printf("\nIngrese su sueldo del mes de Marzo: ");
    scanf("%f",&mar);
    printf("\nIngrese su sueldo del mes de Abril: ");
    scanf("%f",&abr);
    printf("\nIngrese su sueldo del mes de Mayo: ");
    scanf("%f",&mayo);
    printf("\nIngrese su sueldo del mes de Junio: ");
    scanf("%f",&jun);
    total=ene+feb+mar+abr+mayo+jun;
    prm=total/6;
    printf("\nSu clave de empleado es: %d",clave);
    printf("\nSu ingreso total es: %f",total);
    printf("\nSu promedio de ingreso es: %f",prm);

    return 0;
}