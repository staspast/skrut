import React from 'react';
import { FormGroup, ControlLabel, FormControl } from  'react-bootstrap';

const Contact = () =>
    <form>
        <FormGroup
            controlId="formBasicText"
        >
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
                type="text"
                placeholder="Enter text"
            />
            <FormControl.Feedback />
        </FormGroup>
    </form>;

export default Contact;