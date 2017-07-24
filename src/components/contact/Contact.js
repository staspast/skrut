import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl } from  'react-bootstrap';

class Contact extends Component{

  constructor (){
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
    return value !== '' || value !== undefined;
  }

  validateEmail = (email) => {
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  render(){
    return(
      <form>
        <FormGroup
          controlId="nameText"
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
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
            componentClass="textarea"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
        </FormGroup>
      </form>
    )
  }
}

export default Contact;