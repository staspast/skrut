import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, AboutUs, Offers, Gallery, Footer, NavigationBar, Reviews } from './components/index';
import { Contact } from './containers/index';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';
import uk from 'react-intl/locale-data/uk';
import pl from 'react-intl/locale-data/pl';

addLocaleData(uk, pl);

let messagesUa = require('./locale/locale_ua.json');
let messagesEn = require('./locale/locale_en.json');
let localeUa = 'uk';
let localeEn = 'en';

class App extends Component {

    constructor() {
        super();

        this.state = {
            locale: localeUa,
            messages: messagesUa
        }
    }

    handleLanguageChange = (lan) => {
        switch (lan) {
            case 'ua':
                this.setState({messages: messagesUa, locale: localeUa});
                break;
            case 'en':
                this.setState({messages: messagesEn, locale: localeEn});
                break;
        }
    };

    render() {
        return (
            <IntlProvider
                locale={this.state.locale}
                messages={this.state.messages}
            >

                <div className="App">
                    <NavigationBar onLanguageChange={this.handleLanguageChange}/>

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

            </IntlProvider>
        )
    }
}

export default App;
