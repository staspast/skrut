import React, { Component } from 'react';
import { PhotoSwipeGallery } from 'react-photoswipe';

class LightboxGallery extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
            galleryItems: [
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/1',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
                    w: 1200,
                    h: 900,
                    title: 'Image 1'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/2',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
                    w: 1200,
                    h: 900,
                    title: 'Image 2'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/3',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
                    w: 1200,
                    h: 900,
                    title: 'Image 3'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/3',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
                    w: 1200,
                    h: 900,
                    title: 'Image 3'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/4',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
                    w: 1200,
                    h: 900,
                    title: 'Image 4'
                }
            ],
            options: {}
        };
    }

    getThumbnailContent = (item) => {
        return (
            <img src={ item.thumbnail }/>
        );
    };

    render() {
        return (
            <PhotoSwipeGallery
                items={ this.state.galleryItems }
                thumbnailContent={ this.getThumbnailContent }/>
        );
    }
}

export default LightboxGallery;
