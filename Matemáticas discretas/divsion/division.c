#include <stdio.h>

//a=bq+r
//0<=r<b

int main(){
    int a,b,r;

    printf("Ingresa el valor de a: \n");
    scanf("%d",&a);
    printf("Ingresa el valor de b: \n");
    scanf("%d",&b);

    if (b > 1){
        int q = 0;
        while (b*q <= a){
            q++;
        }
        printf("El cociente es: %d\n",q);
        printf("El residuo es: %d\n",r);
        printf("%d=%d(%d)+%d\n",a,b,q,r);
        
    }else{
        printf("El valor de B tiene que ser mayor a 1\n");
    }
    
    return 0;
}
