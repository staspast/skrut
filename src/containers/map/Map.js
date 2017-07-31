/*global google*/

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps/lib";
import StyleMap from "../../constants/StyleMap.json";

const StyledMapExampleGoogleMap = withGoogleMap( props => (
    <GoogleMap
        defaultZoom={5}
        defaultCenter={ props.center }
        defaultOptions={{ styles: StyleMap }}
    />
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
                center={ new google.maps.LatLng(25.03, 121.6) }
            />
        );
    }
}