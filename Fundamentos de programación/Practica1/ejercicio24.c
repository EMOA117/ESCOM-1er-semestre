#include <stdio.h>

int main(){

    int numero;
    printf("Ingrese un numero del 1 al 10: \n");
    scanf("%d",&numero);

    if (numero>=1 && numero<=10){

        if(numero == 1){
            printf("Su numero %d es equivalente a I\n",numero);
        }else if (numero == 2){
            printf("Su numero %d es equivalente a II\n",numero);
        }else if (numero == 3){
            printf("Su numero %d es equivalente a III\n",numero);
        }else if (numero == 4){
            printf("Su numero %d es equivalente a IV\n",numero);
        }else if (numero == 5){
            printf("Su numero %d es equivalente a V\n",numero);
        }else if (numero == 6){
            printf("Su numero %d es equivalente a VI\n",numero);
        }else if (numero == 7){
            printf("Su numero %d es equivalente a VII\n",numero);
        }else if (numero == 8){
            printf("Su numero %d es equivalente a VIII\n",numero);
        }else if (numero == 9){
            printf("Su numero %d es equivalente a IX\n",numero);
        }else if (numero == 10){
            printf("Su numero %d es equivalente a X\n",numero);
        }  

    }else{
        printf("El numero ingresado no es valido\n");
    }
    


    return 0;
}
