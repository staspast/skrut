import React from 'react';
import { Grid, Row, Col } from  'react-bootstrap';
import Header from  './Header';
import LightboxGallery from '../containers/LightboxGallery';


const Offers = () =>
    <div>
        <Header/>

        <LightboxGallery/>
    </div>;

export default Offers;