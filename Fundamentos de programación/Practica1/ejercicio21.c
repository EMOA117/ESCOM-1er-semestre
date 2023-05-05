#include <stdio.h>
#include <math.h>

int main(){
    int numero, digitos;
    printf("Introduce un numero no mayor a 3 cifras: \n");
    scanf("%d",&numero);
    if(numero<0){
    
    digitos=(log10((numero*-1)) + 1);
    if(digitos<=3){
    printf("Su numero tiene %d digitos y es negativo\n",digitos);
    }else{
    printf("El numero ingresado no es valido");
    }

    }else if(numero>=0){

    digitos=(log10(numero) + 1);
    if(digitos<=3){
    printf("Su numero tiene %d digitos y es positivo\n",digitos);
    }else{
    printf("El numero ingresado no es valido");
    }

    }
    


    return 0;
}
