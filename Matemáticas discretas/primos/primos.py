import math
import time


def is_prime(n):

    raiz = int(math.sqrt(n)) + 1
    
    if n < 2:
        return False
    if n % 2 == 0:
        return False
    for i in range(3, raiz , 2):
        if n % i == 0:
            print(i)
            print((505*505*505*505*505*505*505*505*505*505*505) % 899)
            return False
    return True

print('-----------------------------------------------------------------------')
num = int(input('Ingresa un numero entero no mayor a 20 digitos para comprobar si es primo: '))
print('-----------------------------------------------------------------------')

inicio = time.time()

if is_prime(num):
    print("El número es primo")
else:
    print("El número no es primo")


fin = time.time()
print(fin-inicio)