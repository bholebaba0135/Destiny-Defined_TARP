# Destiny-Defined_TARP

### Project Title 

Mutli Destination Most Optimal Route Planner

### Objective
We wish to build a web app that would enable tourists who may wish to travel to multiple destinations in a new city to navigate the shortest route without passing the same street twice. This would prove to be really useful in travel planning. 

### Development Model

Iterative Waterfall<br>
<br>
In this process model, the development process is divided into several phases such as requirement gathering, design, coding, testing and deployment.
Each phase is executed only when the previous phase is completed, so it is a step by step process without parallelism.
It is suitable for small scale projects with low risks, when quality is preferred over cost and requirements are well-known upfront.
The iterative nature provides for error correction at the end of each phase leading to less errors in the final testing phase.

### Roles and Responsibilities

1. Dynamic Web Interface: Prakhar Goyal (20BCE2211) and Harshit Jaiswal (20BCE2157)
2. Synchronizing search request to open source Map Data: Pranjal Choudhary (20BCE0571) and Anmol Gupta (20BCB0135)
3. Determination of most optimal Path : Vivek Rathore (20BCE0573) and Aditya Singh Rathore (20BCE0730)
4. Highlighting the calculated route on GMaps : Rama Krishna Mohapatro (20BCE0877) and Pallav Jyoti Buragohain (20BCE0866)
5. <i><b>Note:</b> Visit [here](Workflow.md) to checkout the workflow</i>


### FlowChart

```mermaid

graph TD
id1([Start]) --> id2[/Enter No. of Destinations/] -->|Let no. be n|id3(Fetch n drop down boxes) --> id4[/Select n destinations/] --> id5{Use current location as source?} --> |Yes|id6(Allow Location Tracking)
id5 --> |No|id7[\Enter the source location\]
id6 & id7 --> id8(Synchronize the input queries with Google Maps) --> |Assuming souce and destinations to be nodes|id9{Roadways exist between each pair of nodes?} --> |Yes|id10(Extract the distance from one node to other nodes) --> id11(Construct a distance matrix) --> |Using an appropriate algorithm|id12(Find the shortest path that visits all nodes exactly once)
id9 --> |No|id2
id12 --> id13[\Highlight the caclulated route on Google Maps\] -->id14([Stop])


```


### Gantt Chart

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

### Activity-based Work Breakdown Structure

