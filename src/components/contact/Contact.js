import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl, Row, Button } from  'react-bootstrap'
/* global gapi */
class Contact extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false
    }
  }

  validateNotEmpty = (value) => {
    return value !== '' && value !== undefined
  }

  validateEmail = (email) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return reg.test(email);
  }

  inputsValid = () => {
    return this.validateEmail(this.state.email) && this.validateNotEmpty(this.state.name) && this.validateNotEmpty(this.state.message)
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value})
  }

  sendEmail = (e) => {
    fetch('https://script.google.com/macros/s/AKfycbwcAOuP_lwPBboegRx3dJouQVAdtGQVmL1N28AgO_pKePIsWYTX/exec?name=' +
      this.state.name + '&mail=' +
      this.state.email + '&message=' +
      this.state.message, {method: 'GET'})
      .then((res) => {
        console.log(res)
      });

    e.preventDefault()
  }

  render () {
    return (
      <Row>
        <form onSubmit={this.sendEmail}>
          <FormGroup
            controlId="nameText"
          >
            <ControlLabel>Name</ControlLabel>
            <FormControl
              className={this.validateNotEmpty(this.state.name) ? '' : 'has-error'}
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>

          <FormGroup
            controlId="emailText"
          >
            <ControlLabel>Email</ControlLabel>
            <FormControl
              className={this.validateEmail(this.state.name) ? '' : 'has-error'}
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </FormGroup>

          <FormGroup
            controlId="messageText"
          >
            <ControlLabel>Message</ControlLabel>
            <FormControl
              className={this.validateNotEmpty(this.state.message) ? '' : 'has-error'}
              componentClass="textarea"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </FormGroup>

          <Button disabled={!this.inputsValid()} type="submit">Submit</Button>
        </form>
      </Row>
    )
  }
}

export default Contact