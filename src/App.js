import React, {Component} from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>

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
