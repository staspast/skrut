import React, { Component } from 'react'
import { Modal, Form, FormGroup, FormControl, Row, Col } from  'react-bootstrap'
import {FormattedMessage} from 'react-intl'
import ReCAPTCHA from 'react-google-recaptcha';

class ModalStructure extends Component {
  constructor () {
    super()

    this.state = {
      show: false,
      captchaValue: '',
      name: '',
      city: '',
      message: ''
    }
  }

  close = () => {
    this.setState({show: false})
  }

  open = () => {
    this.setState({show: true})
  }

  validateField = (value) => {
    return value !== '' && value !== undefined
  }

  fieldValid = () => {
    return this.validateField(this.state.name) && this.validateField(this.state.message) && this.state.captchaValue
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleCityChange = (event) => {
    this.setState({city: event.target.value})
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value})
  }

  onChange = (value) => {
    this.setState({captchaValue: value})
  }

  submitReview = () => {
    let data = {
      name: this.state.name,
      city_from: this.state.city,
      message: this.state.message,
      date_posted: new Date(),
      recaptcha: this.state.captchaValue
    }

    fetch('http://localhost:8080/api/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(res => this.setState({captchaValue: res.success}))
  }

  render () {
    return (
      <div>
        <Modal
          show={ this.state.show }
          onHide={ this.close }
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >

          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{ this.props.description.review }</Modal.Title>
          </Modal.Header>

          <Modal.Body className="clearfix form">
            <Form autoComplete="off" onSubmit={ this.submitReview }>
              <Row>
                <Col xs={6}>
                  <FormGroup controlId="nameText">
                    <FormControl
                      type="text"
                      placeholder="Name"
                      onChange={this.handleNameChange}
                    />
                  </FormGroup>
                </Col>

                <Col xs={6}>
                  <FormGroup controlId="cityText">

                    <FormControl
                      type="text"
                      placeholder="City"
                      onChange={this.handleCityChange}
                    />
                  </FormGroup>
                </Col>

                <Col xs={12}>
                  <FormGroup controlId="messageText">
                    <FormControl
                      componentClass="textarea"
                      placeholder="Message"
                      onChange={this.handleMessageChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <ReCAPTCHA
                    className="pull-right recaptcha"
                    ref="recaptcha"
                    sitekey="6Ld1rg0TAAAAAJ8UqLFRrgG027Qlmegmhi9FeIGX"
                    onChange={ this.onChange }
                  />

                </Col>
              </Row>

              <button
                className="button pull-right"
                type="submit"
                disabled={ !this.fieldValid() }
              >
                <FormattedMessage id="reviews.send"/>
              </button>
            </Form>
          </Modal.Body>

        </Modal>

        <button className="button" onClick={ this.open }>{ this.props.description.button }</button>
      </div>
    )
  }
}

export default ModalStructure