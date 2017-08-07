import React, { Component } from 'react';
import { PhotoSwipeGallery } from 'react-photoswipe';

class LightboxGallery extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            options: {}
        };
    }

    getThumbnailContent = (item) => {
        return (
            <div>
                <img src={ item.thumbnail }/>
                <div className="plug">
                    <img src={require('../../images/search.svg')} alt=""/>
                </div>
            </div>
        );
    };

    render() {
        return (
            <PhotoSwipeGallery
                className="clearfix"
                items={ this.props.images }
                thumbnailContent={ this.getThumbnailContent }/>
        );
    }
}

export default LightboxGallery;
