import React from 'react';
import Header from  './Header';
import {Grid, Row, Col, Button} from  'react-bootstrap';

const Reviews = () =>
    <div className="reviews">
        <Header/>

        <Grid>
            <Row>
                <Col xs={12}>
                    <Button pullRight> Add new review </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="reviews__page">
                        <div className="reviews__data">
                            <div className="reviews__data--name">Andriy Spas</div>
                            <div className="reviews__data--city">Lviv</div>
                            <div className="reviews__data--description">
                                Lorem Ipsum is simply text of the printing and typesetting industry is simply text of
                                the printing and typesetting industry. Lorem Ipsum is simply text of the printing and typesetting
                                industry is simply text of the printing and typesetting industry. Lorem Ipsum is simply text of the
                                printing and typesetting industry is simply text of
                                the printing and typesetting industry.
                            </div>
                        </div>

                        <div className="reviews__date">
                            <div className="reviews__date--day">12</div>
                            <div className="reviews__date--month">July</div>
                            <div className="reviews__date--year">2017</div>
                        </div>
                    </div>
                </Col>

                <Col xs={12}>
                    <div className="reviews__page">
                        <div className="reviews__data">
                            <div className="reviews__data--name">Andriy Spas</div>
                            <div className="reviews__data--city">Lviv</div>
                            <div className="reviews__data--description">
                                Lorem Ipsum is simply text of the printing and typesetting industry is simply text of
                                the printing and typesetting industry. Lorem Ipsum is simply text of the printing and typesetting
                                industry is simply text of the printing and typesetting industry. Lorem Ipsum is simply text of the
                                printing and typesetting industry is simply text of
                                the printing and typesetting industry.
                            </div>
                        </div>

                        <div className="reviews__date">
                            <div className="reviews__date--day">12</div>
                            <div className="reviews__date--month">July</div>
                            <div className="reviews__date--year">2017</div>
                        </div>
                    </div>
                </Col>

                <Col xs={12}>
                    <div className="reviews__page">
                        <div className="reviews__data">
                            <div className="reviews__data--name">Andriy Spas</div>
                            <div className="reviews__data--city">Lviv</div>
                            <div className="reviews__data--description">
                                Lorem Ipsum is simply text of the printing and typesetting industry is simply text of
                                the printing and typesetting industry. Lorem Ipsum is simply text of the printing and typesetting
                                industry is simply text of the printing and typesetting industry. Lorem Ipsum is simply text of the
                                printing and typesetting industry is simply text of
                                the printing and typesetting industry.
                            </div>
                        </div>

                        <div className="reviews__date">
                            <div className="reviews__date--day">12</div>
                            <div className="reviews__date--month">July</div>
                            <div className="reviews__date--year">2017</div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Grid>

    </div>;

export default Reviews;
