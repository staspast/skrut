import React from 'react';
import { Grid, Row, Col } from  'react-bootstrap';

const Tile = () =>
    <Grid className="tile-wrapper">
        <Row>
            <Col sm={8} xs={12} className="tile">1</Col>
            <Col sm={4} xs={12} className="tile">2</Col>

            <Col sm={4} xs={12} className="tile">3</Col>
            <Col sm={8} xs={12} className="tile">4</Col>

            <Col sm={8} xs={12} className="tile">5</Col>
            <Col sm={4} xs={12} className="tile">6</Col>
        </Row>
    </Grid>;

export default Tile;