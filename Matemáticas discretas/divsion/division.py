##Entrada de datos
a = int(input("Ingrese a: "))
b = int(input("Ingrese b: "))

# a = b(q)+r
# 0<=r<b

##validar si b>1
if b>1:
  if a < 0:
    ##caso de numeros negativos
    cociente = a-1
    ##ciclo para aumentar el cociente de la división
    while a-(b*cociente) >= 0:
      cociente += 1
    cociente -= 1  
    residuo = a-(b*cociente)
    print("El cociente de la división es:", cociente)
    print("El residuo de la división es:", residuo)
    print("------------------------------------------------------------")
    print( "%i = %i(%i)+%i" % (a,b,cociente,residuo))
    print( "0<=%i<%i" % (residuo,b))
  else:
    ##caso de numeros positivos
    cociente = 0
    ##ciclo para aumentar el cociente de la división
    while a-(b*cociente) >= 0:
      cociente += 1
    cociente -= 1  
    residuo = a-(b*cociente)
    print("El cociente de la división es:", cociente)
    print("El residuo de la división es:", residuo)
    print("------------------------------------------------------------")
    print( "%i = %i(%i)+%i" % (a,b,cociente,residuo))
    print( "0<=%i<%i" % (residuo,b))
else:
  print("b debe ser un valor mayor que 1")


