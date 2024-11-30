import React from "react";
import "./Kontakt.css";
import GoogleMap from "component/GoogleMap/GoogleMap";
// import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

function Kontakt() {

  const location = { latitude: 48.8584, longitude: 2.2945 };

  return (
    <>
    <GoogleMap latitude={location.latitude} longitude={location.longitude} />
    </>
  );
}

export default Kontakt;
