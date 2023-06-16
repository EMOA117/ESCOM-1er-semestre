def compara_palabras(palabra1, palabra2):
    for i in range(min(len(palabra1), len(palabra2))):
        if ord(palabra1[i].lower()) < ord(palabra2[i].lower()):
            return True
        elif ord(palabra1[i].lower()) > ord(palabra2[i].lower()):
            return False

    return len(palabra1) <= len(palabra2)


def ordena_palabras(lista_palabras):
    for i in range(len(lista_palabras)):
        for j in range(len(lista_palabras) - i - 1):
            if not compara_palabras(lista_palabras[j], lista_palabras[j+1]):
                lista_palabras[j], lista_palabras[j +
                                                  1] = lista_palabras[j+1], lista_palabras[j]

    return lista_palabras


tam = int(input("Ingrese el numero de palabras a ordenar: "))
palabras = []
for i in range(tam):
    palabra = input("Escriba la palabra {}: ".format(i+1))
    palabras.append(palabra)
lista_ordenada = ordena_palabras(palabras)

print(lista_ordenada)