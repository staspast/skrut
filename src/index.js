import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { IntlProvider } from 'react-intl';
import {addLocaleData} from 'react-intl';
import uk from 'react-intl/locale-data/uk';
import pl from 'react-intl/locale-data/pl';

addLocaleData(uk, pl)

let messagesUa = require('./locale/locale_ua.json');
let locale = 'uk';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messagesUa}>
    <App />
  </IntlProvider>, document.getElementById('root'))
registerServiceWorker()