```mermaid
graph TD
id1[Multi Stop Route Planner] --> id2[1. Planning<br>&<br>Modelling]
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

### Software Requirements

#### 1. Dependencies
 - mermaid-js (for documentation)
 - HTML, Tailwind CSS and Vanilla Javascript (For dynamic web UI)
 - Nominatim API (Allows geocoding and reverse geocoding which in turn allows to both search a coordinate by name as well as find the coordinates of a destination to determine the closest nodes/destinations tot that destination)
 - Leaflet Library (Mobile friendly interactive maps)
 - OpenChargeMap API (allows access to open data registry of EV charging points)
 - OpenStreetMap API (allows us to use OSM database)

#### 2. Databases
 - OpenStreetMap (OSM) - PostgreSQL based

    ![](osm_data.png)


 - pgRouting (Represents the city as a weighted graph and helps implement several routing algorithms)

#### 3. Development Environment 

Code Editor: VS Code<br>
MarkDown Editor : Obsidian<br>
Browser: Chrome(majorly)<br>
Graphics Editor: Figma, Adobe Photoshop<br>
FTP Client: FileZilla, CyberDuck<br>
Version Control: Git<br>
Module Integration: Github

### Hardware Requirements

Operating System: Windows 8 or later<br>
Processor: Intel Pentium 4 or later<br>
Memory: 2GB minimum, 4GB recommended<br>
Screen Resolution: 1280X1024 or larger<br>
Internet upstream Bandwidth: 2Mbps or more<br>
Browser: Chrome/Edge/Firefox

###   Literature Survey
| Title | Author | Algorithm and dataset | Important Findings | Limitations | References | 
| --- | --- | --- | --- | --- | --- |
| A Multimodal Trip Planning System Incorporating the Park-and-Ride Mode and Real-time Traffic/Transit Information | Jing-Quan Li, Kun Zhou, Liping Zhang, and Wei-Bin Zhang | Algorithms: Dijkstra's Algorithm , A* Algorithm , Genetic Algorithm  Dataset : OpenStreetMap , GTFS (General Transit Feed Specification) ,Real-time Traffic Data | Locations of parking facilities, including the number of available parking spots and the cost of parking.Real-time transit schedule and delay information, including the location of transit stops and stations. Real-time traffic information, including current road conditions and any disruptions or delays.User preferences, including the origin and destination of the trip and the preferred mode of transportation. | 1)Limited coverage: The system may have limited coverage of the transit and traffic information, which may result in incomplete trip planning information for certain areas. 2) Data accuracy: The accuracy of the real-time traffic/transit information used by the system can be affected by various factors, such as network connectivity issues and technical glitches. Inaccurate data may result in suboptimal trip planning suggestions 3) User behavior: The effectiveness of the system is dependent on user behavior, such as the willingness of users to use the park-and-ride mode and follow the suggested travel routes. If users deviate from the suggested routes, the system's effectiveness may be reduced. 4) Data privacy and security: The system relies on real-time traffic/transit information, which may raise concerns regarding data privacy and security. The collection and use of user data must be transparent and comply with relevant laws and regulations. | 1.) Ahuja, R. K., T. L. Magnanti, and J. B. Orlin. Network Flows: Theory, Algorithms, and Applications. Prentice Hall, 1993. 2). Cathey, F.W., and D.J. Dailey. A prescription for transit arrival/departure prediction using AVL data. Transportation Research Part C, Vol. 11, 2003, pp. 241-264 3) 3. Chen, M., X. B. Liu, and J. X. Xia. Dynamic prediction method with schedule recovery impact for bus arrival time. 4) Cherkassky, B. V., A. V. Goldberg, and T. Radzik. Shortest paths algorithms: theory and experimental evaluation. Mathematical Programming, Vol. 73, 1996 5) 5. Homepage of Bay Area 511 Transit Planner. http://www.511.org |
| A Multi-Modal and Multi-Objective Journey Planner for Integrating Carpooling and Public Transport | Jafar Jamal, Roberto Montemanni, David Huber, Marco Derboni, and Andrea E. Rizzoli | 1)Algorithm for Multi-Modal Route Planning. 2) Support Vector Machines (SVM) 3) Logistic Regression Dataset : 1)Multi-modal network graph for a small city, including bus stops, train stations, and bike rental locations, with schedules and routes for each mode of transportation. 2)Real-time feed for carpooling services, including information about available seats, cancellations, delays, and updated routes. 3) Map data with road network, including speed limits, traffic data, and estimated travel times. 4)Data on user preferences and constraints, such as maximum walking distance, preferred modes of transportation, and departure time constraints. 5)Historical data on traffic patterns, transportation usage, and user behavior, to improve the accuracy of the algorithm and optimize route planning. | The study proposed a multi-modal and multi-objective journey planner that integrates carpooling and public transportation. The planner optimizes for multiple objectives, including travel time, cost, and environmental impact. The proposed approach was tested on real-world data from the Swiss city of Lugano, and the results showed that the planner could reduce the total travel time and cost while also reducing the environmental impact by encouraging carpooling and the use of public transportation. The study concluded that the proposed planner could be a valuable tool for promoting sustainable and efficient transportation. | 1) Data availability: The study heavily relies on data availability from public transport and carpooling services, and the accuracy of the model is dependent on the quality and quantity of the data. 2)Generalizability: The model is developed based on data from a specific city, and it may not be generalizable to other cities with different transportation infrastructures and population densities. 3)User behavior: The model assumes that users will choose the most efficient and cost-effective transportation mode, which may not always be the case. User preferences, attitudes, and habits towards different transportation modes can significantly influence the effectiveness of the model. 4)Technical limitations: The model requires real-time data to be effective, which may not always be feasible due to technical limitations or insufficient resources. 5)Integration with existing systems: The study does not address the challenges of integrating the proposed multi-modal and multi-objective journey planner with existing public transportation and carpooling systems. Integration may require substantial resources and support from relevant stakeholders. | H. Bast, S. Funke, D. Matijevic, P. Sanders, and D. Schultes, “In transit to constant time shortest-path queries in road networks,” in Proc. Meeting on Algorithm Engineering & Experiments. Society for Industrial and Applied Mathematics, 2007, pp. 46-59. [2] M. Braun, “Multi-Model route planning with transfer patterns,” Master’s thesis, Albert-Ludwigs-Universität Freiburg, 2012. [3] M. Brodesser, “Multi-Modal route planning,” Master’s thesis, Albert-Ludwigs-Universität Freiburg, 2013. [4] D. Delling, J. Dibbelt, T. Pajor, D. Wagner, and R. F. Werneck, “Computing and evaluating multimodal journeys,” Karlsruher Institut für Technologie (KIT), Karlsruhe, Germany. 2012 [5] E. W. Dijkstra, “A note on two problems in connexion with graphs,” Numerische Mathematik, vol. 1, no. 1, pp. 269-271, 1959. [6] R. Gallotti and M. Barthelemy, “The multilayer temporal network of public transport in Great Britain,” Scientific Data, 2015. [7] R. Geisberger, P. Sanders, D. Schultes, and D. Delling, “Contraction hierarchies: Faster and simpler hierarchical routing in road networks,” in Proc. International Workshop on Experimental and Efficient Algorithms, Berlin, Germany, 2008, pp. 319-333. [8] R. Geisberger, P. Sanders, P. Schultes, and D. Vetter, “Exact routing in large road networks using contraction hierarchies,” Transportation Science, vol. 46, no. 3, pp. 388-404. 2012. |
| A Mobile Application for Multimodal Trip Planning | Nikos Dimokas, Kostas Kalogirou, Pavlos Spanidis, Dionysis Kehagias | 1)Dijkstra's Algorithm: for finding the shortest path between two points in a graph. 2) A* Algorithm: for finding the shortest path between two points in a graph with heuristic values Dataset: 1) OpenStreetMap: OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world. It provides detailed information about roads, buildings, landmarks, and other geographic features. 2)GTFS: The General Transit Feed Specification (GTFS) is a data format that describes public transportation schedules and related geographic information. It includes information about transit routes, stops, and schedules. | The authors found that their mobile application for multimodal trip planning was able to provide users with efficient and personalized transportation options. The application was able to generate routes that combined different modes of transportation, such as walking, cycling, driving, and public transportation, based on user preferences and real-time traffic information. The authors also found that the application was able to accurately estimate the travel time and cost for each route, taking into account the mode of transportation and the user's preferences for time, cost, and environmental impact. Users were able to compare and select the most suitable route based on their individual needs and constraints. Overall, the authors concluded that their mobile application could potentially improve the quality of transportation services and reduce the environmental impact of travel by promoting the use of more sustainable modes of transportation. | coverage area of the implemented system, which is currently only available in the city of Thessaloniki in Greece. Another limitation is that the system heavily relies on data provided by external sources, such as public transport schedules and real-time traffic information, which may not always be accurate or up-to-date. Additionally, the study did not consider the impact of weather conditions on the suggested routes and modes of transportation, which could potentially affect the user experience | L. Guan, X. Ke, M. Song and J. Song, “A Survey of Research on Mobile Cloud Computing,” 10th International Conference on Computer and Information Science (ICIS), pp. 387–392, Sanya, China, 2011. [2] S. Siuhi and J. Mwakalonge, “Opportunities and challenges of smart mobile applications in transportation,” Journal of Traffic and Transportation Engineering, vol. 3, no. 6, pp. 582–592, 2016. [3] S. Siuhi and J. Mwakalonge, “Smart Mobility for Smart Cities,” Hitachi Review, vol. 61, no. 3, pp. 141–146, 2012. [4] Maria Bulgheroni, Enrico d’Amico, Chiara Bonizzi, Maria Chiara Campodonico (Ab.Acus), “D1.1 The Social Arena”, 2015. [5] Mobile Together, 2015, [Online] Available: https://mobiletogether.wordpress.com/. [Accessed: Apr. 25, 2018]. [6] Spreeproject, 2012, [Online] Available: http://spreeproject.com/. [Accessed: Apr. 25, 2018]. [7] E. W. Dijkstra, “A note on two problems in connexion with graphs,” Numerische Mathematik, vol. 1, pp. 269–271, 1959. [8] P. E. Hart, N. J. Nilsson and B. Raphael, “A formal basis for the heuristic determination of minimum cost paths,” IEEE Transaction on Systems Science and Cybernetics, vol. 4(2), pp. 100–107, 1968. [9] R. H. Möhring, H. Schilling, B. Schütz, D. Wagner and T. Willhalm, “Partitioning Graphs to Speed Up Dijkstra’s Algorithm,” Journal of Experimental Algorithmics, vol. 11, no. 2.8, pp. 1–29, 2006. [10] H. Bast, S. Funke, D. Matijevic, P. Sanders and D. Schultes, “In transit to constant time shortest-path queries in road networks,” Meeting on Algorithm Engineering and Expermiments, pp. 46–59, 2007. |



### Methodologies
1. Paper Title :  A Mobile Application for Multimodal Trip Planning
    Requirement Analysis: The authors first analyzed the requirements of the mobile application for multimodal trip planning. They studied the existing multimodal transportation systems and identified the shortcomings and challenges that needed to be addressed. Design: Based on the requirement analysis, the authors designed the architecture of the mobile application. They decided to use a client-server architecture and selected appropriate technologies for implementation. Data Collection: The authors collected data from various sources, including public transportation systems, private transportation providers, and other third-party services. They also collected data on user preferences and feedback through surveys and focus groups. Data Processing: The collected data was processed and integrated into the application's database. The authors developed algorithms for route planning and selection, taking into account various factors such as travel time, cost, and user preferences. Implementation: The mobile application was implemented using the selected technologies and tested for functionality and usability. The application was developed for both Android and iOS platforms. User Testing: The authors conducted user testing to evaluate the performance and user experience of the application. They collected feedback from users and made necessary improvements to the application. Deployment: The mobile application was deployed on the Google Play Store and the Apple App Store, making it available to users worldwide. Evaluation: The authors evaluated the performance of the mobile application based on various metrics such as user ratings, download numbers, and usage statistics. They also compared the application's performance with existing multimodal transportation systems.
2. Paper Title : A Multi-Modal and Multi-Objective Journey Planner for Integrating Carpooling and Public Transport
    Problem definition: The first stage involves defining the problem to be addressed by the journey planner. This includes identifying the objectives of the planner, such as reducing travel time, minimizing travel costs, and reducing carbon emissions. Data collection: The next stage involves collecting data on the transport network, including information on carpooling services, public transport schedules, and travel time and cost data. This data can be obtained from various sources, such as public transport authorities, carpooling services, and travel surveys. Algorithm development: The journey planner algorithm is then developed based on the collected data and the identified objectives. The algorithm is designed to optimize travel routes based on multiple modes of transport, including carpooling and public transport. Simulation and testing: The next stage involves simulating the journey planner to test its performance in various scenarios. This includes testing the planner for different travel routes, travel times, and travel modes, as well as different user preferences and objectives. Optimization: Based on the simulation results, the journey planner algorithm is optimized to improve its performance in terms of the identified objectives. Integration: The final stage involves integrating the journey planner with existing transport services, such as carpooling and public transport providers. This includes developing interfaces between the planner and these services to enable seamless integration.
3. Paper Title : A Multimodal Trip Planning System Incorporating the Park-and-Ride Mode and Real-time Traffic/Transit Information
    Problem definition: The first stage involves defining the problem to be addressed by the trip planning system. This includes identifying the objectives of the system, such as reducing travel time, minimizing travel costs, and improving user convenience by integrating the park-and-ride mode and real-time traffic/transit information. Data collection: The next stage involves collecting data on the transport network, including information on traffic flows, public transport schedules, and park-and-ride facilities. This data can be obtained from various sources, such as transport authorities, park-and-ride operators, and traffic sensors. Algorithm development: The trip planning algorithm is then developed based on the collected data and the identified objectives. The algorithm is designed to optimize travel routes based on multiple modes of transport, including private vehicles, park-and-ride facilities, and public transport, as well as real-time traffic/transit information. Simulation and testing: The next stage involves simulating the trip planning system to test its performance in various scenarios. This includes testing the system for different travel routes, travel times, and travel modes, as well as different user preferences and objectives. Optimization: Based on the simulation results, the trip planning algorithm is optimized to improve its performance in terms of the identified objectives. Integration: The final stage involves integrating the trip planning system with existing transport services, such as public transport providers and park-and-ride operators. This includes developing interfaces between the system and these services to enable seamless integration.

### References

##### Scholarly References
- Huang, Y., Ying, J. J. C., Yu, P. S., & Tseng, V. S. (2020). Dynamic graph mining for multi-weight multi-destination route planning with deadlines constraints. ACM Transactions on Knowledge Discovery from Data (TKDD), 15(1), 1-32. [[doi link]](https://doi.org/10.1145/3412363)
- Chowdhury, S., & Giacaman, N. (2015). En-route planning of multi-destination public-transport trips using smartphones. Journal of Public Transportation, 18(4), 31-45. [[doi link]](https://doi.org/10.5038/2375-0901.18.4.3)
- Hakeem, A., Gehani, N., Ding, X., Curtmola, R., & Borcea, C. (2019, November). Multi-destination vehicular route planning with parking and traffic constraints. In Proceedings of the 16th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (pp. 298-307) [[doi link]](https://doi.org/10.1145/3360774.3360824)
- Nanayakkara, S. C., Srinivasan, D., Lup, L. W., German, X., Taylor, E., & Ong, S. H. (2007, September). Genetic algorithm based route planner for large urban street networks. In 2007 IEEE Congress on Evolutionary Computation (pp. 4469-4474). IEEE [[doi link]](https://doi.org/10.1109/CEC.2007.4425056)
- Edelkamp, S., Jabbar, S., & Willhalm, T. (2005). Geometric travel planning. IEEE Transactions on Intelligent Transportation Systems, 6(1), 5-16. [[doi link]](https://doi.org/10.1109/TITS.2004.838182)

##### Web References
- https://pgrouting.org/
- https://www.openstreetmap.org/
- https://developers.google.com/maps/documentation/javascript/distancematrix
- https://www.w3schools.com/graphics/google_maps_basic.asp
- https://www.upperinc.com/blog/what-is-multi-stop-route-planning/
- https://pretalx.com/sotm-africa-2021/talk/7YHERU/
- https://memgraph.com/blog/how-to-build-a-route-planning-application-with-breadth-first-search-and-dijkstras-algorithm
- https://towardsdatascience.com/driving-distance-between-two-or-more-places-in-python-89779d691def

##### Learning Resources
- [Markdown cheatsheet for preparing Readme.md](https://github.com/christianlempa/cheat-sheets/blob/main/misc/markdown.md)
- [How to use an API tutorial](https://www.youtube.com/watch?v=WXsD0ZgxjRw)
- [pgRouting Workshop - Self Study](http://workshop.pgrouting.org/2.8/en/index.html)
- [Using OpenStreetMAP data with pgRouting](https://medium.com/@frederic.rodrigo/imposm2pgrouting-route-planning-on-openstreetmap-road-network-with-the-benefit-of-updates-1e70f280ac5e)
- [Loading data from OpenStreet Map API](https://towardsdatascience.com/loading-data-from-openstreetmap-with-python-and-the-overpass-api-513882a27fd0)





