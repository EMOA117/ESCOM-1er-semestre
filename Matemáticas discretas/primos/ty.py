import gmpy2

def es_primo(n):
    if n <= 1:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    else:
        # Calcular la raíz cuadrada entera de n
        raiz = gmpy2.isqrt(n)

        # Comprobar si n es divisible por algún número impar menor o igual que su raíz cuadrada
        for i in range(3, raiz + 1, 2):
            if n % i == 0:
                return False

        return True

# Ejemplo de uso:
n = gmpy2.mpz(12345678910987654321)
if es_primo(n):
    print(n, "es primo")
else:
    print(n, "no es primo")
