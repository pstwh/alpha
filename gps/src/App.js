import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Map from './map'

const home = () => (
  <ul>
    <li><Link to="/">home</Link></li>
    <li><Link to="/map">map</Link></li>
  </ul>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"/>
          <Route path="/map" component={() => (
            <Map
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `700px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
