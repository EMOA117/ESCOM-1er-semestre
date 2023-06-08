#include<stdio.h>
#include<stdlib.h>

int main (){
int n,i,j,x=0,y=0;
printf("introduzca el tamaño de su tablero: ");
scanf("%d",&n);
//vivas=25;
int matriz[n][n];
for (i=0;i<n;i++){
    for(j=0;j<n;j++){
        matriz[i][j]=0;
}
}
for (i=0;i<n;i++){
    for(j=0;j<n;j++){
printf("%d ",matriz[i][j]);
}

printf("\n");

}
printf("\n\npaso 1\n\n");

    printf("introduzca la celula que quiere hacer viva separada por comas si ya no quiere escriba -5,0 : ");
    scanf("%d,%d",&x,&y);
    matriz[x][y]=1;
while(x!=-5){
    printf("introduzca la celula que quiere hacer viva separada por comas si ya no quiere escriba -5,0: ");
    scanf("%d,%d",&x,&y);
    matriz[x][y]=1;

    
}


//matriz[x][y]=1;
for (i=0;i<n;i++){
    for(j=0;j<n;j++){
        printf("%d ",matriz[i][j]);
}
printf("\n");
}
return 0;
}
