# Destiny-Defined_TARP

### Project Title 

Mutli Destination Most Optimal Route Planner

### Development Model

Iterative Waterfall

### Roles and Responsibilities

### Software Requirements

- Leaflet Library
- OpenChargeMap API
- OpenStreetMap API

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

### Work Breakdown Structure

```mermaid
graph TD
id1[Multi Stop Route Planner] --> id2[Planning<br>&<br>Modelling]
id1 --> id3[Construction/Coding]
id1 --> id4[Integration<br>and<br>Testing]
id1 --> id5[Deployment]
id2 --> id2a[literature Survey]
id2a --> id2a1[Determination of<br>Suitable Algorithm]
id2 --> id2b[Feasibility analysis]
id2b --> id2b1[Regular consutations<br>from<br>Manoov Sir]
id2b --> id2b2[Feedback<br>from<br>IT specialists]
id2 --> id2c[Identification<br>of<br>Modules]
id2c --> id2c1[updation<br>of<br>module list]
id3 --> id3a[Dynamic web/app Interface]
id3a --> id3a1[GET<br>no. of destinations]
id3a --> id3a2[RETURN<br>relavant no. of dropdowns]
id3a --> id3a3[Get<br>destinations]
id3a --> id3a4[Highlight<br>destination nodes]
id3 --> id3b[Synchronizing<br>search request<br>to<br>Open Source Map Data]
id3 --> id3c[Determination<br>of<br>Most Optimal Path]
id3 --> id3d[Higlight<br>the<br>calculated path<br>on<br>map routes]


```

### Dependencies

- mermaid-js (for documentation)
- Nominatim API (Allows geocoding and reverse geocoding which in turn allows to both search a coordinate by name as well as find the coordinates of a destination to determine the closest nodes/destinations tot that destination)

### Resources

##### 1. Reference and Learning
- [Markdown cheatsheet for preparing Readme.md](https://github.com/christianlempa/cheat-sheets/blob/main/misc/markdown.md)
- [How to use an API tutorial](https://www.youtube.com/watch?v=WXsD0ZgxjRw)

##### 2. Databases
- OpenStreetMap (OSM) - PostgreSQL based

![](osm_data.png)


- pgRouting (Represents the city as a weighted graph and helps implement several routing algorithms)


