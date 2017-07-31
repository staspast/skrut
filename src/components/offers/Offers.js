import React from 'react';
import {Grid, Row, Col, Tab, Tabs} from  'react-bootstrap';
import {Header} from  '../index';
import PriceInformation from './price/Price'
import {LightboxGallery} from '../../containers';
import {GalleryItems} from "../../constants/Images.js";
import {FormattedMessage} from 'react-intl'

const Offers = () =>
    <div className="offers">
        <Header/>

        <Grid>
            <Tabs defaultActiveKey={1} id="offers__tabs">
                <Tab eventKey={1} title="Перший номер">
                    <Row>
                        <Col md={5}>
                            <div className="offers-title"><FormattedMessage id="offer.first.name"/></div>

                            <div className="offers-information">
                                <div><FormattedMessage id="offer.info"/></div>
                                <ul>
                                    <li><FormattedMessage id="offer.first.livingRoom"/></li>
                                    <li><FormattedMessage id="offer.first.bedroom"/></li>
                                    <li><FormattedMessage id="offer.first.restroom"/></li>
                                </ul>
                                <div><FormattedMessage id="offer.first.inside"/></div>
                                <ul>
                                    <li><FormattedMessage id="offer.first.sofa"/></li>
                                    <li><FormattedMessage id="offer.first.fridge"/></li>
                                    <li><FormattedMessage id="offer.first.tv"/></li>
                                    <li><FormattedMessage id="offer.first.wardrobe"/></li>
                                    <li><FormattedMessage id="offer.first.bed"/></li>
                                    <li><FormattedMessage id="offer.first.hairdryer"/></li>
                                </ul>

                                <div>За потребою :</div>
                                <ul>
                                    <li>Господарі нададуть Вам у користування вітальню</li>
                                    <li>
                                        <div>
                                            <span>Можна rористуватися кухнею господарів</span>
                                            <ul>
                                                <li>газова плитка</li>
                                                <li>мікрохвильова піч</li>
                                                <li>морозильна камера</li>
                                                <li>посуд</li>
                                            </ul>
                                        </div>
                                    </li>
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
                            <div><FormattedMessage id="offer.second.name"/></div>

                            <div className="offers-information">
                                <div><FormattedMessage id="offer.info"/></div>
                                <ul>
                                    <li><FormattedMessage id="offer.second.livingRoom"/></li>
                                    <li><FormattedMessage id="offer.second.bedroom"/></li>
                                    <li><FormattedMessage id="offer.second.restroom"/></li>
                                </ul>
                                <div><FormattedMessage id="offer.second.inside"/></div>
                                <ul>
                                    <li><FormattedMessage id="offer.second.sofa"/></li>
                                    <li><FormattedMessage id="offer.second.fridge"/></li>
                                    <li><FormattedMessage id="offer.second.tv"/></li>
                                    <li><FormattedMessage id="offer.second.wardrobe"/></li>
                                    <li><FormattedMessage id="offer.second.bed"/></li>
                                    <li><FormattedMessage id="offer.second.hairdryer"/></li>
                                </ul>

                                <div>За потребою :</div>
                                <ul>
                                    <li>Господарі нададуть Вам у користування вітальню</li>
                                    <li>
                                        <div>
                                            <span>Можна rористуватися кухнею господарів</span>
                                            <ul>
                                                <li>газова плитка</li>
                                                <li>мікрохвильова піч</li>
                                                <li>морозильна камера</li>
                                                <li>посуд</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={7}>
                            <LightboxGallery images={ GalleryItems }/>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>

            <Row>
                <Col xs={12}>
                    <PriceInformation/>
                </Col>
            </Row>
        </Grid>
    </div>;

export default Offers;