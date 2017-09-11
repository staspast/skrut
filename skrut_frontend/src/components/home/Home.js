import React from 'react';
import Tile from './tile/Tile';
import Video from './video/Video';
import {FormattedMessage} from 'react-intl'

const Home = () =>
    <section>
        <div className="home">
            <div className="header__title">
                <h1>
                  <FormattedMessage id="home.title"/>
                </h1>
                <h2>
                  <FormattedMessage id="home.desc"/>
                </h2>
            </div>

            <Video/>
        </div>

        <Tile/>
    </section>;

export default Home;