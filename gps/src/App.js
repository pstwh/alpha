import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import ReactMapGL from 'react-map-gl'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import 'mapbox-gl/dist/mapbox-gl.css'

const home = () => (
  <ul>
    <li><Link to="/">home</Link></li>
    <li><Link to="/gl">gl</Link></li>
    <li><Link to="/google">google</Link></li>
  </ul>
)

const Mapgl = () => (
  <ReactMapGL
    width={window.innerWidth}
    height={window.innerHeight}
    latitude={-25.208737}
    longitude={-50.977415}
    zoom={17}
    onViewportChange={(viewport) => {
      const { width, height, latitude, longitude, zoom } = viewport;
    }}
  />
)


const Mapgoogle = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -25.208737, lng: -50.977415 }}
  >
    <Marker position={{ lat: -25.208737, lng: -50.977415 }} />
  </GoogleMap>
))

const Mapgooglewrap = () => (
  <Mapgoogle
    isMarkerShown
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `700px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"/>
          <Route path="/gl" component={Mapgl}/>
          <Route path="/google" component={Mapgooglewrap}/>
        </div>
      </Router>
    );
  }
}

export default App;
