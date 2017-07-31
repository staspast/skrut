import React from 'react';
import {FormattedMessage} from 'react-intl'

const Header = () =>
    <header>
        <div className="header-title">
            <h1>
              <FormattedMessage id="header.part1"/>
            </h1>
            <h2>
              <FormattedMessage id="header.part2"/>
            </h2>
        </div>
    </header>;

export default Header;
