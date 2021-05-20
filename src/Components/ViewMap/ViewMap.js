import React from 'react'
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
    lat: 23.818357,lng: 90.392848
};

const onLoad = polygon => {
    console.log("polygon: ", polygon);
  }

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 }
  ]
  
  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1
  }

function Map() {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC0F5DNnDRiota6SU7UuU4qofmwwRMyynY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
          <Marker
          onLoad = {onLoad}
          position={center}
          />

        <Polygon
      onLoad={onLoad}
      paths={paths}
      options={options}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)

