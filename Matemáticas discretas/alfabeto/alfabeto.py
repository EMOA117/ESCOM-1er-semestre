letras_esp = {
    'A': 1, 'Á': 2, 'a': 3, 'á': 4, 'B': 5, 'b': 6, 'C': 7, 'c': 8, 'D': 9, 'd': 10, 'E': 11, 'É': 12, 'e': 13,
    'é': 14, 'F': 15, 'f': 16, 'G': 17, 'g': 18, 'H': 19, 'h': 20, 'I': 21, 'Í': 22, 'i': 23, 'í': 24, 'J': 25,
    'j': 26, 'K': 27, 'k': 28, 'L': 29, 'l': 30, 'M': 31, 'm': 32, 'N': 33, 'n': 34, 'Ñ': 35, 'ñ': 36, 'O': 37,
    'Ó': 38, 'o': 39, 'ó': 40, 'P': 41, 'p': 42, 'Q': 43, 'q': 44, 'R': 45, 'r': 46, 'S': 47, 's': 48, 'T': 49,
    't': 50, 'U': 51, 'Ú': 52, 'u': 53, 'ú': 54, 'V': 55, 'v': 56, 'W': 57, 'w': 58, 'X': 59, 'x': 60, 'Y': 61,
    'y': 62, 'Z': 63, 'z': 64
}

def compara_palabras(palabra1, palabra2):
    for i in range(min(len(palabra1), len(palabra2))):
        if palabra1[i] in letras_esp and palabra2[i] in letras_esp:
            if letras_esp[palabra1[i]] < letras_esp[palabra2[i]]:
                return True
            elif letras_esp[palabra1[i]] > letras_esp[palabra2[i]]:
                return False
        elif palabra1[i] in letras_esp:
            return True
        elif palabra2[i] in letras_esp:
            return False

    return len(palabra1) <= len(palabra2)


def ordena_palabras(lista_palabras):
    for i in range(len(lista_palabras)):
        for j in range(len(lista_palabras) - i - 1):
            if not compara_palabras(lista_palabras[j], lista_palabras[j+1]):
                lista_palabras[j], lista_palabras[j+1] = lista_palabras[j+1], lista_palabras[j]

    return lista_palabras


n = int(input("Ingrese la cantidad de palabras: "))
lista_palabras = []
for i in range(n):
    palabra = input("Ingrese la palabra {}: ".format(i+1))
    lista_palabras.append(palabra)
lista_ordenada = ordena_palabras(lista_palabras)

print(lista_ordenada)
