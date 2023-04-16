#CREATING A STREET NETWORK GRAPH'''
import osmnx as ox
import networkx as nx
import time
from heapq import heappush, heappop

from geopy.distance import distance as geopy_distance

def dijkstra(G, start, end):
    # 
    distances = {node: float('inf') for node in G.nodes}
    visited = {node: False for node in G.nodes}
    distances[start] = 0

    # 
    heap = []
    heappush(heap, (distances[start], start))

    # 
    while heap:
        # 
        current_distance, current_node = heappop(heap)

        # 
        if current_node == end:
            path = []
            while current_node != start:
                path.append(current_node)
                current_node = visited[current_node]
            path.append(start)
            return path[::-1]

        # 
        visited[current_node] = True

        # 
        for neighbor, data in G[current_node].items():
            if not visited[neighbor]:
                # 
                if 'length' in data:
                    edge_distance = data['length']
                elif 'weight' in data:
                    edge_distance = data['weight']
                else:
                    # 
                    edge_distance = 1
                
                new_distance = distances[current_node] + edge_distance
                if new_distance < distances[neighbor]:
                    distances[neighbor] = new_distance
                    visited[neighbor] = current_node
                    start_node = G.nodes[neighbor]['y'], G.nodes[neighbor]['x']
                    end_node = G.nodes[end]['y'], G.nodes[end]['x']
                    priority = new_distance + geopy_distance(start_node, end_node).meters
                    heappush(heap, (priority, neighbor))

    # if the end node is not reachable from the start node, return None
    return None
place_name = "Vellore Institute of technology, Vellore, Tamil Nadu, India"
G = ox.graph_from_place(place_name, network_type="drive")
print(f"Number of nodes: {len(G.nodes)}")
print(f"Number of edges: {len(G.edges)}")
ox.plot_graph(G)

# Add nodes and edges to the graph here, if necessary

# Get the list of nodes in the graph
node_list = list(G.nodes)

# Print the list of nodes
print("List of nodes in the graph:")
print(node_list)
###################################
#finding the nodes that have a path to target node
source_node = 1034973038
target_node = 1034973049

# Find the shortest path between the source and target nodes
path = nx.shortest_path(G, source=source_node, target=target_node)

# Create a set of all nodes in the path
node_set = set(path)

# Loop through all nodes in the graph and check if a path exists to the target node
node_list = []
for node in G.nodes:
    if nx.has_path(G, node, target_node):
        node_list.append(node)

# Print the list of nodes for which a path exists

print("Nodes for which a path exists to the target node:")
print(node_list)
##############################################3
##Finding nodes for which subgraph can be drawn
# Add nodes and edges to the graph here, if necessary

# Get the list of nodes in the graph
node_list = list(G.nodes)

# Initialize a list to store the nodes for which a subgraph can be drawn
subgraph_nodes = []

# Loop through all nodes in the graph
for node in node_list:
    # Create a set of all nodes in the graph
    all_nodes = set(node_list)
    # Remove the current node from the set of all nodes
    all_nodes.remove(node)
    # Loop through all other nodes in the set of all nodes
    for other_node in all_nodes:
        # Check if a path exists between the current node and the other node
        if not nx.has_path(G, node, other_node):
            # If no path exists, break out of the loop
            break
    else:
        # If a path exists to every other node, add the current node to the list of subgraph nodes
        subgraph_nodes.append(node)

# Print the list of nodes for which a subgraph can be drawn
print("Nodes for which a subgraph can be drawn:")
print(subgraph_nodes)
####################################33
##getting subgraph 
node_ids = [1034973049, 1034973049, 1035470407, 1035470403, 1034973040] #when vit

# extract the subgraph containing only these 5 nodes
subgraph = G.subgraph(node_ids)

# plot the subgraph
ox.plot_graph(subgraph)