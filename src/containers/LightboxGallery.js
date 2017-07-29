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
                    test
                </div>
            </div>
        );
    };

    render() {
        return (
            <PhotoSwipeGallery
                items={ this.props.images }
                thumbnailContent={ this.getThumbnailContent }/>
        );
    }
}

export default LightboxGallery;
