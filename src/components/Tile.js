import React from 'react';
import { Grid, Row, Col } from  'react-bootstrap';
import {FormattedMessage} from 'react-intl'

const Tile = () =>
    <div className="tile-wrapper">
        <Grid>
            <Row>
                <Col sm={8} xs={12} className="tile tile-large">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062514" alt=""/>
                </Col>
                <Col sm={4} xs={12} className="tile tile-small">
                    <div><FormattedMessage id="tile.header1"/></div>
                </Col>

                <Col sm={4} xs={12} className="tile tile-small">
                    <div>
                        <FormattedMessage id="tile.header2"/>
                    </div>
                </Col>
                <Col sm={8} xs={12} className="tile tile-large">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512" alt=""/>
                </Col>

                <Col sm={8} xs={12} className="tile tile-large">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062514" alt=""/>
                </Col>
                <Col sm={4} xs={12} className="tile tile-small">
                    <div>
                        <FormattedMessage id="tile.header3"/>
                    </div>
                </Col>

                <Col sm={4} xs={12} className="tile tile-small">
                    <div>
                        <FormattedMessage id="tile.header4"/>
                    </div>
                </Col>
                <Col sm={8} xs={12} className="tile tile-large">
                    <img src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512" alt=""/>
                </Col>
            </Row>
        </Grid>
    </div>;

export default Tile;