import React, {Component} from 'react';
import {Grid, Row, Col, Tab, Tabs} from  'react-bootstrap';
import {Header} from  '../index';
import PriceInformation from './price/Price'
import {LightboxGallery} from '../../containers';
import {GalleryItems} from "../../constants/Images.js";
import {FormattedMessage} from 'react-intl'

const HeaderTitle = {
    title: "header.title.offers",
    name: 'header.name'
};

class Offers extends Component {
    render() {
        return (
            <div className="offers">
                <Header header={HeaderTitle}/>

                <Grid>
                    <Tabs defaultActiveKey={1} id="offers__tabs">
                        <Tab eventKey={1} title={(<FormattedMessage id="offer.first.name"/>)}>
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

                                        <div><FormattedMessage id="offer.ifNeeded"/></div>
                                        <ul>
                                            <li><FormattedMessage id="offer.livingRoom"/></li>
                                            <li>
                                                <div>
                                                    <span><FormattedMessage id="offer.kitchen"/></span>
                                                    <ul>
                                                        <li><FormattedMessage id="offer.stove"/></li>
                                                        <li><FormattedMessage id="offer.microwave"/></li>
                                                        <li><FormattedMessage id="offer.fridge"/></li>
                                                        <li><FormattedMessage id="offer.dishes"/></li>
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
                        <Tab eventKey={2} title={(<FormattedMessage id="offer.second.name"/>)}>
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

                                        <div><FormattedMessage id="offer.ifNeeded"/></div>
                                        <ul>
                                            <li><FormattedMessage id="offer.livingRoom"/></li>
                                            <li>
                                                <div>
                                                    <span><FormattedMessage id="offer.kitchen"/></span>
                                                    <ul>
                                                        <li><FormattedMessage id="offer.stove"/></li>
                                                        <li><FormattedMessage id="offer.microwave"/></li>
                                                        <li><FormattedMessage id="offer.fridge"/></li>
                                                        <li><FormattedMessage id="offer.dishes"/></li>
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
            </div>
        )
    }
}

export default Offers;