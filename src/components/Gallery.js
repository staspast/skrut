import React, { Component } from 'react';
import LightboxGallery from '../containers/LightboxGallery';
import Header from '../components/Header';
import { Grid} from  'react-bootstrap';


class Gallery extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        return (
            <div className="gallery">
                <Header/>

                <Grid>
                    <LightboxGallery/>
                </Grid>
            </div>
        )
    }
}

export default Gallery;