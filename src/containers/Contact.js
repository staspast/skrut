import React, {Component} from 'react'
import {Grid, FormGroup, FormControl, Row, Col, Button} from  'react-bootstrap'
import Header from  '../components/Header';
import SimpleMapExample from '../containers/Map';

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
            messageValid: false
        }
    }

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

    handleSurnameChange = (event) => {
        this.setState({surname: event.target.value})
    };

    handlePhoneChange = (event) => {
        this.setState({phone: event.target.value})
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    };

    sendEmail = (e) => {
        fetch('https://script.google.com/macros/s/AKfycbwcAOuP_lwPBboegRx3dJouQVAdtGQVmL1N28AgO_pKePIsWYTX/exec?name=' +
            this.state.name + '&mail=' +
            this.state.surname + '&surname=' +
            this.state.phone + '&phone=' +
            this.state.email + '&message=' +
            this.state.message, {method: 'GET'})
            .then((res) => {
                console.log(res)
            });

        e.preventDefault()
    };

    render() {
        return (
            <div className="contact">
                <Header/>

                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="contact__title">Contact</div>

                            <div className="contact__information">
                                <span>Jeśli masz pytania odnośnie współpracy lub chcesz przesłać zapytanie ofertowe, napisz do nas na </span>
                                <a href="mailto:skrut@online.ua">skrut@online.ua</a>
                                <span> lub wypełnij  formularz kontaktowy. Skontaktujemy się z Tobą tak szybko, jak to możliwe.</span>
                            </div>

                            <h4>Садиба "У діда Віктора"</h4>

                            <Row className="contact__address">
                                <Col xs={4}>
                                    Address:
                                </Col>
                                <Col xs={8}>
                                    <div>вул. Хоткевича 5/2,</div>
                                    <div>м. Яремче,</div>
                                    <div>Ів-Франківська обл.</div>
                                </Col>
                            </Row>

                            <Row className="contact__phone">
                                <Col xs={4}>
                                    Phone:
                                </Col>
                                <Col xs={8}>
                                    <div>+38 096 355 28 25</div>
                                    <div>+38 063 461 06 99</div>
                                    <div>+38 095 436 31 45</div>
                                </Col>
                            </Row>

                            <Row className="contact__phone">
                                <Col xs={4}>
                                    E-mail:
                                </Col>
                                <Col xs={8}>
                                    <a href="mailto:skrut@online.ua">skrut@online.ua</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6} className="contact__form">
                            <div className="contact__title">Contact form</div>

                            <form
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
                                                className={ this.validateEmail(this.state.surname) ? '' : 'has-error' }
                                                type="text"
                                                placeholder="Surname"
                                                value={ this.state.surname }
                                                onChange={ this.handleSurnameChange }
                                            />
                                        </FormGroup>

                                    </Col>

                                    <Col xs={6}>
                                        <FormGroup controlId="phoneText">

                                            <FormControl
                                                className={ this.validateNotEmpty(this.state.phone) ? '' : 'has-error' }
                                                type="text"
                                                placeholder="Phone"
                                                value={ this.state.phone }
                                                onChange={ this.handlePhoneChange }
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
                                                placeholder="Message"
                                                value={ this.state.message }
                                                onChange={ this.handleMessageChange }
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </form>

                            <Button
                                className="pull-right"
                                disabled={ !this.inputsValid() }
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Grid>

                <SimpleMapExample/>
            </div>
        )
    }
}

export default Contact