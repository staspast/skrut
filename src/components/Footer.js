import React from 'react';
import { Grid, Row, Col } from  'react-bootstrap';
import {FormattedMessage} from 'react-intl'

const Footer = () =>
    <footer className="footer">
        <Grid>
            <Row>
                <Col xs={12} sm={4}>
                    <a href="/" className="footer__title">
                        <FormattedMessage id="title"/>
                    </a>
                    <div className="footer__about-us">
                        <FormattedMessage id="footer.desc"/>
                    </div>
                </Col>

                <Col xs={12} sm={6} smOffset={2} md={5} mdOffset={3} lg={4} lgOffset={4}>
                    <div className="footer__title">
                        <FormattedMessage id="contact.form"/>
                    </div>
                    <ul className="footer__contact-us">
                        <li>
                            <img src={require('../images/placeholder.svg')} alt=""/>
                            <div className="footer__contact-us--address">
                                <div><FormattedMessage id="contact.street"/> <FormattedMessage id="contact.town"/> <br/> <FormattedMessage id="contact.region"/></div>
                            </div>
                        </li>
                        <li>
                            <img src={require('../images/phone-call-black.svg')} alt=""/>
                            <span>+38 096 355 28 25</span>
                        </li>
                        <li>
                            <img src={require('../images/mail.svg')} alt=""/>
                            <span>skrut@online.ua</span>
                        </li>
                    </ul>
                </Col>

                <Col xs={12}>
                    <div className="footer__copyright">Copyright © Skrut 2017</div>
                </Col>
            </Row>
        </Grid>
    </footer>;

export default Footer;