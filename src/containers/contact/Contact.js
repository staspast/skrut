import React, {Component} from 'react'
import {Grid, FormGroup, FormControl, Row, Col, Button, Form} from  'react-bootstrap'
import {Header} from  '../../components';
import {Map} from '../../containers';
import {FormattedMessage} from 'react-intl'
import Notification from '../notification/Notification'

const HeaderTitle = {
    title: "header.title.contact",
    name: 'header.name'
};

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
            nameValid: false,
            emailValid: false,
            messageValid: false,
            success: false,
            error: false,
            visibility: false
        }
    }

    toggleClass = () => {
        const currentState = this.state.visibility;
        this.setState({ visibility: !currentState });
    };

    validateNotEmpty = (value) => {
        return value !== '' && value !== undefined
    };

    validateEmail = (email) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        return reg.test(email);
    };

    inputsValid = () => {
        return this.validateEmail(this.state.email) && this.validateNotEmpty(this.state.name) && this.validateNotEmpty(this.state.message)
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    };

    sendEmail = (e) => {
        this.toggleClass();
        fetch('https://script.google.com/macros/s/AKfycbwcAOuP_lwPBboegRx3dJouQVAdtGQVmL1N28AgO_pKePIsWYTX/exec?name=' +
            this.state.name + '&mail=' +
            this.state.surname + '&surname=' +
            this.state.phone + '&phone=' +
            this.state.email + '&message=' +
            this.state.message, {method: 'GET'})
            .then((res) => {
                if(res.status == 200) {
                    this.setState({ success: true });
                    this.toggleClass();
                } else {
                    this.setState({ error: true });
                }

                this.setState({ success: false });
            });

        e.preventDefault()
    };

    render() {
        return (
            <div className="contact">
                <Header header={ HeaderTitle }/>

                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="contact__title"><FormattedMessage id="navbar.contact"/></div>

                            <div className="contact__information">
                                <span><FormattedMessage id="contact.writeToUs"/> </span>
                                <a href="mailto:skrut@online.ua">skrut@online.ua</a>
                                <span><FormattedMessage id="contact.fillForm"/></span>
                            </div>

                            <h4><FormattedMessage id="contact.name"/> </h4>

                            <Row className="contact__address">
                                <Col xs={4}>
                                    <FormattedMessage id="contact.address"/>
                                </Col>
                                <Col xs={8}>
                                    <div><FormattedMessage id="contact.street"/> </div>
                                    <div><FormattedMessage id="contact.town"/> </div>
                                    <div><FormattedMessage id="contact.region"/> </div>
                                </Col>
                            </Row>

                            <Row className="contact__phone">
                                <Col xs={4}>
                                    <FormattedMessage id="contact.phone"/>
                                </Col>
                                <Col xs={8}>
                                    <div>+38 096 355 28 25</div>
                                    <div>+38 063 461 06 99</div>
                                    <div>+38 095 436 31 45</div>
                                </Col>
                            </Row>

                            <Row className="contact__phone">
                                <Col xs={4}>
                                    <FormattedMessage id="contact.email"/>
                                </Col>
                                <Col xs={8}>
                                    <a href="mailto:skrut@online.ua">skrut@online.ua</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6} className="form form__custom">
                            <div className="contact__title"><FormattedMessage id="contact.form"/> </div>

                            <Form
                                onSubmit={ this.sendEmail }
                                autoComplete="off"
                            >
                                <Row>
                                    <Col xs={6}>
                                        <FormGroup controlId="nameText">
                                            <FormControl
                                                className={ this.validateNotEmpty(this.state.name) ? '' : 'has-error' }
                                                type="text"
                                                placeholder="Name"
                                                value={ this.state.name }
                                                onChange={ this.handleNameChange }
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={6}>
                                        <FormGroup controlId="surnameText">
                                            <FormControl
                                                type="text"
                                                placeholder="Surname"
                                            />
                                        </FormGroup>

                                    </Col>

                                    <Col xs={6}>
                                        <FormGroup controlId="phoneText">
                                            <FormControl
                                                type="text"
                                                placeholder="Phone"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={6}>
                                        <FormGroup controlId="emailText">
                                            <FormControl
                                                className={ this.validateEmail(this.state.name) ? '' : 'has-error' }
                                                type="email"
                                                placeholder="Email"
                                                value={ this.state.email }
                                                onChange={ this.handleEmailChange }
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={12}>
                                        <FormGroup controlId="messageText">
                                            <FormControl
                                                className={ this.validateNotEmpty(this.state.message) ? '' : 'has-error' }
                                                componentClass="textarea"
                                                maxLength="1000"
                                                placeholder="Message"
                                                value={ this.state.message }
                                                onChange={ this.handleMessageChange }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className={ this.state.visibility ? 'hide__button': null } >
                                    <Col xs={12}>
                                        <button
                                            className="button pull-right"
                                            disabled={ !this.inputsValid() }
                                            type="submit"
                                        >
                                            Send mail
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Grid>

                <Map/>

                <Notification
                    success={ this.state.success }
                    error={ this.state.error }
                />

            </div>
        )
    }
}

export default Contact