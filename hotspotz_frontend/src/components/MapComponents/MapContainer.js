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
        super(props);
        this.state={
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    render() {
        const {directions} = this.state;
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
            draggable={false}
            maxZoom={13}
            minZoom={13}
            zoomControl={false}
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
            >
            <Marker
                name={'Gaslamp District'}
                position={{lat: 32.709960, lng: -117.160484}}
             />
             <Marker
                 name={'Marina / Embarcadero'}
                 position={{lat: 32.712684, lng: -117.170946}}
              />
              <Marker
                  name={'East Village'}
                  position={{lat: 32.712125, lng: -117.151177}}
               />
                <Marker
                   name={'Little Italy'}
                   position={{lat: 32.723399, lng: -117.168674}}
                />
                <Marker
                    name={'North Park'}
                    position={{lat: 32.744298, lng: -117.129502}}
                 />
                 <Marker
                     name={'Hillcrest'}
                     position={{lat: 32.746665, lng: -117.163903}}
                  />
                  <Marker
                      name={'Coronado'}
                      position={{lat: 32.691691, lng: -117.179235}}
                   />
                   <Marker
                       name={'Shelter Island Area'}
                       position={{lat: 32.724563, lng: -117.228456}}
                    />
                    <Marker
                        name={'Ocean Beach'}
                        position={{lat: 32.749101, lng: -117.247127}}
                     />
                     <Marker
                         name={'Loma Portal'}
                         position={{lat: 32.740971, lng: -117.219255}}
                      />
                      <Marker
                          name={'Balboa Park'}
                          position={{lat: 32.731768, lng: -117.145115}}
                       />
          </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBgbfJVHfoSxGIRmnljuROfeQQHkTJQuUk')
})(MapContainer)
