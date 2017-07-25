import React, {Component} from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'
import Header from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Tile from './components/tile/Tile';
import Footer from './components/footer/Footer';
import Video from './components/video/Video';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

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

                <Footer/>

                <BrowserRouter>
                    <div>
                        <Route path={'/contact'} component={ Contact }/>
                        {/*<Route path={'/chat'} component={ Chat }/>*/}
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default App;
