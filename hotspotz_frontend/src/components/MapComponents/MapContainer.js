import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const styles = {
  map: {
    maxWidth: '70%',
    margin: '5% auto 0'
  },
  container: {
    minHeight: '750px',
    maxHeight: '800px',
    height: '75%'
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

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

    render() {
        const {directions} = this.state;
        return (
          <Map
            google={this.props.google}
            onClick={this.onMapClicked}
            zoom={12}
            style={styles.map}
            containerStyle={styles.container}
            initialCenter={{
                lat: 32.7301,
                lng:-117.1997
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
                onClick={this.onMarkerClick}
                position={{lat: 32.709960, lng: -117.160484}}
             />
             <Marker
                 name={'Marina / Embarcadero'}
                 onClick={this.onMarkerClick}
                 position={{lat: 32.712684, lng: -117.170946}}
              />
              <Marker
                  name={'East Village'}
                  onClick={this.onMarkerClick}
                  position={{lat: 32.712125, lng: -117.151177}}
               />
                <Marker
                   name={'Little Italy'}
                   onClick={this.onMarkerClick}
                   position={{lat: 32.723399, lng: -117.168674}}
                />
                <Marker
                    name={'North Park'}
                    onClick={this.onMarkerClick}
                    position={{lat: 32.744298, lng: -117.129502}}
                 />
                 <Marker
                     name={'Hillcrest'}
                     onClick={this.onMarkerClick}
                     position={{lat: 32.746665, lng: -117.163903}}
                  />
                  <Marker
                      name={'Coronado'}
                      onClick={this.onMarkerClick}
                      position={{lat: 32.691691, lng: -117.179235}}
                   />
                   <Marker
                       name={'Shelter Island Area'}
                       onClick={this.onMarkerClick}
                       position={{lat: 32.724563, lng: -117.228456}}
                    />
                    <Marker
                        name={'Ocean Beach'}
                        onClick={this.onMarkerClick}
                        position={{lat: 32.749101, lng: -117.247127}}
                     />
                     <Marker
                         name={'Loma Portal'}
                         onClick={this.onMarkerClick}
                         position={{lat: 32.740971, lng: -117.219255}}
                      />
                      <Marker
                          name={'Balboa Park'}
                          onClick={this.onMarkerClick}
                          position={{lat: 32.731768, lng: -117.145115}}
                       />

               <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    <h2>Rating: {this.state.selectedPlace.rating}</h2>
                  </div>
              </InfoWindow>
          </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBgbfJVHfoSxGIRmnljuROfeQQHkTJQuUk')
})(MapContainer)
