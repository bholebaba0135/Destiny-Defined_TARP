import osmnx as ox
import random

# define your place(s) of interest here
place_names = ["Vellore, Tamil Nadu, India", "Karnal, Haryana, India", "Patna, Bihar, India"]

# define the number of graphs to generate
num_graphs = 5

for place_name in place_names:
    # download the street network for the places of interest
    G = ox.graph_from_place(place_name, network_type="drive")

    for i in range(num_graphs):
        # randomly choose a number of nodes between 7 and 21
        num_nodes = random.randint(60, 360)

        # randomly select nodes from the graph
        nodes = random.sample(list(G.nodes), num_nodes)

        # create a subgraph of the selected nodes
        subgraph = G.subgraph(nodes)

        # do some processing on the subgraph here, if necessary
        # ...

        # plot the subgraph
        print(list(G.nodes))
        print(place_name)
        ox.plot_graph(subgraph)