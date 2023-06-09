import networkx as nx
import matplotlib.pyplot as plt

def unir_nodos(graph, n, m):
    nodes = list(graph.nodes)

    # if n == 2 and m==0:
    #     graph.add_edge(0,0)
    #     graph.add_edge(1,1)

    for i in range(len(nodes)):
        x = nodes[i]

        for j in range(len(nodes)):
            y = nodes[j]

            if (int(x) + int(y)) % n == m:
                graph.add_edge(x, y)
                print(x,"R" ,y)
    return graph

def generar_grafo(n, m):
    # Crear el grafo vacío
    grafo = nx.DiGraph()

    # Agregar los nodos al grafo
    for i in range(n):
        grafo.add_node(str(i))

    # Unir los nodos que cumplen la condición en el grafo
    grafo_resultante = unir_nodos(grafo, n, m)

    if n == 2 and m==0:
        nx.draw_random(grafo_resultante, with_labels=True, node_color='cyan', node_size=500, font_size=10, edge_color='blue')
    else:
        # Dibujar el grafo
        nx.draw_circular(grafo_resultante, with_labels=True, node_color='cyan', node_size=500, font_size=10, edge_color='blue')
    
    # Mostrar el grafo
    plt.show()

# Obtener los valores de n y m ingresados por el usuario
n = int(input("Ingrese el valor de n: "))
m = int(input("Ingrese el valor de m: "))

if n <= 0:
    print("n no puede ser negativo o cero")
elif m >= n:
    print("m no puede ser mayor que n")
elif n>=0:
    generar_grafo(n, m)
# Generar y visualizar el grafo
# generar_grafo(n, m)
