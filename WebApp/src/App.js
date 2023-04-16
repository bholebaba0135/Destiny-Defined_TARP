// import { useState } from "react";
// import "./App.css";
// import { GoogleMap, Marker, DirectionsService } from "@react-google-maps/api";

// const cities = [
//   { name: "New York, NY", location: [-73.935242, 40.73061] },
//   { name: "Los Angeles, CA", location: [-118.243683, 34.052235] },
//   { name: "Chicago, IL", location: [-87.629799, 41.878114] },
//   { name: "Houston, TX", location: [-95.369803, 29.760427] },
//   { name: "Philadelphia, PA", location: [-75.165222, 39.952583] },
//   { name: "Phoenix, AZ", location: [-112.074037, 33.448376] },
//   { name: "San Antonio, TX", location: [-98.493628, 29.424122] },
//   { name: "San Diego, CA", location: [-117.161087, 32.715736] },
//   { name: "Dallas, TX", location: [-96.796988, 32.776665] },
//   { name: "San Jose, CA", location: [-121.886329, 37.338207] },
// ];

// function App() {
//   const [distance, setDistance] = useState(null);

//   const [numCities, setNumCities] = useState(0);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [submitted, setSubmitted] = useState(false);

//   // const calculateDistance = () => {
//   //   if (selectedCities.length === 2) {
//   //     const origin = selectedCities[0];
//   //     const destination = selectedCities[1];
//   //     const directionsService = new window.google.maps.DirectionsService();

//   //     directionsService.route(
//   //       {
//   //         origin: { query: origin },
//   //         destination: { query: destination },
//   //         travelMode: window.google.maps.TravelMode.DRIVING,
//   //       },
//   //       (result, status) => {
//   //         if (status === window.google.maps.DirectionsStatus.OK) {
//   //           const distance = result.routes[0].legs[0].distance.text;
//   //           setDistance(distance);
//   //         }
//   //       }
//   //     );
//   //   }
//   // };

//   const handleNumCitiesChange = (event) => {
//     const value = event.target.value;
//     setNumCities(value);
//   };

//   const handleCitySelect = (event, index) => {
//     const value = event.target.value;
//     const newSelectedCities = [...selectedCities];
//     newSelectedCities[index] = value;
//     setSelectedCities(newSelectedCities);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//     // calculateDistance();
//   };

//   const handleReset = () => {
//     setNumCities(0);
//     setSelectedCities([]);
//     setSubmitted(false);
//   };

//   const renderCityInput = (index) => {
//     return (
//       <div key={index}>
//         <label htmlFor={`city-${index}`}>{`City ${index + 1}`}</label>
//         <select
//           id={`city-${index}`}
//           onChange={(event) => handleCitySelect(event, index)}
//         >
//           <option value="">Select a city</option>
//           {cities.map((city) => (
//             <option key={city.name} value={city.name}>
//               {city.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   };

//   const cityInputs = [];
//   for (let i = 0; i < numCities; i++) {
//     cityInputs.push(renderCityInput(i));
//   }

//   let cityList;
//   if (submitted) {
//     cityList = (
//       <div className="city-list">
//         <h2>Your selected cities:</h2>
//         <ol>
//           {selectedCities.map((city) => (
//             <li key={city}>{city}</li>
//           ))}
//         </ol>
//         {distance && <p>Driving distance: {distance}</p>}
//         <button onClick={handleReset}>Reset Cities</button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="App">
//         <h1>Plan Your Trip</h1>
//         {!submitted ? (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="num-cities">Number of cities:</label>
//             <input
//               type="number"
//               id="num-cities"
//               min="1"
//               onChange={handleNumCitiesChange}
//             />
//             {cityInputs}
//             <button type="submit">Submit</button>
//           </form>
//         ) : (
//           cityList
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import CityDetails from "./CityDetails.js";
import { GoogleMap, Marker, DirectionsService } from "@react-google-maps/api";
// import { Polyline } from "react-leaflet";

const cities = [
  { name: "New York, NY", location: [-73.935242, 40.73061] },
  { name: "Los Angeles, CA", location: [-118.243683, 34.052235] },
  { name: "Chicago, IL", location: [-87.629799, 41.878114] },
  { name: "Houston, TX", location: [-95.369803, 29.760427] },
  { name: "Philadelphia, PA", location: [-75.165222, 39.952583] },
  { name: "Phoenix, AZ", location: [-112.074037, 33.448376] },
  { name: "San Antonio, TX", location: [-98.493628, 29.424122] },
  { name: "San Diego, CA", location: [-117.161087, 32.715736] },
  { name: "Dallas, TX", location: [-96.796988, 32.776665] },
  { name: "San Jose, CA", location: [-121.886329, 37.338207] },
  { name: "Jaipur, India", location: [75.7873, 26.9124] },
  { name: "Delhi, India", location: [77.1025, 28.7041] },
  { name: "Pune, India", location: [73.8567, 18.5204] },
  { name: "Mumbai, India", location: [72.8777, 19.076] },
  { name: "Kolkata, India", location: [88.3639, 22.5726] },
  { name: "Bengaluru, India", location: [77.5946, 12.9716] },
  { name: "Hyderabad, India", location: [78.4867, 17.385] },
  { name: "Kanpur, India", location: [80.3319, 26.4499] },
];

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

