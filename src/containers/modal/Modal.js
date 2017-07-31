import React, {Component} from 'react';
import {Modal, Form, FormGroup, FormControl, Row, Col} from  'react-bootstrap';

class ModalStructure extends Component {
    constructor(){
        super();

        this.state = {
            show: false
        }
    }

    close = () => {
        this.setState({ show: false });
    };

    open = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div>
                <Modal
                    show={ this.state.show }
                    onHide={ this.close }
                    bsSize="large"
                    aria-labelledby="contained-modal-title-lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="clearfix form">
                        <h4>{ this.props.description.test }</h4>

                        <Form autoComplete="off">
                            <Row>
                                <Col xs={6}>
                                    <FormGroup controlId="nameText">
                                        <FormControl
                                            type="text"
                                            placeholder="Name"
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

                                <Col xs={12}>
                                    <FormGroup controlId="cityText">

                                        <FormControl
                                            type="text"
                                            placeholder="City"
                                        />
                                    </FormGroup>
                                </Col>

                                <Col xs={12}>
                                    <FormGroup controlId="messageText">
                                        <FormControl
                                            componentClass="textarea"
                                            placeholder="Message"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>

                        <button
                            className="pull-right"
                            type="submit"
                        >
                            Send review
                        </button>
                    </Modal.Body>

                </Modal>

                <button onClick={ this.open }>{ this.props.description.button }</button>
            </div>
        );
    }
}

export default ModalStructure;