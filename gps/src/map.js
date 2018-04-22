import React, { Component } from 'react'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Mapgoogle = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: -25.208737, lng: -50.977415 }}
    >
        <Marker position={{ lat: -25.208737, lng: -50.977415 }} />
    </GoogleMap>
))

class Map extends Component {
    constructor() {
        super()
        this.state = { lat: -25.208737, lng: -50.977415 }
    }

    test() {
        this.setState({...this.state, lat: this.state.lat+0.00001})
    }

    render() {

        return (
            <div>
                <GoogleMap
                    defaultZoom={17}
                    center={{...this.state}}
                >
                    <Marker position={{...this.state}} />
                </GoogleMap>
                <button onClick={() => {this.test()}}>Click</button>
            </div>
        );
    }
}

export default withScriptjs(withGoogleMap(Map));