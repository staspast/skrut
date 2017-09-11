import React, {Component} from 'react';
import Header from  '../header/Header';
import ModalStructure from  '../../containers/modal/Modal';
import {Grid, Row, Col} from  'react-bootstrap';
import {FormattedMessage} from 'react-intl'

const Description = {
    review: (<FormattedMessage id="reviews.desc"/>),
    button: (<FormattedMessage id="reviews.add"/>)
};

const HeaderTitle = {
    title: "header.title.reviews",
    name: 'header.name.reviews'
};

class Reviews extends Component {

  constructor() {
    super();

    this.state = {
      reviews: []
    };

    this.getReviews();
  }

  getReviews = () => {
    fetch('http://localhost:8080/api/comments',
      {
        method: 'GET',
      })
      .then(res => res.json())
      .then(res => { this.setState({ reviews: res.data }) })
  };

    render() {
        return (
            <div className="reviews">
                <Header header={ HeaderTitle }/>

                <Grid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="reviews__title"><FormattedMessage id="reviews.title"/></div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <ModalStructure description={ Description }/>
                        </Col>
                    </Row>

                  {
                    this.state.reviews.length !== 0 &&

                    <Row>
                      {
                        this.state.reviews.map((item, index) => (
                          <Col xs={12}>
                              <div className="reviews__page">
                                  <div className="reviews__data">
                                      <div className="reviews__data--name">{item.name}</div>
                                      <div className="reviews__data--city">{item.city_from}</div>
                                      <div className="reviews__data--description">
                                        {item.message}
                                      </div>
                                  </div>

                                  <div className="reviews__date">
                                      <div className="reviews__date--day">{new Date(item.date_posted).getUTCDay()}</div>
                                      <div className="reviews__date--month">{new Date(item.date_posted).getMonth()}</div>
                                      <div className="reviews__date--year">{new Date(item.date_posted).getYear()}</div>
                                  </div>
                              </div>
                          </Col>

                        ))}
                    </Row>
                  }
                </Grid>
            </div>
        )
    }
}

export default Reviews;
