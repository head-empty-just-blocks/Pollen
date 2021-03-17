import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as secrets from '../secrets'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Projects extends Component {
 static defaultProps = {
    center: {
      lat:  40.75,
      lng: -73.99
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: secrets.api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
};


export default Projects
