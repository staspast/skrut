import React from 'react';
import {Grid, Row, Col, Tab, Tabs} from  'react-bootstrap';
import Header from  './Header';
import LightboxGallery from '../containers/LightboxGallery';
import {GalleryItems} from "../constants/Images.js";

const Offers = () =>
    <div className="offers">
        <Header/>

        <Grid>
            <Tabs defaultActiveKey={1} id="offers-tabs">
                <Tab eventKey={1} title="Перший номер">
                    <Row>
                        <Col md={5}>
                            <div className="offers-title">Перший номер</div>

                            <div className="offers-information">
                                <div>Інформація про номер:</div>
                                <ul>
                                    <li>Вітальня, 16 кв. м.</li>
                                    <li>Спальня 15 кв.</li>
                                    <li>Санвузол 9 м.кв.</li>
                                </ul>
                                <div>Вміст:</div>
                                <ul>
                                    <li>Розкладна канапа "американка" 1,60х2,00</li>
                                    <li>Холодильник</li>
                                    <li>Телевізор (SAt TV Hotbirt, Sirius, Amos)</li>
                                    <li>шафа для речей</li>
                                    <li>Велике дерев`яне ліжко 2.00x1.80</li>
                                    <li>фен</li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={7}>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey={2} title="Другий номер">
                    <Row>
                        <Col md={5}>
                            <div>Другий номер</div>

                            <div className="offers-information">
                                <div>Інформація про номер:</div>
                                <ul>
                                    <li>Вітальня, 16 кв. м.</li>
                                    <li>Спальня 15 кв.</li>
                                    <li>Санвузол 9 м.кв.</li>
                                </ul>
                                <div>Вміст:</div>
                                <ul>
                                    <li>Розкладна канапа "американка" 1,60х2,00</li>
                                    <li>Холодильник</li>
                                    <li>Телевізор (SAt TV Hotbirt, Sirius, Amos)</li>
                                    <li>шафа для речей</li>
                                    <li>Велике дерев`яне ліжко 2.00x1.80</li>
                                    <li>фен</li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={7}>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Grid>
    </div>;

export default Offers;