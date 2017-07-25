import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/about-us/AboutUs';
import Offers from './components/offers/Offers';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
