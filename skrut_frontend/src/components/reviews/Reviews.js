import React, {Component} from 'react';
import Header from  '../header/Header';
import ModalStructure from  '../../containers/modal/Modal';
import {Grid, Row, Col} from  'react-bootstrap';

const Description = {
    review: 'Будемо раді, якщо Ви поділитеся своїми враженнями про свій відпочинок.',
    button: 'Add new review'
};

const HeaderTitle = {
    title: "header.title.reviews",
    name: 'header.name.reviews'
};

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            comments: []
        };

        this.getReviews();
    }

    getReviews = () => {
        fetch('http://localhost:8080/api/comments',
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => { this.setState({ comments: res.data }) })
    };

    render() {
        return (
            <div className="reviews">
                <Header header={ HeaderTitle }/>

                <Grid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="reviews__title">Відгуки наших гостей</div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <ModalStructure description={ Description }/>
                        </Col>
                    </Row>

                    <Row>
                        {
                            this.state.comments.length !== 0 &&  this.state.comments.map((item, index) => (
                            <Col xs={12}>
                                <div className="reviews__page">
                                    <div className="reviews__data">
                                        <div className="reviews__data--name">{ item.name }</div>
                                        <div className="reviews__data--city">{ item.city }</div>
                                        <div className="reviews__data--description">{ item.message }</div>
                                    </div>

                                    <div className="reviews__date">
                                        { item.date_post }
                                        <div className="reviews__date--day">12</div>
                                        <div className="reviews__date--month">July</div>
                                        <div className="reviews__date--year">2017</div>
                                    </div>
                                </div>
                            </Col>
                            ))
                        }
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Reviews;