function App() {
  const [distance, setDistance] = useState(null);
  const [polylines, setPolylines] = useState([]);
  const center = {
    lat: 19.076,
    lng: 72.8777,
  };
  const [numCities, setNumCities] = useState(0);
  const [selectedCities, setSelectedCities] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   center: { lat: 37.7749, lng: -122.4194 },
  //   zoom: 8,
  // });
  // const calculateDistance = () => {
  //   if (selectedCities.length === 2) {
  //     const origin = selectedCities[0];
  //     const destination = selectedCities[1];
  //     const directionsService = new window.google.maps.DirectionsService();
  //     console.log("origin", origin);
  //     console.log("destination", destination);

  //     directionsService.route(
  //       {
  //         origin: { query: origin },
  //         destination: { query: destination },
  //         travelMode: window.google.maps.TravelMode.DRIVING,
  //       },
  //       (result, status) => {
  //         if (status === window.google.maps.DirectionsStatus.OK) {
  //           const distance = result.routes[0].legs[0].distance.text;
  //           console.log("distance", distance);
  //           setDistance(distance);
  //         }
  //       }
  //     );
  //   }
  // };

  const calculateDistance = () => {
    if (selectedCities.length >= 2) {
      const origin = selectedCities[0];
      const destination = selectedCities[selectedCities.length - 1];
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: { query: origin },
          destination: { query: destination },
          waypoints: selectedCities
            .slice(1, -1)
            .map((city) => ({ location: city })),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            const distance = result.routes[0].legs[0].distance.text;
            console.log("distance", distance);
            setDistance(distance);

            const polylineCoordinates = result.routes[0].overview_path.map(
              (location) => ({
                lat: location.lat(),
                lng: location.lng(),
              })
            );
            setPolylines([polylineCoordinates]);
          }
        }
      );
    }
  };

  const handleNumCitiesChange = (event) => {
    const value = event.target.value;
    setNumCities(value);
  };

  const handleCitySelect = (event, index) => {
    const value = event.target.value;
    const newSelectedCities = [...selectedCities];
    newSelectedCities[index] = value;
    setSelectedCities(newSelectedCities);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // calculateDistance();
  };

  const handleReset = () => {
    setNumCities(0);
    setSelectedCities([]);
    setSubmitted(false);
  };

  const renderCityInput = (index) => {
    return (
      <div key={index}>
        <label htmlFor={`city-${index}`}>{`City ${index + 1}`}</label>
        <select
          id={`city-${index}`}
          onChange={(event) => handleCitySelect(event, index)}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  const renderCitiesInputs = () => {
    const inputs = [];
    for (let i = 0; i < numCities; i++) {
      inputs.push(renderCityInput(i));
    }

    return inputs;
  };
  const renderResult = () => {
    if (submitted && distance) {
      return (
        <div className="result">
          The distance between {selectedCities[0]} and {selectedCities[1]} is{" "}
          {distance}.
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="App">
        <h1>Distance Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="num-cities">Number of cities:</label>
            <input
              id="num-cities"
              type="number"
              min="2"
              value={numCities}
              onChange={handleNumCitiesChange}
              required
            />
          </div>
          {renderCitiesInputs()}
          <button type="submit">Calculate distance</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        {renderResult()}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={4}
          center={center}
        >
          {cities.map((city) => (
            <Marker
              key={city.name}
              position={{ lat: city.location[1], lng: city.location[0] }}
            />
          ))}
          {submitted && selectedCities.length === 2 && (
            <DirectionsService
              options={{
                destination: selectedCities[1],
                origin: selectedCities[0],
                travelMode: "DRIVING",
              }}
              callback={(result) => {
                if (result !== null) {
                  console.log(result);
                }
              }}
            />
          )}
        </GoogleMap>
        {/* <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={4}
          center={center}
          // onLoad={onMapLoad}
        >
          {polylines.map((polyline) => (
            <Polyline path={polyline} options={{ strokeColor: "red" }} />
          ))}
        </GoogleMap> */}
      </div>
      {/* <CityDetails /> */}
    </>
  );
}

export default App;
