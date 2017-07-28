import React from 'react';
import { Grid, Row, Col, Tab, Nav, NavItem } from  'react-bootstrap';
import Header from  './Header';
import LightboxGallery from '../containers/LightboxGallery';

const Offers = () =>
    <div className="offers">
        <Header/>

        <Grid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="pills">
                            <NavItem eventKey="first">
                                Tab 1
                            </NavItem>
                            <NavItem eventKey="second">
                                Tab 2
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Col md={7}>
                                        <div className="offers-title">ПЕРШИЙ НОМЕР</div>

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

                                    <Col md={5}>
                                        <LightboxGallery/>
                                    </Col>
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                    <Col md={7}>
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

                                    <Col md={5}>
                                        <LightboxGallery/>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Grid>
    </div>;

export default Offers;