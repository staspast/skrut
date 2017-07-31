/*global google*/

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps/lib";
import StyleMap from "../../constants/StyleMap.json";

const StyledMapExampleGoogleMap = withGoogleMap( props => (
    <GoogleMap
        defaultZoom={18}
        defaultCenter={ props.center }
        defaultOptions={{ styles: StyleMap }}
    >
      <Marker
        position={{lat: 48.450210, lng: 24.557167}}
        name='У Діда Віктора'
      />
    </GoogleMap>
));

export default class StyledMapExample extends Component {
    render() {
        return (
            <StyledMapExampleGoogleMap
                containerElement={
                    <div style={{ height: `400px` }} />
                }
                mapElement={
                    <div style={{ height: `400px` }} />
                }
                center={ new google.maps.LatLng(48.450210, 24.557167) }
                onClickFromChildrenOfInfoBox={ this.handleClickFromChildrenOfInfoBox }
            />
        );
    }
}