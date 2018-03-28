import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const styles = {
  map: {
    maxWidth: '85%',
    margin: '5% auto 0'
  },
  container: {
    minHeight: '750px',
    maxHeight: '800px',
    height: '70%'
  }
};

export class MapContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userLocationCoord: {}
        }
    }

    render() {
        return (
          <Map
            google={this.props.google}
            zoom={12}
            style={styles.map}
            containerStyle={styles.container}
            initialCenter={{
                lat: 32.7157,
                lng: -117.1611
            }}
            zoom={13}
            >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
          </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBgbfJVHfoSxGIRmnljuROfeQQHkTJQuUk')
})(MapContainer)
