import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__title">
                    <h1>
                        <FormattedMessage id={ this.props.header.title }/>
                    </h1>
                    <h2>
                        <FormattedMessage id={ this.props.header.name }/>
                    </h2>
                </div>
            </header>
        )
    }
}

export default Header;
