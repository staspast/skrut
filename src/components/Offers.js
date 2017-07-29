import React from 'react';
import { Grid, Row, Col, Tab, Tabs } from  'react-bootstrap';
import Header from  './Header';
import LightboxGallery from '../containers/LightboxGallery';
import { GalleryItems } from "../constants/Images.js";

const Offers = () =>
    <div className="offers">
        <Header/>

        <Grid>
            <Tabs defaultActiveKey={1} id="offers-tabs">
                <Tab eventKey={1} title="Перший номер">
                    <Row>
                        <Col md={5}>
                            <div className="offers-title">Перший номер</div>

                            <div>Інформація про номер:</div>
                            <div>Вітальня, 16 кв. м.</div>
                            <div>Спальня 15 кв.</div>
                            <div>Санвузол 9 м.кв.</div>
                            <div>Вміст:</div>
                            <div>Розкладна канапа "американка" 1,60х2,00</div>
                            <div>Холодильник</div>
                            <div>Телевізор (SAt TV Hotbirt, Sirius, Amos)</div>
                            <div>шафа для речей</div>
                            <div>Велике дерев`яне ліжко 2.00x1.80</div>
                            <div>фен</div>
                        </Col>

                        <Col md={7}>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey={2} title="Другий номер">
                    <Row>
                        <Col md={5}>
                            <div>ДРУГИЙ НОМЕР</div>

                            <div>Інформація про номер:</div>
                            <div>Вітальня, 15 кв. м.</div>
                            <div>Спальня 15 кв.</div>
                            <div>Санвузол 5 м.кв.</div>
                            <div>Вміст:</div>
                            <div>Розкладна канапа "американка" 1,60х2,00</div>
                            <div>Холодильник</div>
                            <div>Телевізор (SAt TV Hotbirt, Sirius, Amos)</div>
                            <div>Шафа для речей та одягу</div>
                            <div>Дерев`яне ліжко 2.00x1.40, Ортопедичний матрас</div>
                            <div>фен</div>
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