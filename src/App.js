import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Offers from './components/Offers';
import Contact from './containers/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>

                <Router>
                    <div>
                        <Route exact path={'/'} component={ Home }/>
                        <Route path={'/about-us'} component={ AboutUs }/>
                        <Route path={'/offers'} component={ Offers }/>
                        <Route path={'/contact'} component={ Contact }/>
                    </div>
                </Router>

                <Footer/>
            </div>
        )
    }
}

export default App;
