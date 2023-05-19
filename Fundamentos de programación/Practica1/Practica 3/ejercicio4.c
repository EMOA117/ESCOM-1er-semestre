#include <stdio.h>

int main(){
    int num;
    printf("Ingresa un valor entero no negativo mayor que 0: \n");
    scanf("%d",&num);
    printf("-------------------------------------------------\n");
    if (num > 0){
        while (num>0){
            int i = 1;
            while (i<=num){
             printf("%d ",i);
             i++;   
            }
            printf("\n");
            num--;
        }
    printf("-------------------------------------------------\n");
    }else{
        printf("\nEl valor ingresado no es valido\n");
    }
    return 0;
}
