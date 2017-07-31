import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home,  AboutUs,  Offers,  Gallery, Footer, NavigationBar, Reviews } from './components/index';
import { Contact } from './containers/index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>

                <Router>
                    <div>
                        <Route exact path={'/'} component={ Home }/>
                        <Route path={'/about-us'} component={ AboutUs }/>
                        <Route path={'/gallery'} component={ Gallery }/>
                        <Route path={'/reviews'} component={ Reviews }/>
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
