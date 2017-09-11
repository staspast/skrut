import React from 'react';
import {Grid, Row, Col} from  'react-bootstrap';
import { FormattedMessage } from 'react-intl'

const Tile = () =>
    <div className="tile__wrapper">
        <Grid>
            <Row>
                <Col xs={12} sm={8} className="tile tile__large">
                    <img
                        src={require('../../../images/rock2.jpg')}
                        alt=""/>
                </Col>
                <Col xs={12} sm={4} className="tile tile__small">
                    <div><FormattedMessage id="tile.header1"/></div>
                </Col>

                <Col sm={8} xs={12} smPush={4} className="tile tile__large">
                    <img
                        src={require('../../../images/rock3.jpg')}
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} smPull={8} className="tile tile__small">
                    <div>
                        <FormattedMessage id="tile.header2"/>
                    </div>
                </Col>

                <Col sm={8} xs={12} className="tile tile__large">
                    <img
                        src={require('../../../images/river1.jpg')}
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} className="tile tile__small">
                    <div>
                        <FormattedMessage id="tile.header3"/>
                    </div>
                </Col>

                <Col sm={8} xs={12} smPush={4} className="tile tile__large">
                    <img
                        src={require('../../../images/river2.jpg')}
                        alt=""/>
                </Col>
                <Col sm={4} xs={12} smPull={8} className="tile tile__small">
                    <div>
                        <FormattedMessage id="tile.header4"/>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>;

export default Tile;