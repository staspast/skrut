import React from 'react';
import Tile from '../tile/Tile';
import Video from '../video/Video';

const Home = () =>
    <div>
        <section>
            <div className="title">
                <h1>
                    Lorem Ipsum is simply
                </h1>
                <h2>
                    text of the printing and typesetting industry.
                </h2>
            </div>

            <Video/>
        </section>

        <Tile/>
    </div>;

export default Home;