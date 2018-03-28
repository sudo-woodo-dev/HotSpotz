import React, { Component } from 'react';
import InitialMap from './MapComponents/MapContainer.js'
import '../css/App.css';


class Home extends Component {
    render() {
      return (
        <div id='map'>
            <InitialMap />
        </div>
      );
    }
}

export default Home



//     createMap = React.createClass({
//
//         componentDidMount: function() {
//             // Connect the initMap() function within this class to the global window context,
//             // so Google Maps can invoke it
//             window.initMap = this.initMap;
//             // Asynchronously load the Google Maps script, passing in the callback reference
//             loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBgbfJVHfoSxGIRmnljuROfeQQHkTJQuUk&callback=initMap')
//         },
//
//         initMap: function() {
//             map = new google.maps.Map(this.refs.map.getDOMNode());
//         },
//
//         render: function() {
//                 return (
//                     <div>
//                         <div ref="map" style="height: '500px', width: '500px'"></div>
//                     </div>
//                 );
//         }
//     });
//
//     loadJS(src): {
//         ref: window.document.getElementsByTagName("script")[0];
//         script window.document.createElement("script");
//         script.src = src;
//         script.async = true;
//         ref.parentNode.insertBefore(script, ref);
//     }
// }
