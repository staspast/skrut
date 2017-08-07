import React, {Component} from 'react'
import {Header} from  '../index'
import { Grid, Row, Col } from  'react-bootstrap'
import { FormattedMessage } from 'react-intl'

const HeaderTitle = {
    title: "header.title.about-us",
    name: 'header.name'
};

class AboutUs extends Component {
  render() {
    return (
        <div className="about-us">
          <Header header={HeaderTitle}/>

          <Grid>
            <Row>
              <Col xs={12}>
                <div className="about-us__title"><FormattedMessage id="aboutUs.welcome"/></div>
              </Col>

              <Col xs={12}>
                <div className="about-us__description about-us__description--columns">
                  <div>
                    <FormattedMessage id="aboutUs.desc1"/>
                  </div>
                  <div>
                    <FormattedMessage id="aboutUs.desc2"/>
                  </div>
                  <div>
                    <FormattedMessage id="aboutUs.desc3"/>
                  </div>
                  <div>
                    <FormattedMessage id="aboutUs.desc4"/>
                  </div>
                  <div>
                    <FormattedMessage id="aboutUs.desc5"/>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="about-us__image">
                <img
                    src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512"
                    alt=""/>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="about-us__title">
                  <FormattedMessage id="aboutUs.desc6"/>
                </div>
              </Col>

              <Col xs={12} sm={6}>
                <div className="about-us__description">

                  <div>
                    <FormattedMessage id="aboutUs.desc7"/>
                  </div>

                  <div>
                    <FormattedMessage id="aboutUs.desc8"/>
                  </div>

                  <div>
                    <FormattedMessage id="aboutUs.desc9"/>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} className="about-us__image">
                <img
                    src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512"
                    alt=""/>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="about-us__title">
                  <FormattedMessage id="aboutUs.additional"/>
                </div>
              </Col>

              <Col xs={12} sm={6} smPush={6}>
                <div className="about-us__description">
                  <div>
                    <FormattedMessage id="aboutUs.desc10"/>
                  </div>

                  <div>
                    <FormattedMessage id="aboutUs.desc11"/>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} smPull={6}>
                <div className="about-us__image">
                  <img
                      src="http://media.istockphoto.com/photos/carpathian-mountains-yaremche-ivanofrankivska-oblast-ukraine-mountain-picture-id641062512"
                      alt=""/>
                </div>
              </Col>
            </Row>
          </Grid>

        </div>
    )
  }
}

export default AboutUs