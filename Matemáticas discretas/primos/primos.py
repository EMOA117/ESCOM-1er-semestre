import math

def is_prime(n):
    if n < 2:
        return False
    for i in range(2,  int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


num = int(input('Ingresa un numero entero no mayor a 20 digitos para comprobar si es primo: '))

if is_prime(num):
    print("El número es primo")
else:
    print("El número no es primo")
