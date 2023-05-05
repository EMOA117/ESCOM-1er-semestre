#include <stdio.h>

int main(){
    int horas, extra;

    float salN, salB, impu;

    printf("Ingresa las horas trabajadas\n");
    scanf("%d",&horas);
    
    if (horas>=0){
        if (horas < 40){

            salB = horas * 250;
            if(salB < 8000){
                impu = 0;
                salN = salB  - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);

            }else if (salB >= 8000 && salB <= 10000){
                impu = salB * 0.05;
                salN = salB - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);

            } else if (salB > 10000){
                impu = salB * 0.1;
                salN = salB - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);
            }
            
        }else if(horas >= 40){
            extra = horas - 40;
            salB = (40 * 250)+(extra*(250*1.5));
            
            if(salB < 8000){
                impu = 0;
                salN = salB  - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);

            }else if (salB >= 8000 && salB <= 10000){
                impu = salB * 0.05;
                salN = salB - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);

            } else if (salB > 10000){
                impu = salB * 0.1;
                salN = salB - impu;

                printf("Sueldo Bruto: $ %f \n", salB);
                printf("Sueldo Neto: $ %f \n", salN);
                printf("Impuestos: $ %f \n", impu);
            }

        }
        
    }else{
        printf("No podemos registrar horas negativas\n");
    }
    


    return 0;
}


