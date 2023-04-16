import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

function CityDetails() {
  const center = { lat: 40.712776, lng: -74.005974 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDEwj0i4GtUM7vXvVH629NWETdxkC-Eje0">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default CityDetails;
