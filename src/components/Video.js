import React, {Component} from 'react';
import Url from '../images/Mountain_Waterfall.mp4';

class Video extends Component {
    render() {
        return (
            <video loop autoPlay>
                <source src={ Url } type="video/mp4"/>
                <source src={ Url } type="video/ogg"/>
            </video>
        )
    }
}

export default Video;