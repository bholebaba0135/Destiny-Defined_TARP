import random
import networkx as nx
import matplotlib.pyplot as plt

graphs = []

for i in range(10):
    n = random.randint(21, 70)
    graph = nx.Graph()
    graph.add_nodes_from(range(n))

    for u in range(n):
        for v in range(u + 1, n):
            if random.random() < 0.3:
                w = random.randint(1, 100)
                graph.add_edge(u, v, weight=w)

    graphs.append(graph)

    nx.draw(graph, with_labels=True)
    plt.show()
