import React, {Component} from 'react';
import LightboxGallery from '../../containers/lightbox/LightboxGallery';
import {GalleryItems} from "../../constants/Images.js";
import Header from '../header/Header';
import {Grid, Row, Col} from  'react-bootstrap';

const HeaderTitle = {
    title: "Фотогалерея",
    name: 'садиби "У діда Віктора"'
};

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <Header title={HeaderTitle}/>

                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className="gallery__title">Lorem Ipsum is simply</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="gallery__title">Літо - грибна пора</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="gallery__title">Відпочинок в Яремчі - вибирайте на свій смак!</div>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Gallery;