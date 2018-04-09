import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Navigation from '../../components/Navigation';
import '../../css/Navigation.css';
import { Link, Router } from 'react-router-dom'


const styles = {
  map: {
    maxWidth: '1100px',
    margin: '5% auto 0'
  },
  container: {
    minHeight: '750px',
    maxHeight: '800px',
    height: '75%'
  },
  infoStyle: {
    fontSize: '28px',
    color: '#a3c1ad'
  }
};

export class MapContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            url: 'http://localhost:3001',
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
        <div>
          <Navigation />
          <div className = "destination">
            Pick Your Destination Point
          </div>
          <div className = "border">
          <Map className = "mapborder"
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
                url={'http://localhost:3001/gaslamp'}
                position={{lat: 32.709960, lng: -117.160484}}
                icon={"https://png.icons8.com/ios/50/1abc9c/1-circle-filled.png"}
             />
              <Marker
                  name={'East Village'}
                  onClick={this.onMarkerClick}
                  url={'http://localhost:3001/eastvillage'}
                  position={{lat: 32.712125, lng: -117.151177}}
                  icon={"https://png.icons8.com/ios/50/1abc9c/2-circle-filled.png"}
               />
                <Marker
                   name={'Little Italy'}
                   onClick={this.onMarkerClick}
                   url={'http://localhost:3001/littleitaly'}
                   position={{lat: 32.723399, lng: -117.168674}}
                   icon={"https://png.icons8.com/ios/50/1abc9c/3-circle-filled.png"}
                />
                <Marker
                    name={'North Park'}
                    onClick={this.onMarkerClick}
                    url={'http://localhost:3001/northpark'}
                    position={{lat: 32.744298, lng: -117.129502}}
                    icon={"https://png.icons8.com/ios/50/1abc9c/4-circle-filled.png"}
                 />
                 <Marker
                     name={'Hillcrest'}
                     onClick={this.onMarkerClick}
                     url={'http://localhost:3001/hillcrest'}
                     position={{lat: 32.746665, lng: -117.163903}}
                     icon={"https://png.icons8.com/ios/50/1abc9c/5-circle-filled.png"}
                  />
                  <Marker
                      name={'Coronado'}
                      url={'http://localhost:3001/coronado'}
                      onClick={this.onMarkerClick}
                      position={{lat: 32.691691, lng: -117.179235}}
                      icon={"https://png.icons8.com/ios/50/1abc9c/6-circle-filled.png"}
                   />
                   <Marker
                       name={'Shelter Island Area'}
                       url={'http://localhost:3001/shelterisland'}
                       onClick={this.onMarkerClick}
                       position={{lat: 32.724563, lng: -117.228456}}
                       icon={"https://png.icons8.com/ios/50/1abc9c/7-circle-filled.png"}
                    />
                    <Marker
                        name={'Ocean Beach'}
                        url={'http://localhost:3001/oceanbeach'}
                        onClick={this.onMarkerClick}
                        position={{lat: 32.749101, lng: -117.247127}}
                        icon={"https://png.icons8.com/ios/50/1abc9c/8-circle-filled.png"}
                     />
                     <Marker
                         name={'Loma Portal'}
                         url={'http://localhost:3001/lomaportal'}
                         onClick={this.onMarkerClick}
                         position={{lat: 32.740971, lng: -117.219255}}
                         icon={"https://png.icons8.com/ios/50/1abc9c/9-circle-filled.png"}
                      />

               <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <a style={styles.infoStyle} href={this.state.selectedPlace.url}>{this.state.selectedPlace.name}</a>
                  </div>
              </InfoWindow>
          </Map>
          </div>
          </div>

    );
  }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBgbfJVHfoSxGIRmnljuROfeQQHkTJQuUk')
})(MapContainer)
