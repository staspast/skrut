import React, {Component} from 'react';
import {Modal, Button} from  'react-bootstrap';

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

                    <Modal.Body>
                        <h4>{ this.props.description.test }</h4>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.close }>Close</Button>
                    </Modal.Footer>

                </Modal>

                <button onClick={ this.open }>{ this.props.description.button }</button>
            </div>
        );
    }
}

export default ModalStructure;