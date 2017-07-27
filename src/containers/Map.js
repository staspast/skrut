/*global google*/

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps/lib";
import InfoBox from "react-google-maps/lib/addons/InfoBox";
import StyleMap from "../constants/StyleMap.json";

const StyledMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={5}
        defaultCenter={props.center}
        defaultOptions={{ styles: StyleMap }}
    >
        <InfoBox
            defaultPosition={props.center}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div
                style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `20px` }}
                onClick={props.onClickFromChildrenOfInfoBox}
            >
                <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                    Taipei
                </div>
            </div>
        </InfoBox>
    </GoogleMap>
));

export default class StyledMapExample extends Component {

    handleClickFromChildrenOfInfoBox = this.handleClickFromChildrenOfInfoBox.bind(this);

    handleClickFromChildrenOfInfoBox(e) {
        console.log(`handleClickFromChildrenOfInfoBox!!`);
        console.log(e);
    }

    render() {
        return (
            <StyledMapExampleGoogleMap
                containerElement={
                    <div style={{ height: `400px` }} />
                }
                mapElement={
                    <div style={{ height: `400px` }} />
                }
                center={new google.maps.LatLng(25.03, 121.6)}
                onClickFromChildrenOfInfoBox={this.handleClickFromChildrenOfInfoBox}
            />
        );
    }
}