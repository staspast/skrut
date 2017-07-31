import React from 'react';
import Tile from './tile/Tile';
import Video from './video/Video';

const Home = () =>
    <section>
        <div className="home">
            <div className="header__title">
                <h1>
                    Lorem Ipsum is simply
                </h1>
                <h2>
                    text of the printing and typesetting industry.
                </h2>
            </div>

            <Video/>
        </div>

        <Tile/>
    </section>;

export default Home;