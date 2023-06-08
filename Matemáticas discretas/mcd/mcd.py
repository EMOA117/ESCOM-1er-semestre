def division(a,b):
  if b >= 1:
    if a < 0:
      ##caso de numeros negativos
      cociente = a-1
      ##ciclo para aumentar el cociente de la división
      while a-(b*cociente) >= 0:
        cociente += 1
      cociente -= 1  
      residuo = a-(b*cociente)
      print( "%i = %i(%i)+%i" % (a,b,cociente,residuo))
    else:
      ##caso de numeros positivos
      cociente = 0
      ##ciclo para aumentar el cociente de la división
      while a-(b*cociente) >= 0:
        cociente += 1
      cociente -= 1  
      residuo = a-(b*cociente)
      print( "%i = %i(%i)+%i" % (a,b,cociente,residuo))
  else:
    print("b debe ser un valor mayor que 1")
  
  print("---------------------------------------------------------")
  return cociente, residuo

# def bezout(a, b):
#     # Asegurarse de que a sea mayor o igual que b
#     if a < b:
#         a, b = b, a

#     # Inicializar variables
#     r_prev, r = a, b
#     x_prev, x = 1, 0
#     y_prev, y = 0, 1

#     # Algoritmo de Bezout por suma y multiplicación
#     while r != 0:
#         q = division(r_prev,r)
#         r_prev, r = r, r_prev - q * r
#         x_prev, x = x, x_prev - q * x
#         y_prev, y = y, y_prev - q * y

#     return x_prev, y_prev


def euclides(a, b):
    # # Asegurarse de que a sea mayor o igual que b
    # if a < b:
    #     a, b = b, a

    # # Algoritmo de Euclides por suma y multiplicación
    # while b != 0:
    #     while a >= b:
    #         a = a - b
    #     a, b = b, a

    if a<0:
      cociente = a-1
      q1 = 0
      while a-(b*cociente) >= 0:
        cociente += 1
      cociente -= 1  
      residuo = a-(b*cociente)
      if residuo != 0:
         q1 = residuo
      while residuo != 0:
         a=b
         b=residuo
         cociente = a-1
         while a-(b*cociente) >= 0:
          cociente += 1
         cociente-=1
         residuo= a-(b*cociente)
         if residuo != 0:
            q1 = residuo
    else:
        cociente = 0
        q1 = 0
        while a-(b*cociente) >= 0:
          cociente += 1
        cociente -= 1  
        residuo = a-(b*cociente)
        if residuo != 0:
           q1 = residuo
        while residuo != 0:
          a=b
          b=residuo
          cociente = 0
          while a-(b*cociente) >= 0:
            cociente += 1
          cociente-=1
          residuo= a-(b*cociente)
          if residuo != 0:
              q1 = residuo

    if a%b==0 or b%a==0:
       q1=a
       if b<a:
          q1=b
       else:
          q1=a
    if q1 == 0:
       q1 = 1
    return q1 



def bezout(a, b):
    # Caso base
    if a == 0:
        return (b, 0, 1)
    else:
        # Llamada recursiva
        cociente, residuo = division(b, a)
        mcd, x, y = bezout(residuo, a)
        print(mcd,"=",a,"(",x,")","+",b,"(",y,")")
        return (mcd, y - cociente * x, x)

# Solicitar los números al usuario

num_a = int(input("Ingrese a: "))
num_b = int(input("Ingrese b: "))

num_a=abs(num_a)
num_b=abs(num_b)

if num_a < num_b:
   num_a, num_b = num_b, num_a

if num_a == 0 and num_b == 0:
   print("mcd(",num_a, ",", num_b, ")= no está definido")
   print("---------------------------------------------------------")
   print("Por lo tanto los coeficientes de Bezout (x, y) para", num_a,"y" ,num_b, "no están definidos")
elif num_a == 0 or num_b == 0:
    if num_a == 0:
        print("mcd(",num_a, ",", num_b, ")=", num_b)
        # Calcular los coeficientes de Bezout utilizando el algoritmo de Bezout
        mcd,coef_x, coef_y = bezout(num_a, num_b)
        # Imprimir el resultado
        if num_a<num_b:
            num_a, num_b = num_b, num_a
        print("Los coeficientes de Bezout (x, y) para", num_a, "y", num_b, "son:", coef_x, ",", coef_y)
        print(mcd,"=",num_b,"(",coef_x, ") +",num_a,"(",coef_y,")")
    else:
        print("mcd(",num_a, ",", num_b, ")=", num_a)
        # Calcular los coeficientes de Bezout utilizando el algoritmo de Bezout
        mcd,coef_x, coef_y = bezout(num_a, num_b)
        # Imprimir el resultado
        if num_a<num_b:
            num_a, num_b = num_b, num_a
        print("Los coeficientes de Bezout (x, y) para", num_a, "y", num_b, "son:", coef_x, ",", coef_y)
        print(mcd,"=",num_a,"(",coef_x, ") +",num_b,"(",coef_y,")")

elif num_a != 0 and num_b != 0:
   # Calcular el máximo común divisor utilizando el algoritmo de Euclides
  mcd = euclides(num_a, num_b)
  # Imprimir el resultado
  print("El máximo común divisor de", num_a, "y", num_b, "es:", mcd)
  print("mcd(",num_a, ",", num_b, ")=", mcd)
  print("---------------------------------------------------------")
  # Calcular los coeficientes de Bezout utilizando el algoritmo de Bezout
  mcd,coef_x, coef_y = bezout(num_a, num_b)
  # Imprimir el resultado
  if num_a<num_b:
    num_a, num_b = num_b, num_a
  print("Los coeficientes de Bezout (x, y) para", num_a, "y", num_b, "son:", coef_x, ",", coef_y)
  print(mcd,"=",num_a,"(",coef_x, ") +",num_b,"(",coef_y,")")