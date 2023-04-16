import random
import heapq
import networkx as nx
import matplotlib.pyplot as plt

# Define the A* algorithm
def astar(graph, start, goal):
    frontier = []
    heapq.heappush(frontier, (0, start))
    visited = set()
    came_from = {}
    cost_so_far = {}
    came_from[start] = None
    cost_so_far[start] = 0

    while frontier:
        current = heapq.heappop(frontier)[1]

        if current == goal:
            break

        visited.add(current)

        for next_node in graph[current]:
            new_cost = cost_so_far[current] + graph[current][next_node]['weight']
            if next_node not in cost_so_far or new_cost < cost_so_far[next_node]:
                cost_so_far[next_node] = new_cost
                priority = new_cost + heuristic(goal, next_node)
                heapq.heappush(frontier, (priority, next_node))
                came_from[next_node] = current

    return came_from, cost_so_far

# Define the heuristic function
def heuristic(goal, next_node):
    return random.uniform(0, 1)

# Generate 6 random graphs with nodes, edges, and weights
graphs = []
for i in range(6):
    graph = nx.gnm_random_graph(10, 15)
    for (u, v) in graph.edges():
        graph.edges[u, v]['weight'] = random.randint(1, 10)
    graphs.append(graph)

# Calculate the shortest path using the A* algorithm for each graph
shortest_paths = []
for graph in graphs:
    start = random.choice(list(graph.nodes()))
    goal = random.choice(list(graph.nodes()))
    came_from, cost_so_far = astar(nx.to_dict_of_dicts(graph), start, goal)
    path = nx.reconstruct_path(start, goal, came_from)
    if path is not None and goal in path:
        shortest_paths.append(path)

# Display the original graph and the graph with the calculated route side by side
fig, axs = plt.subplots(len(shortest_paths), 2, figsize=(10, 20))
for i, path in enumerate(shortest_paths):
    nx.draw(graphs[i], with_labels=True, ax=axs[i][0])
    nx.draw(graphs[i], with_labels=True, ax=axs[i][1])
    nx.draw_networkx_edges(graphs[i], nx.path_graph(path), ax=axs[i][1], edge_color='r', width=3)
plt.show()






