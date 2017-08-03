import React from 'react';
import Tile from './tile/Tile';
import Video from './video/Video';

const Home = () =>
    <section>
        <div className="home">
            <div className="header__title">
                <h1>
                    Садиба "У діда Віктора"
                </h1>
                <h2>
                    незабутній відпочинок у Карпатах
                </h2>
            </div>

            <Video/>
        </div>

        <Tile/>
    </section>;

export default Home;