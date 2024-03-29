# Destiny-Defined_TARP

### Project Title 

###### OptiRoute: Multi-Destination Most Optimal Route Planning using A* Algorithm

### Index

1.  [SCOPE](#SCOPE)
2. [Motivation](#Motivation)
3. [Development Model](#Development_Model)
4. [Roles and Responsibilities](#Roles_and_Responsibilities)
5. [Work Breakdown Structure](#Activity_based_Work_Breakdown_Structure )
6. [Novelty](#Novelty)
7.  [Literature Survey](#Literature_Survey)
8. [Algorithms](#Algorithms)
9. [Methodology](#Methodology) 
10. [Requirement](#Requirements)
11. [Result and Discussion](#Result_and_Discussion)
12. [Video Demonstration](#Video_Demonstration)
13. [Conclusion](#Conclusion)
14.  [Workflow](#Workflow) 
	    1. [Accessing the Project](#Accessing_the_project) 
	    2. [Contributing to the Project](#Contributing_to_the_project) 
	    3. [Zotero Integration with Obsidian](#Zotero_Integration_with_Obsidian)
15. [Appendix](#Appendix)
	1. [Activity Flow Diagram](#FlowChart)
	2. [Gantt Chart](#Gantt_Chart)
16. [References](#References)
	1. [Scholarly References](#Scholarly_References)
	2. [Web References](#Web_References)
	3. [Learning Resources](#Learning_Resources)
 


### SCOPE

The project focuses on developing a multi-destination route planner using the A* algorithm to calculate the most optimal path between multiple destinations. The route planner will be designed to consider various factors such as distance, travel time, traffic congestion, speed limits, and road conditions to provide the most efficient route. The project aims to develop a user-friendly interface for the route planner that allows users to input their desired destinations, start and end locations, and other relevant parameters. The end product would work with real-world data sources such as maps, GPS data, and traffic data to provide accurate and up-to-date information. The project does not focus on the development of the A* algorithm itself but rather on its implementation in a multi-destination route planning context. It does not cover the development of mobile applications or other specific software platforms but rather focuses on the design and development of the algorithm and its implementation in a web-based interface.

### Motivation 

1. Limitations of existing multi-destination route planners: Current route planners often rely on heuristic-based algorithms, such as Dijkstra’s or uniform-cost search, which may not always provide the most optimal solution. These algorithms are often unable to handle the complexities of multi-destination route planning, which may require consideration of time, distance, and multiple constraints.
2. Advantages of A* algorithm: A* is a popular algorithm in pathfinding problems and has several advantages over other algorithms. A* combines the advantages of heuristic-based algorithms with the accuracy of systematic algorithms to provide an optimal solution. A* is particularly useful in situations where time and space are constrained, such as in real-time applications.
3. The need for efficient and effective multi-destination route planning: The ability to plan and optimize routes between multiple destinations is essential for several real-life scenarios, such as business trips, delivery services, and emergency response services. The lack of efficient and accurate route planning tools can result in wasted time, resources, and increased costs.
4. The importance of customization: OptiRoute aims to provide users with a customized and personalized route plan, taking into account their preferences, constraints, and travel requirements. This level of customization is not currently available in most multi-destination route planners.
5. Potential Impact: OptiRoute has the potential to improve the efficiency and accuracy of multidestination route planning, resulting in reduced travel time, costs, and carbon emissions. The application of the A* algorithm in multi-destination route planning is a relatively new area of research, and OptiRoute contributes to this field by exploring the strengths and limitations of this approach.

### Development_Model

Iterative Waterfall<br><br>
In this process model, the development process is divided into several phases such as requirement gathering, design, coding, testing and deployment.
Each phase is executed only when the previous phase is completed, so it is a step by step process without parallelism.
It is suitable for small scale projects with low risks, when quality is preferred over cost and requirements are well-known upfront.
The iterative nature provides for error correction at the end of each phase leading to less errors in the final testing phase.

### Roles_and_Responsibilities

1. User Interface Design and Development
	1.  Designing the user interface for the route planner using HTML, CSS, and JavaScript. This includes designing the layout, creating interactive features such as input forms and maps, and ensuring the user interface is intuitive and user-friendly. Milestones include:
		1. Designing the layout and basic functionality of the user interface 
		2. Creating interactive features such as input forms and maps 
		3. Incorporating feedback from user testing and improving the user interface 
       
	2. Implementing the user interface using a front-end framework. This includes writing code to create the interactive features, integrating the user interface with the routing algorithm, and ensuring the user interface is responsive and accessible. Milestones include:
		1. Implementing the user interface using a front-end framework 
		2. Integrating the user interface with the routing algorithm 
		3. Ensuring the user interface is responsive and accessible by conducting user testing and making necessary improvements 
       

2. Synchronizing search request to open source Map Data and Data Processing

	1. Downloading and processing OpenStreetMap data using OSMnx and NetworkX. This includes downloading the relevant data for the area of interest, creating a street network graph using OSMnx and NetworkX, and identifying any missing or incorrect data that needs to be corrected. Milestones include:
		1. Downloading and processing the relevant OpenStreetMap data 
		2. Identifying any missing or incorrect data and creating a plan to correct it 
		3. Creating a street network graph that accurately represents the road network and intersections.
       
	2. Cleaning and preparing the data for use in the route planner using tools such as GeoPandas and PostgreSQL/PostGIS. This includes removing any duplicate or irrelevant data, converting the data into a format that can be easily used by the routing algorithm, and storing the data in a database using PostgreSQL/PostGIS. Milestones include:
		1. Cleaning and preparing the OpenStreetMap data 
		2. Storing the cleaned data in a PostgreSQL/PostGIS database 
		3. Creating a plan for maintaining and updating the database throughout the project.
	

3. Routing Algorithm Development

	1. Implementing and optimizing the routing algorithm using PyrouteLib. This includes writing code to calculate the shortest path between multiple destinations, optimizing the algorithm for efficiency, and incorporating factors such as traffic conditions or user preferences. Milestones include:
		1. Implementing a basic routing algorithm 
		2. Optimizing the algorithm for efficiency and accuracy 
		3. Incorporating additional factors such as traffic conditions or user preferences 
       
	2. Testing and validating the routing algorithm to ensure accuracy and efficiency. This includes designing test cases to ensure the algorithm produces correct results, identifying and resolving any bugs or issues, and validating the algorithm against real-world data. Milestones include:
		1. Designing and executing test cases to ensure the algorithm produces correct results 
		2. Identifying and resolving any bugs or issues 
		3. Validating the algorithm against real-world data 

4. Highlighting the calculated route on GMaps

	1. Designing and developing the interactive map interface that displays the calculated route. This includes selecting a suitable mapping library, integrating it with the routing algorithm, and adding features such as zoom and pan controls, street view, and location search. Milestones include:
		1. Researching and selecting a mapping library 
		2. Integrating the mapping library with the routing algorithm and implementing basic map features 
		3. Adding advanced map features and refining the user interface based on feedback from user testing 
       
	2. Implementing the algorithm that highlights the calculated route on the map. This includes converting the routing algorithm output to a format that is compatible with the mapping library, and using it to draw the route on the map. Milestones include:
		1. Researching the format required by the mapping library and developing a converter 
		2. Integrating the converter with the routing algorithm and implementing the route drawing feature 
		3. Refining the route drawing feature based on feedback from user testing 

5. <i><b>Note:</b> Visit [here](#Workflow) to checkout the workflow</i>

### Activity_based_Work_Breakdown_Structure 

```mermaid
graph TD
id1[OptiRoute] --> id2[1. Planning<br>&<br>Modelling]
id1 --> id3[2. Construction/Coding]
id1 --> id4[3. Integration<br>and<br>Testing]
id1 --> id5[4. Deployment]
```

```mermaid
graph TD
id2[1. Planning & Modelling] --> id2a[1.1 literature Survey]
id2a --> id2a1[1.1.a Determination of<br>Suitable Algorithm]
id2 --> id2b[1.2 Feasibility analysis]
id2b --> id2b1[1.2.a Regular consutations<br>from<br>Manoov Sir]
id2b --> id2b2[1.2.b Feedback<br>from<br>IT specialists]
id2 --> id2c[1.3 Identification<br>of<br>Modules]
id2c --> id2c1[1.3.a updation<br>of<br>module list]
```

```mermaid
graph TD
id3[2. Construction/Coding] --> id3a[2.1 Dynamic web/app Interface]
id3a --> id3a1[2.1.a GET<br>no. of destinations]
id3a --> id3a2[2.1.b RETURN<br>relavant no. of dropdowns]
id3a --> id3a3[2.1.c Get<br>destinations]
id3a --> id3a4[2.1.d Highlight<br>destination nodes]
id3 --> id3b[2.2 Synchronizing<br>search request<br>to<br>Open Source Map Data]
id3b --> id3b1[2.2.a Determine coordinates of each node]
id3b --> id3b2[2.2.b Construct distance matrix]
id3 --> id3c[2.3 Determination<br>of<br>Most Optimal Path]
id3 --> id3d[2.4 Higlight<br>the<br>calculated path<br>on<br>map routes]
```


```mermaid
graph TD
id4[3. Integration and Unit Testing] --> id4a[3.1 API integration]
id4a --> id4a1[3.1.a OSM API Integration]
id4a --> id4a2[3.1.b Nominatim API Integration]
id4a --> id4a3[3.1.c PgRouting API Integration]
id4 --> id4b[3.2 Unit Testing]
id4b --> id4b1[3.2.a Interface Unit Testing]
id4b --> id4b2[3.2.b Checking<br>for<br>the accuracy of data<br>in<br>distance matrix]
id4b --> id4b3[3.2.c CHecking<br>if<br>implementation of algorithm<br>is<br>correct]
id4b --> id4b4[3.2.d Checking<br>if<br>caclulated route<br>is<br>highlighted correctly<br>on<br>Map]
```


```mermaid
graph TD
id5[4. Deployment] --> id5a[4.1 Selecting suitable deployment platform]
id5 -->id5b[4.2 Configuring environment variables]
```

### Novelty

We make use of A* algorithm for route planning between the destination nodes. The A* algorithm is a type of informed search algorithm that combines the advantages of both uniform-cost search (like Dijkstra's algorithm) and greedy best-first search. It evaluates nodes based on a combination of the cost of reaching that node from the starting node and an estimate of the cost of reaching the goal node from that node. The estimate of the cost is usually calculated using a heuristic function that takes into account factors such as distance, time, and other relevant constraints.

One of the main advantages of the A* algorithm is that it is guaranteed to find the shortest path between the starting node and the goal node, as long as the heuristic function used is admissible, meaning that it never overestimates the actual cost of reaching the goal node. This property makes it ideal for solving the multi-destination most optimal driving route planning problem, where the goal is to find the shortest path that passes through multiple destinations.

The A* algorithm can be modified to handle the multi-destination route planning problem by using a variant called the A* search with multiple goals (AMG). In this variant, the algorithm maintains a set of goal nodes and computes the optimal path to each goal node sequentially. This allows the algorithm to find the most optimal route that visits all the goals, while still taking into account other factors such as traffic, road conditions, and time constraints.

Another advantage of the A* algorithm is its ability to incorporate additional constraints and heuristics into the search process. For example, the algorithm can be modified to incorporate real-time traffic data, road closures, or other relevant information, which can help to generate more accurate and relevant routes for the users. This flexibility makes the A* algorithm well-suited for route planning in dynamic and complex environments.

### Literature_Survey

|  Title  |  Author  |  Algorithm and dataset  |  Important Findings  |  Limitations  |  References  |
| --- | --- | --- | --- | --- | --- |
| A Development of Travel Itinerary Planning Application using Traveling Salesman Problem and K-Means Clustering Approach |  Septia Rani, Kartika Nur Kholidah, Sheila Nurul Huda | The development of a travel itinerary planning application using the Traveling Salesman Problem (TSP) and K-Means Clustering approach involves the use of algorithms to generate the most efficient travel route for a given set of destinations. The dataset used in this application would consist of a list of destinations, their respective locations (latitude and longitude), and other relevant information such as opening hours, admission fees, and ratings. | The application allows users to create personalized travel plans based on their preferences and interests. This helps in creating a unique travel experience for each user, and also provides real-time updates on travel routes and destination recommendations based on user feedback. This helps in creating a flexible travel plan that can be adjusted based on user preferences. | The limitations are Computational Complexity, Lack of Flexibility and Inaccurate Recommendations. | Hsu, F. C. and Chen, P. 2000. Interactive genetic algorithms for a travel itinerary planning problem. TSP, 1, 13. and Russell, S. and Norvig, P. 1995. Artificial Intelligence A Modern Approach. Prentice-Hall, Egnlewood Cliffs, 25, 27. [[doi link]](https://doi.org/10.1145/3185089.3185142) |
| An efficient multi-destinations trip planning protocol for intelligent transport system | Hisham Siam and Maram Bani Younes | The technology of Intelligent Transport System (ITS) helped them to introduce protocols that serve drivers during their trips in a real-time fashion. A global optimal path-planning algorithm that uses real-time traffic information. This algorithm uses a hybrid technology of vehicular network and enhanced ITS to analyze the traffic and recommend the best path for drivers. | The metrics depend on the time each vehicle spends driving on the streets. Because of this, they have assumed that drivers do not spend anytime at any destination, then we have also assumed the entire trip starts and ends during the same period of time. | The limitations are insufficient data, computational complexity and traffic conditions. | Collins K, Muntean G-M. A vehicle route management solution enabled by wireless vehicular networks. In: IEEE INFOCOM Workshops;2008; Calgary, BC, Canada:1-6. and Bani Younes M, Boukerche A, Roman-Alonso G. An intelligent path recommendation protocol (ICOD) for VANETs. Comput Netw. 2014;64(8):225-242 [[doi link]](https://doi.org/10.1002/jnm.2548) |
| Multi-Destination Vehicular Route Planning with Parking and Traffic Constraints | Abeer et al. (2019) | The algorithm uses a clustering phase and a graph search phase. In the clustering phase, the algorithm groups destinations that are close to each other to reduce the search space. In the graph search phase, the algorithm uses a modified version of the A* algorithm to find the optimal path between the clusters while taking into account parking and traffic constraints . The article uses real world traffic data and synthetic parking data | The proposed algorithm was evaluated and compared with Nearest Neighbour algorithm and the Traveling Salesman Problem algorithm. The simulations show that the proposed algorithm outperforms the other algorithms in terms of both route quality and computation time. | The limitations are Limited Parking Availability , Fixed Traffic Conditions , Incomplete Data , Computational Complexity | Hakeem, A., Gehani, N., Ding, X., Curtmola, R., & Borcea, C. (2019, November). Multi-destination vehicular route planning with parking and traffic constraints. In _Proceedings of the 16th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services_ (pp. 298-307). [[doi link]](https://doi.org/10.1145/3360774.3360824) |
| Multi-Destinations Round Trip Planner Protocol | Hisham Siam , Maram Bani Younes | This paper presents a real- time multi-destinations round trip planner protocol. The proposed protocol considers the relative locations of the targeted destinations and the traffic characteristics over the road network.  This protocol uses the location of each destination on the downtown area and the predicted and real-time traffic characteristics there. The traffic characteristics of each road segment are provided to our protocol using the GPS satellites. | All of the previous research studies have recommended  the path towards a certain destination. None of them have presented a full path towards multiple destinations. In this a path planning protocol that intends to find the best sequence of visiting set of destinations and recommends the best path between each two successive ones. All candidate paths (sequences) of visiting these destinations are explored. After that, the shortest road distance and the shortest estimated traveling time are computed between each two targeted destinations in that trip. | The limitations are computational complexity, incomplete data of traffic characteristics of road segment and delay in real time traffic distribution data. | Siam, H., & Younes, M. B. (2018, October). Multi-Destinations Round Trip Planner Protocol. In _2018 Fifth International Symposium on Innovation in Information and Communication Technology (ISIICT)_ (pp. 1-5). IEEE. [[doi link]](https://doi.org/10.1109/ISIICT.2018.8613719) |
| Multimodal Public Transit Trip Planner with Real-Time Transit Data | Nilesh et al.(2013)  | The Algorithms used are Dijkstra's algorithm: to find the shortest path between two points in a graph , A* algorithm: to optimize the search for the shortest path by using a heuristic function that estimates the distance to the goal , Floyd-Warshall algorithm: to find the shortest paths between all pairs of nodes in a weighted graph , K-means clustering algorithm: to group similar transit stations based on their geographic proximity. It uses real-time transit data to provide optimal routes for users. | The proposed system was effective in providing optimal multimodal transit routes to users, taking into account real-time transit data and user preferences and constraints. The system was able to generate routes that were both efficient and convenient, taking into account factors such as travel time, cost, and transfer times. The use of real-time transit data was crucial in ensuring the accuracy of the system's recommendations, as it allowed the system to account for unexpected events such as delays or cancellations. | The limitations include limited coverage of real-time transit data,  limited consideration of user preferences and constraints ,  Difficulty in accounting for user behaviour  and complexity of the system.  | Borole, N., Rout, D., Goel, N., Vedagiri, P., & Mathew, T. V. (2013). Multimodal public transit trip planner with real-time transit data. _Procedia-Social and Behavioral Sciences_, _104_, 775-784. [[doi link]](https://doi.org/10.1016/j.sbspro.2013.11.172) | 
| A multi-objective time-dependent route planner: a real world application to Milano city| Maurizio Bruglieri, Alberto Colorni, Federico Lia, Alessandro Luè | Such a problem is solved with a map matching algorithm inspired by Quddus et al.The algorithm is based on a Pareto optimization approach and takes into account multiple objectives, such as travel time, distance, and environmental impact.<br>The dataset used in the paper is a real-world dataset of road network and traffic conditions in Milan, Italy.| The algorithm is based on a combination of Dijkstra's algorithm and the Pareto dominance principle, and is able to generate routes that minimize travel time, CO2 emissions, and noise pollution simultaneously. | Limited validation,specific geographic area,Lack of consideration for real-time traffic information,Limited optimization criteria,Limited consideration for user preferences  | Bruglieri, M., Colorni, A., Lia, F., & Luè, A. (2014). A multi-objective time-dependent route planner: A real world application to Milano city. Transportation Research Procedia, 3, 460-469. [[doi link]](https://doi.org/10.1016/j.trpro.2014.10.027)|
| RouteMe: A Mobile Recommender System for Personalized, Multi-Modal Route Planning | Daniel Herzog Hesham Massoud Wolfgang Wornd| They implemented CCO as a CF algorithm to identify routes recommended by other users in the system.Correlated Cross-Occurrence (CCO) is a CF algorithm based on the open source, scalable machine-learning libraries Apache Mahout and Apache Spark.<br> Dataset - The paper does not mention any specific dataset used for the experiments.Instead, the authors state that they collected data from real users through a mobile app that implements the proposed algorithm. | personalized, multi-modal route planning. The system utilizes a hybrid collaborative filtering approach, combining both user-based and item-based collaborative filtering, to recommend personalized routes to users. | Limited coverage,Data accuracy,User preferences,Computational complexity etc  | Herzog, D., Massoud, H., & Wörndl, W. (2017, July). Routeme: A mobile recommender system for personalized, multi-modal route planning. In Proceedings of the 25th Conference on User Modeling, Adaptation and Personalization (pp. 67-75). [[doi link]](https://doi.org/10.1145/3079628.3079680) | 
| Designing a route planner to facilitate and promote cycling in Metro Vancouver,Canada | Jason G. Su,Meghan Winters,Melissa Nunes,Michael Brauer | Optimal route selection algorithm.the route planner required an efficient route selection algorithm. One of the oldest and most widely used approaches in network optimization is shortest path analysis (SPA),(Dijkstra;Dantzig;Floyd).<br>The dataset used in the study included road network data, elevation data, and transit schedules | important finding of this paper is that the cycling route planner developed for Metro Vancouver was able to successfully incorporate variables that influence cycling behavior and preferences. | The study did not evaluate the impact of the route planner on increasing cycling rates in the city,The planner is only applicable to Metro Vancouver and may not be easily transferable to other cities with different topographies,infrastructures, and cycling cultures  | Su, J. G., Winters, M., Nunes, M., & Brauer, M. (2010). Designing a route planner to facilitate and promote cycling in Metro Vancouver, Canada. Transportation research part A: policy and practice, 44(7), 495-505. [[doi link]](https://doi.org/10.1016/j.tra.2010.03.015) |
| Personalized Route Planning in Road Networks | Stefan Funke and Sabine Storandt |  Author develop k-PC(k-pruning algo) that are used to reduce sets in an optimality preserving way <br>Dataset we can thereby decrease the space consumption of the auxiliary data thai is  road network dataset from OpenStreetMap (OSM). | The use of personalized route planning can lead to more efficient and satisfying travel experiences for users, as it takes into account their individual preferences and constraints. | The proposed method does not consider real-time traffic conditions, which may affect the actual travel time and route selection. | Funke, S., & Storandt, S. (2015, November). Personalized route planning in road networks. In Proceedings of the 23rd SIGSPATIAL International Conference on Advances in Geographic Information Systems (pp. 1-10). [[doi link]](https://doi.org/10.1145/2820783.2820830) |
| Artificial Intelligence Aided Recommendation Based Mobile Trip Planner For Eskisehir City | Ahmet Aydin, Sedat Telceken | Algo:Optimal Route Planner Algo <br> Dataset Google Maps’ geocoding services convert user entries into latitude and longitude coordinates in sql | Proposed system uses artificial intelligence algorithms such as A* and Ant Colony Optimization to calculate the best route for the traveler based on their current GPS location and preferences. The system also offers recommendations to the traveler and allows them to re-plan their route interactively. | The system only considers the user's current location and preferences to plan the trip, but it does not take into account other external factors such as weather conditions, traffic, and events happening in the city. | Aydin, A., & Telceken, S. (2015, June). Artificial intelligence aided recommendation based mobile trip planner for Eskisehir city. In 2015 IEEE 10th Conference on Industrial Electronics and Applications (ICIEA) (pp. 1650-1654). IEEE. [[doi link]](https://doi.org/10.1109/ICIEA.2015.7334374 |
| Participatory Route Planning | David Wilkie, Cenk Baykal, Ming C. Lin | The A* algorithm from to compute an optimal route with respect to the cost metric between start node s and goal node g at time t0.<br> Live traffic data can be collected by loop-detectors, cameras, toll port data, and cell phone localization | The paper presents a suitable approach for realistic, city-scale scenarios, a prototype system to demonstrate feasibility, and experiments using a state-of-the-art microscopic traffic simulator | The approach's implementation requires significant technological infrastructure and development, which may be costly and difficult to deploy on a large scale. | Wilkie, D., Baykal, C., & Lin, M. C. (2014, November). Participatory route planning. In Proceedings of the 22nd ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems (pp. 213-222). [[doi link]](https://doi.org/10.1145/2666310.2666406) |
|Route recommendation system to support multiple destinations and multiple routes to minimise road congestion |Chayanon Sub-r-pa, Goutam Chakraborty, Bhabani P. Sinha|The algorithm selects n-best routes and assigns a car to one of them based on calculated probabilities. It calculates trial routes using Yen's algorithm and distributes cars based on probability values. Finally, it generates a random number to choose a route. For the road network, a part of the map affected by tsunami after the great Earthquake in North Japan on 11 March 2011 is used. |The proposed MDMR road navigation algorithm can find multiple near-optimal routes to target destinations, eliminate routes with multiple destination points, and distribute vehicles to prevent traffic congestion. The simulations results using real map data from Miyako, Japan, confirm that distributing traffic along multiple routes can significantly increase the number of vehicles arrived at safe destinations and reduce evacuation time.|The assumption of fixed update intervals and virtual link cost as zero are limitations, and the future work will incorporate dynamic route update intervals and modifications to accommodate traffic flowing into destinations.| Sub-r-pa, C., Chakraborty, G., & Sinha, B. P. (2017). Route recommendation system to support multiple destinations and multiple routes to minimise road congestion. International Journal of Communication Networks and Distributed Systems, 19(4), 465-481. [[doi link]](https://doi.org/10.1504/IJCNDS.2017.087391) |
|Xhare-a-Ride: A Search Optimized Dynamic Ride Sharing System with Approximation Guarantee |Raja Subramaniam Thangaraj, Koyel Mukherjee, Gurulingesh Raravi, Asmita Metrewar, Narendra Annamaneni and Koushik Chattopadhyay |This research extracted 350,000 taxi journeys from publicly available New York City taxi travel data on a random day. They explain how they created ride sharing data from the dataset's taxi travels. All NY taxi journeys are simulated as ride requests for XAR evaluation. If numerous rides match a request, the algorithm chooses the one with the shortest walking distance. If no matching rides are located, a 4-person taxi is constructed.|Experimental evaluations show that XAR outperforms the state-of-the-art system T-Share in the ride search operation, making it a highly scalable and search-optimized system. This is crucial for integrating with MMTP, which has a high look-to-book ratio. XAR also provides an environment-friendly transport option when combined with public transport, resulting in fewer vehicles on the road.|Taxi is fastest, however it is not eco-friendly and worsens traffic. Public transportation emits less but performs poorly. Ride sharing reduces car use by 64% with only a 30% increase in journey time, balancing quality and eco-friendliness. Ride sharing reduces walking time by 56%, travel time by 30%, and cars needed by approximately 50%.| Thangaraj, R. S., Mukherjee, K., Raravi, G., Metrewar, A., Annamaneni, N., & Chattopadhyay, K. (2017, April). Xhare-a-ride: A search optimized dynamic ride sharing system with approximation guarantee. In 2017 IEEE 33rd International Conference on Data Engineering (ICDE) (pp. 1117-1128). IEEE. [[doi link]](https://doi.org/10.1109/ICDE.2017.156) |
|Parallel Hyper-Heuristic Algorithm for Multi-Objective Route Planning in a Smart City |Yuan Yao, Zhe Peng, Bin Xiao|The research provides a multi-objective hyper-heuristic (MOHH) framework for smart city walking route planning. The system comprises low-level heuristics for route generation and a reinforcement learning mechanism for picking excellent heuristics to speed up search. In a general-purpose graphics processing unit, RL-MOHH and RL-PMOHH are implemented. This study collected a lot of New York City cross-domain urban data. Urban map, housing rent and density, population, police stations, POIs, crime records, and taxi trajectories were added.|The application offers three route options to the user: the shortest route, the safest route, and a trade-off route based on the user's preference. By default, the trade-off route is determined by a weight vector of 0.4 for distance and 0.6 for safety, but the user can adjust the vector before planning. As the risk of crime increases later in the day, the application can update the safety index of the map and help users avoid high-risk roads by suggesting alternate routes.|The paper notes that the MOHH/PMOHH frameworks still require a significant amount of time to train the utilities of the low-level heuristics. They plan to implement a more efficient online learning algorithm in future work to improve the continuous learning ability of MOHH/PMOHH.| Yao, Y., Peng, Z., & Xiao, B. (2018). Parallel hyper-heuristic algorithm for multi-objective route planning in a smart city. IEEE Transactions on Vehicular Technology, 67(11), 10307-10318. [[doi link]](https://doi.org/10.1109/TVT.2018.2868942) |
| Route planning for blind pedestrians using OpenStreetMap | Achituv Cohen and Sagi Dalyot |The workflow to create a weighted network graph was generated by utilizing ESRI’s ArcGIS ModelBuilder and Python scripts .Similar to the existing route optimization research for disabled people, the Dijkstra algorithm was used. OSM map data are converted into ArcGIS Feature Class (FC) objects. Features intended for pedestrians walking having the value key “highway” form the GraphWays .Road features that must be avoided by blind pedestrians are stored in a different FC, used to calculate added costs and restriction intersections, and are presented as restriction network lines on the network graph. some streets on the OSM map, which are navigational, are displayed as polygons. To amend the polygon elements to linear ones that are later added to the network, we developed a skeleton algorithm using a Thiessen polygon structure, and geometric and topologic rules. | This study presented a methodology that uses OSM data, as well as designing a tailored set of criteria, for generating optimal walking routes for blind pedestrians. Focus is placed on generating routes that are safe and easy to navigate. Qualitative evaluations showed how  developed system and algorithm tend to select a safer and easier route to navigate, preferring more accessible paths while avoiding dangerous locations.| OSM has some shortcomings, mainly in terms of data quality ( accuracy and topological errors) and completeness. | Cohen, A., & Dalyot, S. (2021). Route planning for blind pedestrians using OpenStreetMap. Environment and Planning B: Urban Analytics and City Science, 48(6), 1511-1526. [[doi link]](https://journals.sagepub.com/doi/pdf/10.1177/2399808320933907) |
| Handling OpenStreetMap georeferenced data for route planning | Soraia Fel´ıcioa, Joana Horaa, Marta Campos Ferreiraa, Diogo Abrantesb, Paulo Dias Costab, Camila Dangeloa, Jorge Silvad, Teresa Galvao |The algorithm used here is the A-star algorithm to determine the route, which applies a best-first search to find the optimal path from the source vertex to the target. The formulation is made in terms of weighted graphs, considering a specified cost for each edge. This algorithm keeps a tree of paths from the source vertex, which is extended one edge at a time until its termination criterion is satisfied. In each iteration, the A-star algorithm chooses which path to extend. A-star ends the iterative process when the path it chooses to extend is a path from the source vertex to the target or when there are no paths eligible to be extended. | This study makes a contribution by improving the OSM data model by including a multi-criteria dimension for route planning, as well as by supporting the process of dealing with geographical data and routing algorithms.| Effectiveness of the A* algorithm are heavily dependent on the quality of the heuristic function used to estimate the distance between the current node and the goal node. If the heuristic function is not well-designed, the algorithm may not find the optimal path, or it may take longer to converge. | Felício, S., Hora, J., Ferreira, M. C., Abrantes, D., Costa, P. D., Dangelo, C., ... & Galvão, T. (2022). Handling OpenStreetMap georeferenced data for route planning. Transportation Research Procedia, 62, 189-196. [[doi link]](https://doi.org/10.1016/j.trpro.2022.02.024) |
| Real-Time Routing with OpenStreetMap data | Dennis Luxen, Christian Vetter | First, the geometry is generalized according to the zoom level using a heuristic variant of the classic Douglas-Peucker algorithm that can be implemented to run in O(n log n) time . Second, a string of longitude and latitude coordinate pairs is highly compressible. We implement the Google Maps Encoded Polyline Algorithm Format which is simple and offers great compression rate. | They show how to use OSM data with both a server-based approach and a handheld device.These programmes offer precise and real-time shortest path computation on networks the size of continents with millions of street segments. In-depth real-time capabilities like draggable routes and round-trip planning are also shown. | The greatest limitation of handheld devices comes from a limited I/O bandwidth to the flash memory.| Luxen, D., & Vetter, C. (2011, November). Real-time routing with OpenStreetMap data. In Proceedings of the 19th ACM SIGSPATIAL international conference on advances in geographic information systems (pp. 513-516). [doi link]](https://doi.org/10.1145/2093973.2094062) |
| A Multimodal Trip Planning System Incorporating the Park-and-Ride Mode and Real-time Traffic/Transit Information | Jing-Quan Li, Kun Zhou, Liping Zhang, and Wei-Bin Zhang | Algorithms: Dijkstra's Algorithm , A* Algorithm , Genetic Algorithm  Dataset : OpenStreetMap , GTFS (General Transit Feed Specification) ,Real-time Traffic Data | Locations of parking facilities, including the number of available parking spots and the cost of parking.Real-time transit schedule and delay information, including the location of transit stops and stations. Real-time traffic information, including current road conditions and any disruptions or delays.User preferences, including the origin and destination of the trip and the preferred mode of transportation. | 1)Limited coverage: The system may have limited coverage of the transit and traffic information, which may result in incomplete trip planning information for certain areas. 2) Data accuracy: The accuracy of the real-time traffic/transit information used by the system can be affected by various factors, such as network connectivity issues and technical glitches. Inaccurate data may result in suboptimal trip planning suggestions 3) User behavior: The effectiveness of the system is dependent on user behavior, such as the willingness of users to use the park-and-ride mode and follow the suggested travel routes. If users deviate from the suggested routes, the system's effectiveness may be reduced. 4) Data privacy and security: The system relies on real-time traffic/transit information, which may raise concerns regarding data privacy and security. The collection and use of user data must be transparent and comply with relevant laws and regulations. | Li, J. Q., Zhou, K., Zhang, L., & Zhang, W. B. (2010, October). A multimodal trip planning system incorporating the park-and-ride mode and real-time traffic/transit information. In Proceedings ITS World Congress (Vol. 25, pp. 65-76). [[doi link]](https://www.researchgate.net/profile/Wei-Bin-Zhang-2/publication/228994822_A_Multimodal_Trip_Planning_System_Incorporating_the_Park-and-Ride_Mode_and_Real-time_TrafficTransit_Information/links/0c96052df621a09761000000/A-Multimodal-Trip-Planning-System-Incorporating-the-Park-and-Ride-Mode-and-Real-time-Traffic-Transit-Information.pdf) |
| A Multi-Modal and Multi-Objective Journey Planner for Integrating Carpooling and Public Transport | Jafar Jamal, Roberto Montemanni, David Huber, Marco Derboni, and Andrea E. Rizzoli | 1)Algorithm for Multi-Modal Route Planning. 2) Support Vector Machines (SVM) 3) Logistic Regression Dataset : 1)Multi-modal network graph for a small city, including bus stops, train stations, and bike rental locations, with schedules and routes for each mode of transportation. 2)Real-time feed for carpooling services, including information about available seats, cancellations, delays, and updated routes. 3) Map data with road network, including speed limits, traffic data, and estimated travel times. 4)Data on user preferences and constraints, such as maximum walking distance, preferred modes of transportation, and departure time constraints. 5)Historical data on traffic patterns, transportation usage, and user behavior, to improve the accuracy of the algorithm and optimize route planning. | The study proposed a multi-modal and multi-objective journey planner that integrates carpooling and public transportation. The planner optimizes for multiple objectives, including travel time, cost, and environmental impact. The proposed approach was tested on real-world data from the Swiss city of Lugano, and the results showed that the planner could reduce the total travel time and cost while also reducing the environmental impact by encouraging carpooling and the use of public transportation. The study concluded that the proposed planner could be a valuable tool for promoting sustainable and efficient transportation. | 1) Data availability: The study heavily relies on data availability from public transport and carpooling services, and the accuracy of the model is dependent on the quality and quantity of the data. 2)Generalizability: The model is developed based on data from a specific city, and it may not be generalizable to other cities with different transportation infrastructures and population densities. 3)User behavior: The model assumes that users will choose the most efficient and cost-effective transportation mode, which may not always be the case. User preferences, attitudes, and habits towards different transportation modes can significantly influence the effectiveness of the model. 4)Technical limitations: The model requires real-time data to be effective, which may not always be feasible due to technical limitations or insufficient resources. 5)Integration with existing systems: The study does not address the challenges of integrating the proposed multi-modal and multi-objective journey planner with existing public transportation and carpooling systems. Integration may require substantial resources and support from relevant stakeholders. | Jamal, J., Montemanni, R., Huber, D., Derboni, M., & Rizzoli, A. E. (2017). A multi-modal and multi-objective journey planner for integrating carpooling and public transport. Journal of Traffic and Logistics Engineering Vol, 5(2), 68-72. [[doi link]](https://www.researchgate.net/profile/Marco-Derboni/publication/322081706_A_Multi-Modal_and_Multi-Objective_Journey_Planner_for_Integrating_Carpooling_and_Public_Transport/links/5a5db4b8458515c03edf2b05/A-Multi-Modal-and-Multi-Objective-Journey-Planner-for-Integrating-Carpooling-and-Public-Transport.pdf) |

### Algorithms

##### Finding mimimum path cost using Djikstra

```python
def extract_min_vertex_from_queue(distances, queue):
dist_for_queue = {k:distances[k] for k in queue}
return [k for k,v in sorted(dist_for_queue.items(), key= lambda x: x[1])][0]
def dijkstra(M, start_node, end_node):
# initialize parameters
coordinates = M.intersections 
distances = {node: np.inf for node in M._graph.nodes()}
distances[start_node] = 0
queue = M._graph.nodes()
while queue != []:
current_node = extract_min_vertex_from_queue(distances, queue)
queue.remove(current_node)
for neighbour in M.roads[current_node]:
dist = distances[current_node] + calculate_distance(current_node, neighbour, coordinates)
if dist < distances[neighbour]:
distances[neighbour] = dist
return distances[end_node]

```

##### Uniform Cost Algorithm

We are calculating the distance between 2 locations using their coordinates by pythagoras theorom. Inputs are nodeA(int) and nodeB(int). Coordinates can be represented in the form os dictionary with (x,y) coordinates for all nodes in the graph. The function returns euclidean distance between 2 points A and B

```python
def calculate_distance(nodeA, nodeB, coordinates):
    xa,ya = coordinates[nodeA]
    xb,yb = coordinates[nodeB]
    return np.sqrt( (xa-xb)**2 + (ya-yb)**2 )
```

The function selects and return the location on the frontier having the shortest path_cost. The input here is  routes represented by the dictionary associating nodes on the frontier to a composed of a tuple (route, path length). The route is the sequence of traversed locations from start -> to frontier node. The function returns the location on the frontier having the shortest path_cost

```python
def find_nearest_frontier_node(routes):
    path_costs =  {node:routes[node][1] for node in routes}
    return [node for node,path_cost in sorted(path_costs.items(), key= lambda x: x[1])][0]

```

The function below return the shortests path between a start location and a goal location calculated with uniform cost algorithm. The inputs are M which represents a map object (Class Map), start which represents the starting node index (integer) and goal which represents the target node index (integer). The output includes a list of integers representing shortest path. It is the informative function indicating the minimum path cost using djikstra

```python
def shortest_path_Uniform_Cost_Search(M,start,goal):
    print("shortest path called")
    print('Minimum traversing distance to reach goal using Dijkstra greedy algorithm: {:.2f}'.format(dijkstra(M, start, goal)))
    coordinates = M.intersections       
    neighbours = M.roads                
    explored = set()                   
    frontier = {start:([start], 0)}     
    candidates = [] 

```

The route is the sequence of traversed locations from start -> to frontier node
- Coordinates: dictionary  {node index : \[x,y] location coordinates}
- neigbours: adjacency list of list \[node_index => \[list of neighbours],...]
- explored: set for locations marked as explored
- frontier: dictionary associating nodes on the frontier to a composed of a tuple (route, path length). 
- candidates: list for all possible routes found (from start to goal). Tuple: (route, path_length)

To Identify all possible routes to the target goal with Uniform Cost algorithm 
	- while there is node on the frontier, select the one with shortest distance to start (greedy approach)
	- collect identified route up to this node on the frontier
	- remove node from frontier
	- mark node as explored

```python
	while len(frontier) > 0:
	    current_node = find_nearest_frontier_node(frontier)
	    current_route, path_cost = frontier[current_node]
	    frontier.pop(current_node)
	    explored.add(current_node)
```

Visit all neighbours of the selected node on the frontier
-  Steps:
	-  add neighbour to the route. use deepcopy to preserve current_route unchanged for later re-use
	- calculate step_cost to transition to the neighbour from frontier node
	- update path cost with new step cost
	- if the neighbour is the target then store the tuple (route, path_cost) as a candidate
	- if the neighbour is already explored do nothing and move to next neighbour
		- if the neighbour is not already on the frontier, add it to the frontier with its (route, path_cost)
		- if the neighbour is already on the frontier, then update frontier if the new route is shorter
		- collect the path cost of the route already on the frontier
			- compare path cost with new route
			- update frontier with new route if the route is shorter, dropping the older one

```python
		for neighbour in neighbours[current_node]:
	    new_route = deepcopy(current_route)
	     new_route.append(neighbour)
	     step_cost = calculate_distance(current_node, neighbour, coordinates)
	     new_path_cost = path_cost + step_cost
	
	    if neighbour == goal:
	        candidates.append((new_route, new_path_cost))
	    elif neighbour not in explored:
	        if neighbour not in frontier:
	            frontier[neighbour] = (new_route, new_path_cost) 
	        else:
	            existing_cost = frontier[neighbour][1]
	            if new_path_cost < existing_cost:
	                frontier[neighbour] = (new_route, new_path_cost)
```

Amongst the possible routes, return the shortest one. We Can allow to review and select alternative routes instead of shortest one.

```python
	 shortest_route = None
	 shortest_distance = None
	 for candidate, path_cost in candidates:
	        if not shortest_route:
	            shortest_route = candidate
	            shortest_distance = path_cost
	        elif path_cost < shortest_distance:
	            shortest_route = candidate
	            shortest_distance = path_cost
	 for candidate in candidates:
	        print(candidate)
	 print('Minimum traversing distance to reach goal using Uniform Cost greedy algorithm: {:.2f}'.format(shortest_distance))
	return shortest_route
```

##### A* Algorithm

We wish to select and return the location on the frontier having the shortest total estimated path cost to goal. The total cost g+f is the sum of current path cost up to frontier node(g) and estimated straight-line distance from frontier node to goal location. We have 3 inputs:

- routes: dictionary associating nodes on the frontier to a composed of a tuple (route, path length). The tuple contains the sequence of traversed locations from start -> to frontier node and associated path_length
- goal(int): the goal location
- coordinates: dictionary with (x,y) coordinates for all nodes in graph

The function returns the location on the frontier having the shortest total estimated path_cost to goal

```python
def goaltest(location, goal):
    return location == goal
def find_nearest_frontier_node_AStar(routes, goal, coordinates):
    path_costs =  {node:routes[node][1] + calculate_distance(node, goal, coordinates) for node in routes}
    return [node for node, path_cost in sorted(path_costs.items(), key= lambda x: x[1])][0]
```

To find the shortest route using A* Algorithm. This function return the shirtest between a start location and a goal location. The inputs are:
- M: a Map object (Class Map)
- start: the starting node index (integer)
- goal: the target node index (integer)

The function returns a list of integers representing the shortest path from start to goal.
We initialize parameters:
- coordinates:  dictionary {node index : \[x,y] location coordinates}
- neighbours: adjacency list of list \[node_index => \[list of neighbours],...]
- explored: set for locations marked as explored
- frontier: dictionary associating nodes on the frontier to a composed of a tuple (route, path length).

The route is the sequence of traversed locations from start to frontier node. Steps:
- Identify shortest route to the target goal with A* algorithm
    - While there is node on the frontier, select the one with shortest distance to start (greedy approach)
    - Collect identified route up to this node on the frontier
    - If frontier node with shortest path = goal then we found the shortest path
    - Remove node from frontier
    - Mark node as explored
    - Visit all neighbours of the selected node on the frontier
        - Add neighbour to the route. use deepcopy to preserve current_route unchanged for re-use in for loop
        - Calculate step_cost to transition to the neighbour from frontier node
        - Update path cost with new step cost
        - If the neighbour is already explored do nothing and move to next neighbour
            - If the neighbour is not already on the frontier, add it to the frontier with its (route, path_cost)
            - if the neighbour is already on the frontier, then update frontier if the new route is shorter
                - Collect the path cost of the route already on the frontier
                - Compare path cost with new route
                    - Update frontier with new route if the route is shorter, dropping the older one
    - Return the shortest route

```python
def shortest_path(M,start,goal):
    print("shortest path called")
    print('Minimum traversing distance to reach goal using Dijkstra greedy algorithm: {:.2f}'.format(dijkstra(M, start, goal)))
    coordinates = M.intersections       
    neighbours = M.roads                
    explored = set()                    
    frontier = {start:([start], 0)}      
    while len(frontier) > 0:
        current_node = find_nearest_frontier_node_AStar(frontier, goal, coordinates)
        current_route, path_cost = frontier[current_node]

        if goaltest(current_node, goal):
            break
        frontier.pop(current_node)

        explored.add(current_node)
        for neighbour in neighbours[current_node]:
            new_route = deepcopy(current_route)
            new_route.append(neighbour)
            step_cost = calculate_distance(current_node, neighbour, coordinates)
            new_path_cost = path_cost + step_cost
            if neighbour not in explored:
                if neighbour not in frontier:
                    frontier[neighbour] = (new_route, new_path_cost) 
                else:
                    existing_cost = frontier[neighbour][1]
                    if new_path_cost < existing_cost:
                        frontier[neighbour] = (new_route, new_path_cost)
    print('Minimum traversing distance to reach goal using A* algorithm: {:.2f}'.format(frontier[goal][1]))
    return current_route
```

##### Dynamic Programming

```python
def print_best_path(j, Q, start, goal):
print('shortest path and distance to target:')
sum_costs = 0
current_node = start
while current_node != goal:
print(current_node,'->',end=' ')
# Move to the next node and increment costs
next_node = np.argmin(Q[current_node, :] + j)
sum_costs += Q[current_node, next_node]
current_node = next_node
print(goal)
print('Cost: {:.04f}'.format(sum_costs))
```

The following function returns the shortest path between a start location and a goal location using Dynamic Programming
Inputs:
- M: a Map object (Class Map)
- start: the starting node index (integer)
- goal: the target node index (integer)
Output:
- a list of integers representing the shortest path from start to goal

Parameters to be initialized include:
- nodes: list of all intersections of the graph 
- coordinates: dictionary {node index : \[x,y] location coordinates}
- neighbours: adjacency list of list \[node_index => \[list of neighbours],...]

We prepare a distance matrix Q which is a square matrix of suze (num_nodes x num_nodes). All invalid pairs have infinite distance. Q is filled with valid graph edge distances. The goal is initialized with 0 distance. 

```python
def print_best_path(j, Q, start, goal):
    print('shortest path and distance to target:')
    sum_costs = 0
    current_node = start
    while current_node != goal:
        print(current_node,'->',end=' ')
        # Move to the next node and increment costs
        next_node = np.argmin(Q[current_node, :] + j)
        sum_costs += Q[current_node, next_node]
        current_node = next_node
    print(goal)
    print('Cost: {:.04f}'.format(sum_costs))
        
def shortest_path_DP(M,start,goal):
    print("shortest path called")
    print('Minimum traversing distance to reach goal using Dijkstra greedy algorithm: {:.2f}'.format(dijkstra(M, start, goal)))
    nodes = M._graph.nodes()               
    coordinates = M.intersections          
    neighbours = M.roads                   
    j = np.zeros_like(nodes, dtype='float')
    next_j = np.empty_like(nodes, dtype='float')
    Q = np.ones((len(nodes),len(nodes)))
    Q = Q * np.inf                         
    for node in nodes:
        for neighbour in neighbours[node]:
            if Q[node, neighbour] == np.inf:
                   Q[node, neighbour] = calculate_distance(node, neighbour, coordinates)
    Q[goal, goal] = 0
```

We run an iterative algorithm to converge towars distance values using Bellman equation. We check convergence else iterate and finally print out results

```python
 max_iter = 500
    i=0
    while i < max_iter:
        for nodeA in nodes:
            next_j[nodeA] = np.min(Q[nodeA,:] + j) 
        if np.allclose(next_j, j):   
            print('iterations converged after',i,'steps with dynamic programming')
            break
        else:
            j[:] = next_j 
            i+=1
    print_best_path(j, Q, start, goal) 
    return Q,j, j[start]
```

Here, next_j\[nodeA] = np.min(Q\[nodeA,:] + j) is equivalent to 

```python
lowest_cost = np.inf
for nodeB in nodes:
cost = Q[nodeA, nodeB] + j[nodeB]
if cost < lowest_cost:
lowest_cost = cost
next_j[nodeA] = lowest_cost
```

### Methodology

##### 1. <b>Data Collection </b>

OSM was the main source of data for the road network, as well as information on points of interest such as tourist attractions, hotels, and restaurants. The OSM data was downloaded in the form of XML files, which contain a detailed representation of the road network and other features in a specific region. OSM data is represented in XML describing 

- Nodes, with an unique identifier and coordinate given as pair of latitude and longitude
- Ways, also with an unique identifier, consisting of multiple nodes referenced by their identifier
- Relations, consisting of nodes, ways and other relations, representing relationships between the referenced data 
- Tags as key-value pairs, storing metadata about the other items

![](assets/xml.PNG)

Ways are used to represent roads consisting of nodes. Tags are used to describe metadata like speed limits for a road or whether it is a one way street or not. However, the format also contains a lot of data not directly relevant for route planning, like shapes of buildings and outlines of public parks. Therefore, we filter OSM data and only keep relevant information. 

To do this, we used osmnx, which is a Python library that can retrieve and analyze OSM data. The library provides an easy-to-use API that allows us to download specific parts of the road network for a given region. This allowed us to focus on only the necessary data and avoid processing unnecessary data, which saved both time and computational resources.

```python
import osmnx as ox # specify the location by a place name or coordinates 
location = "Vellore, Tamil Nadi, India" # define the type of network (drive, bike, walk) 
network_type = "drive" 
# download the street network 
G = ox.graph_from_place(location, network_type=network_type)
```

One of the challenges faced during the data collection process was the need to select an appropriate region for testing. This required consideration of various factors such as the size of the region, the complexity of the road network, and the availability of data. We ultimately chose Vellore, a typical urban area, as this would provide a good test bed for our implementation.

##### 2. <b>Data Preprocessing </b>

In pre-processing, The first step was to convert the OSM XML files into a format that could be used by the routing algorithm. This was done using a library called xmltodict, to parse the OSM XML file and convert it to JSON format. We then use the networkx library to create a graph representation of the network, where nodes are represented by their unique identifiers and edges represent the roads connecting the nodes. The id attribute of each way was used to label the edges in the graph, and the onewattribute was used to indicate whether the road is one-way or not. The oneway attribute was determined by checking if the k attribute of the tag element is equal to oneway. Once the graph was created, we used the write_gpickle function from networkx to save the graph to a file in the GPickle format, which is a format that can be easily read by routing algorithms

```python
import xmltodict
import json
import networkx as nx
# parse the OSM XML file using xmltodict
with open('file.osm') as f:
    data = xmltodict.parse(f.read())
# convert the data to JSON format
json_data = json.dumps(data)
# create a graph from the JSON data using networkx
graph = nx.MultiDiGraph()
for way in data['osm']['way']:
    nodes = way['nd']
    for i in range(len(nodes) - 1):
        graph.add_edge(nodes[i]['@ref'], nodes[i+1]['@ref'], id=way['@id'], oneway=(way.get('tag', {}).get('k') == 'oneway'))
# write the graph to file in a format compatible with routing algorithms
nx.write_gpickle(graph, 'file.gpickle')
```

.Once the OSM data was in a graph format, additional preprocessing steps were taken to further optimize the data for the routing algorithm. We defined a function that takes a graph as input and applies three optimizations to it:

1.  We merged parallel edges between nodes to reduce computational overhead. This was done by converting the graph to a  MultiGraph and then back to a  Graph.
2.  We removed nodes with degree 2 to simplify the graph. This is because these nodes do not contribute to the routing solution and can be safely removed.
3.  We added a weight to each edge based on its length. This was done because most routing algorithms use edge weights to determine the optimal path, and using edge length as the weight is a common approach.

The optimized graph could be used with routing algorithms such as A* to find the shortest path between two nodes.

```python
def optimize_graph(graph):
    # merge parallel edges between nodes to reduce computational overhead
    graph = nx.MultiGraph(graph)
    graph = nx.Graph(graph)

    # remove nodes with degree 2 to simplify the graph
    nodes_to_remove = [node for node, degree in dict(graph.degree()).items() if degree == 2]
    graph.remove_nodes_from(nodes_to_remove)

    # add a weight to each edge based on its length
    for u, v, data in graph.edges(data=True):
        length = data['length']
        data['weight'] = length

    return graph
```

##### 3. <b>A* Algorithm Implementation </b>

One of the challenges with implementing the A* algorithm for multi-destination route planning is the need to efficiently store and retrieve the shortest paths to each destination.

To overcome this challenge, we extended the basic A* algorithm to include a priority queue that stored the current shortest path to each destination. This allowed us to efficiently retrieve the shortest path to the next destination at each iteration and reduce the number of nodes explored during the search process. We also used a heuristic function that estimated the distance to the nearest destination as the crow flies. This allowed the algorithm to prioritize paths that were closer to the next destination and avoid exploring paths that were unlikely to lead to the optimal route.

```python
import heapq
def a_star_multi_destination(graph, start, destinations):
    # Initialize the data structures
    visited = set()
    queue = []
    dist = {start: 0}
    prev = {start: None}
    for dest in destinations:
        dist[dest] = float('inf')
        prev[dest] = None
        heapq.heappush(queue, (float('inf'), dest))
    # Define the heuristic function
    def heuristic(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1]) # Modified Manhattan distance
```

Another challenge was choosing an appropriate heuristic function which is critical to the performance of the A* algorithm on a weighted graph. A heuristic function is an estimation of the distance between the current node and the target node. The heuristic function needs to be admissible, which means that it must never overestimate the actual distance between the current node and the target node. The heuristic function should also be consistent, which means that the estimated distance between two nodes should always be less than or equal to the sum of the estimated distance from the start node to the first node and the estimated distance from the first node to the second node.

We used Manhattan distance as it iswell-suited for routing problems where the movement is restricted to a grid-like structure, such as a road network. This is because the Manhattan distance measures the shortest distance between two points when the movement is restricted to horizontal and vertical paths, which is the case in most road networks. Therefore, we believe that using the Manhattan distance as the heuristic function would lead to more accurate and relevant estimates of the actual cost of reaching the goal node, which can improve the efficiency and effectiveness of the A* algorithm. 

Moreover we modified the manhattan heuristic function to take two tuples as arguments as it allows the algorithm to incorporate the actual coordinates of the nodes into the search process, which can be important for generating more accurate and relevant routes. For example, the actual distance between two nodes may not always be the same as the Manhattan distance between them, especially if the road network is not a perfect grid. By taking the actual coordinates into account, the algorithm can generate more realistic estimates of the actual cost of reaching the goal node, which can lead to more accurate and relevant routes. 

Modifying the heuristic function in this way can also make the implementation of the algorithm simpler and more efficient, as it avoids the need to calculate the actual distance between two nodes in each iteration of the search process. Instead, the Manhattan distance can be calculated using simple arithmetic operations, which can be faster and more efficient than more complex distance metrics.

### Requirements

##### 1. <b>Software Requirements</b>

 - mermaid-js (for documentation)
 - HTML, Tailwind CSS and Vanilla Javascript : These will be used to build dynamic web UI)
 - Nominatim API : It allows geocoding and reverse geocoding which in turn allows to both search a coordinate by name as well as find the coordinates of a destination to determine the closest nodes/destinations tot that destination)
 - OpenStreetMap: OSM provides the data needed for the route planner. The OSM data includes information on roads, buildings, and other features, which can be used to generate routes between multiple destinations. The first step would be to download the relevant OSM data for the area of interest. 
 - OSMnx: It can be used to download and process OpenStreetMap data. It can be used to extract street networks, calculate shortest paths, and generate graphs and visualizations. After downloading the relevant OSM data, OSMnx can be used to create a street network graph, which represents the road network and intersections. This graph can then be used to calculate the shortest paths between multiple destinations.
 - NetworkX: It can be used to create, manipulate, and analyze complex networks. It can be used to generate graphs, calculate shortest paths, and perform other network analysis tasks. NetworkX can be used in conjunction with OSMnx to create a graph of the street network and calculate the shortest paths between multiple destinations.
 - PyRouteLib: It can be used to calculate optimal routes on street networks. It can be used to calculate the shortest path between multiple destinations based on factors such as distance, time, or traffic conditions. Once the street network graph has been created using OSMnx and NetworkX, PyrouteLib can be used to calculate the optimal route between multiple destination.
 - GeoPandas: It provides tools for working with geospatial data. It can be used to load and manipulate OpenStreetMap data, calculate distances and areas, and perform other spatial analysis tasks. GeoPandas can be used to load the OSM data and perform spatial queries, such as identifying the nearest points of interest to each destination.
 - Leaflet: It is a JavaScript library for interactive maps. It can be used to create maps that display the routes generated by the planner and provide interactive features such as zooming and panning. Once the optimal route has been calculated, Leaflet can be used to display the route on an interactive map.
 - PostgreSQL/PostGIS: PostgreSQL is a popular open-source relational database management system, and PostGIS is an extension that adds support for geospatial data. Together, they can be used to store and query large amounts of OpenStreetMap data and perform complex spatial analysis tasks. PostgreSQL/PostGIS can be used to store the OSM data and perform advanced spatial queries, such as identifying the shortest path between multiple destinations that passes through specific points of interest.

OpenStreetMap provides the base data for the planner, OSMnx and NetworkX are used to create the street network graph and calculate the shortest paths between multiple destinations, PyrouteLib is used to calculate the optimal route, GeoPandas is used to load and manipulate the OSM data and perform spatial analysis tasks, Leaflet is used to display the route on an interactive map, and PostgreSQL/PostGIS is used to store the OSM data and perform advanced spatial queries.
 
##### 2. <b>Development_Environment</b>

- Code Editor: VS Code, Jupyter Notebook
- MarkDown Editor : Obsidian
- Browser: Chrome(majorly)
- Graphics Editor: Figma, Adobe Photoshop
- FTP Client: FileZilla, CyberDuck
- Version Control: Git
- Module Integration: Github

##### 3. <b>Hardware_Requirements</b>

- Operating System: Windows 8 or later
- Processor: Intel Pentium 4 or later
- Memory: 2GB minimum, 4GB recommended
- Screen Resolution: 1280X1024 or larger
- Internet upstream Bandwidth: 2Mbps or more

### Result_and_Discussion

Initially we extracted the OpenStreetMap Data on VIT Vellore. However, the graph had only 22 nodes and 47 edges. Being at the intial stages of the project, we defined 5 source and target nodes. We then used Dijkstra's algorithm and A* algorithm to find the shortest path between each pair of nodes, and measure the time it takes to compute the route. We were using the weight=length parameter to find the shortest path based on the length of the edges, and the heuristic=ox.distance.euclidean parameter to estimate the distance to the target node for the A* algorithm. 

![](assets/vit_graph.PNG)

But the operation could not be performed as the Graph variable was empty. We tried changing the network type to 'drive' and this time the nodes were discovered. This was because the dataset apparently had no data on bikes for the campus area. 

We thus expanded the area of inspection to the whole Vellore City.

![](assets/streetGraphNetwork.PNG)

We now faced 2 new challenges. Firstly, we couldnt just pick any 2 nodes from the list of nodes available to us as it is possible that there exists no direct path between those 2 nodes. So, we took a target node and a source node and found the shortest path between those two nodes. We created a set of all nodes in that path. We looped though all the nodes to check if a path exists to the target node. This way fetched a list of nodes for which a path existed to the target node.

We then tried creating a subgraph from this list of nodes. We did this by fetching the list of nodes in the graph and initializing the list to store the nodes for which a subgraph could be drawn. We had to loop through all the nodes in the graph, create a set in each iteration, remove the current node from the set, looping through all other nodes in the set and checking if a path existed between the current node and the other node.

Due to the dataset of Vellore being considerably dense, the processing time was very high (arounf 10 minutes). The same process when implemented on Vellore Institute of Tehnology dataset on the other hand, fetched a sub graph on which routing couldnt be performed.

![](assets/vitsub.PNG)

We then decided to choose 3 cities, Vellore, Karnal and Patna and tried creating 5 subgraphs for each of the three cities taking a random of 60 to 360 nodes for each graph. The results we got were disappointing to say the least because of two reasons. Firstly, in 95% of the graphs generated the number of visible edges were hardly 2 to 3. And most of the times the nodes picked at random would not have any edge at all leading to premature termiantion of the program. In fact, we never really managed to generate the sub graph for the third city in the list since the program would terminate halfway throught the second city.

Subgraphs generated for Vellore:

![](assets/vel1.PNG)

![](assets/vel2.PNG)

![](assets/vel3.PNG)

![](assets/vel4.PNG)

![](assets/vel5.PNG)

Subgraphs for Karnal, Haryana:

![](assets/karn1.PNG)

![](assets/karn2.PNG)

![](assets/karn3.PNG)

![](assets/karn4.PNG)

![](assets/karn5.PNG)

We thus used 10 custom generated graphs with nodes ranging from 21 to 70 and weights randomly assigned to test the efficacy of our routing algorithm.

![](assets/custom2.PNG)

![](assets/custom3.PNG)

![](assets/custom4.PNG)

![](assets/custom5.PNG)

![](assets/custom6.PNG)

![](assets/custom7.PNG)

![](assets/custom8.PNG)

![](assets/custom9.PNG)

![](assets/custom10.PNG)

A web interface was also developed for our project. The main objective was to provide users with a convenient and user-friendly platform for planning their routes to multiple destinations. Overall, the web interface was successful in achieving its primary goal. The interface was easy to navigate and allowed users to input multiple destinations and calculate the optimal route. The interface also provided users with real-time traffic updates and allowed them to customize their routes based on their preferences. We were unfortunately unable to deploy the web interface with our routing algorithm due to the paid nature of certain APIs that were used.

![](assets/web1.jpeg)
![](assets/web2.jpeg)

To improve the quality of our shortest paths, access node selection needs to be improved. It should not solely be based on vicinity. Stops should be ordered in a certain priority, measuring their importance for the network. Ideally, a stop is important if it is part of many shortest paths. A simple hierarchy can be obtained by counting the amount of connections available at a certain stop. The more connections, the more likely it is important. The hierarchy can be further fine tuned by injecting query logs of other applications or manually selecting big main stations before smaller stops.
Another important aspect is to greatly expand the amount of metadata displayed next to a computed journey in the front end. An application that is to be used by clients must give extensive information on routes. Not only the name of a street and identification numbers of trains, but also include precise information on a road type, possible restrictions, access to the complete schedule of the trip of a transit vehicle, cost, and possibly even include forecasts for traffic congestion.
Currently, the OptiRoute planner operates on a static dataset of locations and travel times. It would be interesting to explore the feasibility of real-time optimization, where the planner takes into account traffic conditions, road closures, and other live data sources to re-optimize the route in real-time. It would be interesting to explore how the user experience can be improved. For example, adding features like drag-and-drop locations, setting priority locations, and modifying the route by adding or removing locations. We further plan to integrate public transportation like buses, trains, and subways to plan the most optimal route that includes public transportation. It is yet to be explored if the system can be scaled to handle larger datasets with more destinations and constraints. This would require exploring parallel computing and distributed systems to optimize the route planning process.
Long term goals consist of adding multi-criteria routing, such as optimizing not only for the earliest arrival time, but also for factors like cost and amount of transfers And adding support for real-time data (RTD), for example, incorporating traffic congestion, road outage and transit vehicle delays. Real time data are already available for most networks, especially for transit networks. However, RTD is particularly hard to implement, because the underlying network changes, possibly invalidating precomputations. Fortunately, only small sections of a network are affected and need to be adjusted, leading to the identification of a changes impact and possible precomputations.

### Video_Demonstration

[Video Demonstration](https://drive.google.com/file/d/12vdv1CJP8myRPxa5bLeZzYAROSpDBAij/view)

0:00 - 9:32 : PPT<br>
9:33 - 24:24 : Project Demonstration

Note: It was noted later while reviewing the contents of the video that street graph networks and subgraphs being generated at run time during the later half of the video were not captured by screen sharing and hence they have been included in [Results and Discussion Section](#Result_and_Discussion)

### Conclusion

The OptiRoute project has presented an efficient and effective solution to the multi-destination most optimal route planning problem using the A* algorithm. The project successfully addresses the limitations and challenges faced by other algorithms such as Dijkstra, Dynamic Programming, and Uniform Cost Greedy Algorithm. OptiRoute provides a faster and more optimal route planning solution for users, saving them time and minimizing their travel distance. OptiRoute also has the potential to be further developed, by incorporating real-time optimization, multi-modal routing, and other features that could enhance the user experience. Overall, the OptiRoute project showcases the power of A* algorithm in solving the multi-destination most optimal route planning problem and highlights the potential of this approach in other real-world scenarios. With further development, OptiRoute could become an essential tool for travel planners, logistics providers, and transportation agencies

#### Workflow

#### 1. Accessing_the_project

- Make sure you have git installed and added as your device's ystem environment variable
- Go the [project](https://github.com/bholebaba0135/Destiny-Defined_TARP) 
- Click on Code and copy the HTTPS link
- Right click and click on Git Bash in a folder and type command "git clone copied_link"
-  Run Obsidian and click on Open folder as vault. Navigate and select the folder that was extracted from zip named 'Destiny-Defined_TARP'

#### 2. Contributing_to_the_project

- Right click and click on 'Git Bash Here' in your 'Destiny-Defined_TARP' folder.
- Enter 'git checkout your_name' (Needed to be done just the first time you use Obsidian not everytime)
- Edit, make changes and add your part to the markdown now opened in your Obsidian vault.
- Enter the command 'git add .' to move all the changes you made to the staging area
- Enter git commit -m "Short message describing the changes"
- Enter git push.

#### 3. Zotero_Integration_with_Obsidian

- Download Zotero 6 for Windows from [here](https://www.zotero.org/download/)
- Install Zotero and launch the application
- Click [here](https://github.com/retorquere/zotero-better-bibtex/releases/tag/v6.7.62) and click on .xpi file to download it
- Go to Tools -> Add ons on Zotero
- Drag and drop the downloaded .xpi file into the Add ons Window
- Click on Restart Now
- Open Obsidian and click on Settings
- Go to Community plugins -> Browse
- Search for Zotero Integration, Install and enable it.
- Now go back and go to 'Zotero Integration' under Community plugins and:
	- Download pdf utility
	- Enable Auto Concatenaton
	- Click on 'Add Citation Format' and name it APA. Select Style as American Psychological Association 7th edition from dropdown.
	- Click on 'Add Import Format'

### Appendix

#### 1. FlowChart

```mermaid

graph TD
id1([Start]) --> id2[/Enter No. of Destinations/] -->|Let no. be n|id3(Fetch n drop down boxes) --> id4[/Select n destinations/] --> id5{Use current location as source?} --> |Yes|id6(Allow Location Tracking)
id5 --> |No|id7[\Enter the source location\]
id6 & id7 --> id8(Synchronize the input queries with Google Maps) --> |Assuming souce and destinations to be nodes|id9{Roadways exist between each pair of nodes?} --> |Yes|id10(Extract the distance from one node to other nodes) --> id11(Construct a distance matrix) --> |Using an appropriate algorithm|id12(Find the shortest path that visits all nodes exactly once)
id9 --> |No|id2
id12 --> id13[\Highlight the caclulated route on Google Maps\] -->id14([Stop])


```


#### 2. Gantt_Chart

```mermaid
gantt

title Multi Stop Route Planner
dateFormat DD-MM-YYYY
section Planning & Modelling
Defining the scope :a1, 03-02-2023, 8d
First Feedback :a2, 08-02-2023, 1d
Literature Survey :after a2, 15d
Update Module List :09-02-2023, 15d
section Construction/Coding
Dynamic Web Interface :24-02-2023, 9d
Synchronization to OSM Data :a3, 24-02-2023, 17d
Most Optimal Path Calaulation :a4, after a3, 9d
Fetching User Readable Result: a6, after a4, 15d
section Integration & Unit Testing
API integration: a5, 24-02-2023, 35d
Testing algorithm Implementation: after a4, 8d
Testing Route Highlighting: a7, after a6, 9d
section Deployment
Deploying the web app: after a7, 15d

```

### References

##### Scholarly_References
- Huang, Y., Ying, J. J. C., Yu, P. S., & Tseng, V. S. (2020). Dynamic graph mining for multi-weight multi-destination route planning with deadlines constraints. ACM Transactions on Knowledge Discovery from Data (TKDD), 15(1), 1-32. [[doi link]](https://doi.org/10.1145/3412363)
- Chowdhury, S., & Giacaman, N. (2015). En-route planning of multi-destination public-transport trips using smartphones. Journal of Public Transportation, 18(4), 31-45. [[doi link]](https://doi.org/10.5038/2375-0901.18.4.3)
- Hakeem, A., Gehani, N., Ding, X., Curtmola, R., & Borcea, C. (2019, November). Multi-destination vehicular route planning with parking and traffic constraints. In Proceedings of the 16th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (pp. 298-307) [[doi link]](https://doi.org/10.1145/3360774.3360824)
- Nanayakkara, S. C., Srinivasan, D., Lup, L. W., German, X., Taylor, E., & Ong, S. H. (2007, September). Genetic algorithm based route planner for large urban street networks. In 2007 IEEE Congress on Evolutionary Computation (pp. 4469-4474). IEEE [[doi link]](https://doi.org/10.1109/CEC.2007.4425056)
- Edelkamp, S., Jabbar, S., & Willhalm, T. (2005). Geometric travel planning. IEEE Transactions on Intelligent Transportation Systems, 6(1), 5-16. [[doi link]](https://doi.org/10.1109/TITS.2004.838182)

##### Web_References
- https://pgrouting.org/
- https://www.openstreetmap.org/
- https://developers.google.com/maps/documentation/javascript/distancematrix
- https://www.w3schools.com/graphics/google_maps_basic.asp
- https://www.upperinc.com/blog/what-is-multi-stop-route-planning/
- https://pretalx.com/sotm-africa-2021/talk/7YHERU/
- https://memgraph.com/blog/how-to-build-a-route-planning-application-with-breadth-first-search-and-dijkstras-algorithm
- https://towardsdatascience.com/driving-distance-between-two-or-more-places-in-python-89779d691def

##### Learning_Resources
- [Markdown cheatsheet for preparing Readme.md](https://github.com/christianlempa/cheat-sheets/blob/main/misc/markdown.md)
- [How to use an API tutorial](https://www.youtube.com/watch?v=WXsD0ZgxjRw)
- [pgRouting Workshop - Self Study](http://workshop.pgrouting.org/2.8/en/index.html)
- [Using OpenStreetMAP data with pgRouting](https://medium.com/@frederic.rodrigo/imposm2pgrouting-route-planning-on-openstreetmap-road-network-with-the-benefit-of-updates-1e70f280ac5e)
- [Loading data from OpenStreet Map API](https://towardsdatascience.com/loading-data-from-openstreetmap-with-python-and-the-overpass-api-513882a27fd0)
- [Visulaization](https://towardsdatascience.com/find-and-plot-your-optimal-path-using-plotly-and-networkx-in-python-17e75387b873)





