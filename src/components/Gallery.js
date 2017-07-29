import React, { Component } from 'react';
import LightboxGallery from '../containers/LightboxGallery';
import Header from '../components/Header';
import { Grid, Row, Col } from  'react-bootstrap';
import { GalleryItems } from "../constants/Images.js";

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <Header/>

                <Grid>
                    <Row>
                        <Col>
                            <h3>Lorem Ipsum is simply</h3>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Lorem Ipsum is simply</h3>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Lorem Ipsum is simply</h3>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Gallery;